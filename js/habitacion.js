/* ============================================================
   Residencia Chalo — js/habitacion.js
   Detalle por hash #hab-grande / #hab-sencilla leyendo
   window.CHALO_ROOMS. Si el hash no existe, muestra la primera
   habitación disponible. Escucha hashchange para repintar sin
   recargar (enlaces de "otras habitaciones"). Renderiza video,
   galería, ficha y CTA.
   ============================================================ */
(function () {
  'use strict';

  var habitaciones = (window.CHALO_ROOMS || []).filter(function (h) { return h.disponible !== false; });
  var disponibles = habitaciones.length ? habitaciones : (window.CHALO_ROOMS || []);
  var raiz = document.getElementById('detalle-habitacion');
  if (!raiz || !disponibles.length) { return; }

  var util = window.CHALO_UTIL || {};

  /* ----- Elegir habitación según el hash actual -----
     Si el hash no corresponde a ninguna habitación, cae a la
     primera disponible sin romper. */
  function resolverHab() {
    var slug = (location.hash || '').replace('#', '');
    var hab = null;
    disponibles.forEach(function (h) { if (h.slug === slug) { hab = h; } });
    return hab || disponibles[0];
  }

  /* ----- YouTube IFrame Player API -----
     Se carga una sola vez, de forma diferida y sin bloquear: solo
     cuando la primera ficha con ytid pinta su contenedor. Si la
     API ya está en window, se reutiliza; si no, se define
     onYouTubeIframeAPIReady una única vez (encadenando cualquier
     versión previa) y se resuelve la promesa que encola a los
     reproductores creados antes de que la API llegue. */
  var apiCargada = null;
  function cargarApiYouTube() {
    if (window.YT && window.YT.Player) { return Promise.resolve(window.YT); }
    if (apiCargada) { return apiCargada; }
    apiCargada = new Promise(function (resolver) {
      var previa = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof previa === 'function') { previa(); }
        resolver(window.YT);
      };
      var script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      (document.getElementsByTagName('script')[0] || document.head).appendChild(script);
    });
    return apiCargada;
  }

  /* Estado del reproductor actual (uno por ficha; hashchange lo
     destruye antes de repintar para no acumular iframes). */
  var player = null;
  var temporizadorBoton = null;
  /* Token que invalida promesas pendientes de la API tras un hashchange:
     sin él, un onYouTubeIframeAPIReady tardío del video anterior podría
     crear el reproductor en la ficha nueva con el videoId viejo. */
  var generacion = 0;

  function botonPlay() { return raiz.querySelector('.yt-play'); }
  function mostrarBoton() { var boton = botonPlay(); if (boton) { boton.hidden = false; } }
  function ocultarBoton() { var boton = botonPlay(); if (boton) { boton.hidden = true; } }

  function cancelarTemporizador() {
    if (temporizadorBoton) { clearTimeout(temporizadorBoton); temporizadorBoton = null; }
  }

  /* Si tras 1200 ms del onReady el video no está PLAYING (1) ni
     BUFFERING (3), el navegador bloqueó el autoplay con sonido:
     se muestra el botón para que un gesto del usuario arranque
     el audio. */
  function programarBoton() {
    cancelarTemporizador();
    temporizadorBoton = setTimeout(function () {
      temporizadorBoton = null;
      var estado = null;
      try { estado = player && player.getPlayerState(); } catch (error) { estado = null; }
      if (estado !== 1 && estado !== 3) { mostrarBoton(); }
    }, 1200);
  }

  function crearReproductor(videoId) {
    var promesa = cargarApiYouTube();
    /* Guardia de 4 s: si la API no llega, se cae en silencio
       (reproductor sin botón) sin romper la página. */
    var acaboLaGuardia = false;
    var guardia = setTimeout(function () { acaboLaGuardia = true; }, 4000);
    var miGeneracion = generacion;
    promesa.then(function (YT) {
      if (guardia) { clearTimeout(guardia); guardia = null; }
      /* La API tardó más de 4 s: fallback silencioso, reproductor sin
         botón y sin romper la página. */
      if (acaboLaGuardia || miGeneracion !== generacion) { return; }
      /* El render puede haber repintado (hashchange) antes de que
         cargara la API: el contenedor ya no es el mismo. */
      if (!document.getElementById('yt-player') || player) { return; }
      player = new YT.Player('yt-player', {
        videoId: videoId,
        playerVars: { autoplay: 1, controls: 0, rel: 0, playsinline: 1, modestbranding: 1, mute: 0 },
        events: {
          onReady: function () {
            player.playVideo();
            programarBoton();
          },
          onStateChange: function (evento) {
            /* PLAYING = 1, PAUSED = 2, UNSTARTED = -1 */
            if (evento.data === 1) { ocultarBoton(); }
            else if (evento.data === 2 || evento.data === -1) { mostrarBoton(); }
          },
          onError: function (evento) {
            console.warn('YouTube player error:', evento.data);
            mostrarBoton();
          }
        }
      });
    }).catch(function () { /* fallback silencioso */ });
  }

  function destruirReproductor() {
    generacion++;
    cancelarTemporizador();
    if (player) {
      try { player.destroy(); } catch (error) { /* ya removido */ }
      player = null;
    }
  }

  /* ----- Video con recorte (tapa placa del editor) -----
     YouTube: contenedor + API (autoplay fiable); el botón .yt-play
     queda oculto hasta que el navegador bloquee el audio. Sin ytid,
     el <video> local se deja exactamente como estaba. */
  function bloqueVideo(hab) {
    if (hab.video && hab.video.ytid) {
      var claseYt = (hab.video.vertical) ? ' recorte-video--vertical' : '';
      return (
        '<div class="recorte-video' + claseYt + '">' +
          '<div class="yt-marco"><div id="yt-player" class="yt-player"></div></div>' +
          '<button class="yt-play" type="button" hidden>Ver el tour con sonido</button>' +
          '<p class="placa-hab"><small>Residencia Chalo</small>' + hab.nombre + '</p>' +
        '</div>'
      );
    }
    var fuentes = '';
    if (hab.video && hab.video.hdWebm) {
      fuentes += '<source src="' + hab.video.hdWebm + '" type="video/webm">';
    }
    if (hab.video && hab.video.mp4) {
      fuentes += '<source src="' + hab.video.mp4 + '" type="video/mp4">';
    }
    return (
      '<div class="recorte-video">' +
        '<video controls preload="metadata" playsinline poster="' + hab.posters[0] + '" aria-label="Tour en video de la ' + hab.nombre + '">' +
          fuentes +
          'Tu navegador no puede reproducir este video. Pídenos el tour al coordinar tu visita.' +
        '</video>' +
        '<p class="placa-hab"><small>Residencia Chalo</small>' + hab.nombre + '</p>' +
      '</div>'
    );
  }

  /* ----- Render completo de la habitación activa ----- */
  function renderHab(hab) {
    document.title = hab.nombre + ' · Residencia Chalo';

    raiz.querySelector('[data-slot="video"]').innerHTML = bloqueVideo(hab);

    /* El contenedor ya está en el DOM: se crea el reproductor de la
       API (solo para fichas con ytid). */
    if (hab.video && hab.video.ytid) {
      crearReproductor(hab.video.ytid);
    }

    /* ----- Encabezado y descripción ----- */
    raiz.querySelector('[data-slot="titulo"]').textContent = hab.nombre;
    raiz.querySelector('[data-slot="subtitulo"]').textContent = hab.subtitulo;
    raiz.querySelector('[data-slot="descripcion"]').textContent = hab.descripcion;

    /* ----- Precio destacado: agrupado con el CTA, encima de la ficha ----- */
    var precio = raiz.querySelector('[data-slot="precio"]');
    if (precio) {
      precio.innerHTML =
        '<span class="hab-precio__cantidad">' + (util.formatoPrecio ? util.formatoPrecio(hab.canon, hab.moneda) : hab.canon) + '</span>' +
        '<span class="hab-precio__nota">Canon mensual · tasa BCV del día</span>';
    }

    /* ----- Ficha ----- */
    var ficha = raiz.querySelector('[data-slot="ficha"]');
    ficha.innerHTML =
      '<ul>' +
        '<li><span class="etiqueta">Baño</span><strong>' + (hab.banio === 'interior' ? 'Interior (dentro de la habitación)' : 'Exterior (de uso individual)') + '</strong></li>' +
        '<li><span class="etiqueta">Canon mensual</span><strong>' + (util.formatoPrecio ? util.formatoPrecio(hab.canon, hab.moneda) : hab.canon) + '</strong></li>' +
        '<li><span class="etiqueta">Tasa</span><strong>EURO BCV del día</strong></li>' +
        '<li><span class="etiqueta">Cobro</span><strong>Primeros 5 días del mes</strong></li>' +
        (hab.video && hab.video.duracion ? '<li><span class="etiqueta">Duración del tour</span><strong>' + hab.video.duracion + '</strong></li>' : '') +
      '</ul>';

    var listaIncluidos = raiz.querySelector('[data-slot="incluidos"]');
    listaIncluidos.innerHTML = '';
    (hab.incluidos || []).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      listaIncluidos.appendChild(li);
    });

    var listaDestacados = raiz.querySelector('[data-slot="destacados"]');
    listaDestacados.innerHTML = '';
    (hab.destacados || []).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      listaDestacados.appendChild(li);
    });

    /* ----- Galería de 3 frames ----- */
    var galeria = raiz.querySelector('[data-slot="galeria"]');
    galeria.innerHTML = '';
    (hab.posters || []).forEach(function (ruta, indice) {
      var figura = document.createElement('figure');
      var webp = hab.posterWebp && hab.posterWebp[indice] ? hab.posterWebp[indice] : ruta;
      figura.innerHTML =
        '<picture>' +
          '<source srcset="' + webp + '" type="image/webp">' +
          '<img src="' + ruta + '" alt="' + hab.nombre + ', vista ' + (indice + 1) + ' de ' + hab.posters.length + '" loading="lazy" decoding="async" data-parallax>' +
        '</picture>';
      galeria.appendChild(figura);
    });

    /* ----- CTA de visita con ?hab= ----- */
    var cta = raiz.querySelector('[data-slot="cta"]');
    if (cta) {
      cta.setAttribute('href', 'visita.html?hab=' + encodeURIComponent(hab.slug));
    }

    /* La galería se inyectó con data-parallax después de que site.js recogió
       los nodos: se reinicia el parallax reutilizable. */
    if (window.CHALO_UI && window.CHALO_UI.iniciarParallax) {
      window.CHALO_UI.iniciarParallax();
    }

    /* ----- Otras habitaciones: solo las distintas a la actual -----
       Los enlaces cambian solo el hash, así que el repintado lo
       hace el listener de hashchange (sin recargar). */
    var selector = raiz.querySelector('[data-slot="selector"]');
    if (selector) {
      selector.innerHTML = '';
      disponibles.forEach(function (h) {
        if (h.slug === hab.slug) { return; }
        var li = document.createElement('li');
        var enlace = document.createElement('a');
        enlace.href = 'habitacion.html#' + h.slug;
        enlace.textContent = h.nombre;
        enlace.className = 'enlace-linea';
        li.appendChild(enlace);
        selector.appendChild(li);
      });
    }
  }

  /* Llevar la vista al título tras repintar por hashchange: el usuario
     estaba al final de la página ("otras habitaciones") y sin esto cree
     que el enlace "no hace nada". La cabecera fija (.site-header) tapa
     el título, así que se descuenta su alto real medido (getBoundingClientRect),
     no un valor fijado. Con prefers-reduced-motion activo el desplazamiento
     es instantáneo (behavior: 'auto'). */
  function desplazarAlTitulo() {
    var titulo = raiz.querySelector('[data-slot="titulo"]');
    if (!titulo) { return; }
    var reduceMovimiento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var movimiento = reduceMovimiento ? 'auto' : 'smooth';
    var cabecera = document.querySelector('.site-header');
    var altoCabecera = cabecera ? cabecera.getBoundingClientRect().bottom : 0;
    var top = titulo.getBoundingClientRect().top + window.pageYOffset - altoCabecera;
    window.scrollTo({ top: top, behavior: movimiento });
  }

  /* Listener global registrado una sola vez; el render no crea listeners.
     El desplazamiento al título solo ocurre en hashchange: en la carga
     inicial con hash se respeta el salto nativo del navegador. */
  window.addEventListener('hashchange', function () {
    destruirReproductor();
    renderHab(resolverHab());
    desplazarAlTitulo();
  });

  /* Gesto de usuario sobre .yt-play (delegado, registrado una vez):
     el clic permite desbloquear el audio que el autoplay bloqueó. */
  document.addEventListener('click', function (evento) {
    var boton = evento.target && evento.target.closest ? evento.target.closest('.yt-play') : null;
    if (!boton || !player) { return; }
    try {
      player.unMute();
      player.setVolume(70);
      player.playVideo();
    } catch (error) { /* reproductor ya destruido */ }
    boton.hidden = true;
  });

  renderHab(resolverHab());
})();
