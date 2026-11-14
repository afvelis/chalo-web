/* ============================================================
   Residencia Chalo — js/site.js (compartido, IIFE clásica)
   Navegación, menú móvil, cabecera compacta, reveals, cursor,
   parallax leve y utilidades de formato.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Utilidades expuestas para las demás páginas ----- */
  window.CHALO_UTIL = {
    formatoPrecio: function (canon, moneda) {
      var sufijo = moneda === 'EUR' ? ' €' : ' ' + (moneda || '');
      return String(canon) + sufijo;
    }
  };

  /* ----- Cabecera compacta al hacer scroll ----- */
  var cabecera = document.querySelector('.site-header');
  if (cabecera) {
    var alScrollear = function () {
      if (window.scrollY > 40) {
        cabecera.classList.add('site-header--compacta');
      } else {
        cabecera.classList.remove('site-header--compacta');
      }
    };
    window.addEventListener('scroll', alScrollear, { passive: true });
    alScrollear();
  }

  /* ----- Menú móvil accesible ----- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var cerrarMenu = function () {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('nav--abierta');
    };
    toggle.addEventListener('click', function () {
      var abierto = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!abierto));
      nav.classList.toggle('nav--abierta', !abierto);
    });
    nav.addEventListener('click', function (evento) {
      if (evento.target.closest('a')) { cerrarMenu(); }
    });
    /* Cajón lateral: un clic fuera del menú lo cierra (en móvil es lo esperado). */
    document.addEventListener('click', function (evento) {
      if (toggle.getAttribute('aria-expanded') !== 'true') { return; }
      if (evento.target.closest('#nav') || evento.target.closest('.nav-toggle')) { return; }
      cerrarMenu();
    });
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        cerrarMenu();
        toggle.focus();
      }
    });
  }

  /* ----- Reveals con IntersectionObserver ----- */
  var aRevelar = document.querySelectorAll('[data-reveal]');
  if (aRevelar.length && 'IntersectionObserver' in window && !reduceMotion) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    aRevelar.forEach(function (elemento) { observador.observe(elemento); });
  } else {
    aRevelar.forEach(function (elemento) { elemento.classList.add('revelado'); });
  }

  /* ----- Parallax leve en pósters -----
     Se expone iniciarParallax() porque páginas que inyectan nodos con
     [data-parallax] después (ej. la galería de habitacion.js) necesitan
     volver a activarlo cuando terminan de renderizar. */
  var parallaxIniciado = false;
  function alMoverParallax() {
    var alto = window.innerHeight;
    document.querySelectorAll('[data-parallax]').forEach(function (elemento) {
      var rect = elemento.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > alto) { return; }
      var progreso = (rect.top + rect.height / 2 - alto / 2) / alto;
      var desplazamiento = Math.max(-1, Math.min(1, progreso)) * -22;
      elemento.style.transform = 'translateY(' + desplazamiento.toFixed(1) + 'px) scale(1.08)';
    });
  }
  function iniciarParallax() {
    if (reduceMotion || !document.querySelector('[data-parallax]')) { return; }
    if (!parallaxIniciado) {
      parallaxIniciado = true;
      window.addEventListener('scroll', alMoverParallax, { passive: true });
      window.addEventListener('resize', alMoverParallax);
    }
    alMoverParallax();
  }
  window.CHALO_UI = {
    iniciarParallax: iniciarParallax
  };
  iniciarParallax();

  /* ----- Cursor personalizado (solo puntero fino) ----- */
  var cursor = document.querySelector('.cursor-punto');
  if (cursor && window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
    /* Arranca fuera de pantalla e invisible: el primer mousemove sintético
       llega con coordenadas (0,0) y sin este filtro el punto se pintaba en la
       esquina superior izquierda en capturas. Aparece al primer movimiento
       con coordenadas reales. */
    var objetivoX = -60;
    var objetivoY = -60;
    var actualX = objetivoX;
    var actualY = objetivoY;
    cursor.style.opacity = '0';
    document.addEventListener('mousemove', function (evento) {
      if (evento.clientX === 0 && evento.clientY === 0) { return; }
      objetivoX = evento.clientX;
      objetivoY = evento.clientY;
      if (cursor.style.opacity !== '') { cursor.style.opacity = ''; }
    }, { passive: true });
    document.addEventListener('mouseover', function (evento) {
      var sobreEnlace = evento.target.closest('a, button, input, select, textarea, label, .chip');
      cursor.classList.toggle('cursor-punto--grande', Boolean(sobreEnlace));
    });
    (function animar() {
      actualX += (objetivoX - actualX) * 0.18;
      actualY += (objetivoY - actualY) * 0.18;
      cursor.style.left = actualX.toFixed(1) + 'px';
      cursor.style.top = actualY.toFixed(1) + 'px';
      window.requestAnimationFrame(animar);
    })();
  }

  /* ----- Año en el pie ----- */
  var anio = document.querySelector('[data-anio]');
  if (anio) { anio.textContent = String(new Date().getFullYear()); }
})();
