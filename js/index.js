/* ============================================================
   Residencia Chalo — js/index.js
   Tarjetas de habitación: respeta "disponible" y arranca el
   video mudo al pasar el cursor (con recorte para la placa).
   ============================================================ */
(function () {
  'use strict';

  var habitaciones = window.CHALO_ROOMS || [];

  /* Con movimiento reducido el CSS oculta los videos del héroe, pero el atributo
     autoplay podría arrancarlos igual; se pausan explícitamente. */
  var reduceMotionHero = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotionHero) {
    document.querySelectorAll('.heroe__video').forEach(function (video) {
      video.pause();
      video.removeAttribute('autoplay');
    });
  }

  /* Oculta del índice las habitaciones marcadas como no disponibles y
     rellena los precios desde CHALO_ROOMS (respaldo: texto escrito a mano). */
  document.querySelectorAll('[data-room]').forEach(function (tarjeta) {
    var slug = tarjeta.getAttribute('data-room');
    var hab = null;
    habitaciones.forEach(function (h) { if (h.slug === slug) { hab = h; } });
    if (hab && hab.disponible === false) {
      tarjeta.hidden = true;
    }
    if (hab) {
      var nodoPrecio = tarjeta.querySelector('[data-precio]');
      if (nodoPrecio && window.CHALO_UTIL && typeof window.CHALO_UTIL.formatoPrecio === 'function') {
        var precio = window.CHALO_UTIL.formatoPrecio(hab.canon, hab.moneda);
        /* Si el formateador no existe o devuelve vacío, se conserva el respaldo. */
        if (precio) { nodoPrecio.textContent = precio; }
      }
    }
  });

  /* Hover: reproduce el tour mudo; al salir, se detiene y rebobina */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    document.querySelectorAll('.tarjeta-hab').forEach(function (tarjeta) {
      var video = tarjeta.querySelector('video');
      if (!video) { return; }
      video.muted = true;
      tarjeta.addEventListener('mouseenter', function () {
        var promesa = video.play();
        if (promesa && promesa.catch) { promesa.catch(function () {}); }
      });
      tarjeta.addEventListener('mouseleave', function () {
        video.pause();
        try { video.currentTime = 0; } catch (e) {}
      });
      tarjeta.addEventListener('focusin', function () {
        var promesa = video.play();
        if (promesa && promesa.catch) { promesa.catch(function () {}); }
      });
      tarjeta.addEventListener('focusout', function () {
        video.pause();
        try { video.currentTime = 0; } catch (e) {}
      });
    });
  }
})();
