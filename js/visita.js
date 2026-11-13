/* ============================================================
   Residencia Chalo — js/visita.js
   Formulario de visita guiado en 3 pasos:
   1) disponibilidad (opcional), 2) contacto, 3) habitación (opcional).
   Valida nombre, teléfono y consentimiento (email y fecha son
   opcionales). El teléfono acepta espacios, guiones y paréntesis:
   solo exige al menos 7 dígitos. El envío es el POST nativo del
   formulario al Web App de Google Apps Script (destino en la action
   de visita.html), con rehabilitación del botón a los 8 s.
   ============================================================ */
(function () {
  'use strict';

  var formulario = document.getElementById('form-visita');
  if (!formulario) { return; }

  /* Con JS se apaga la validación nativa (burbuja) para usar la propia,
     con mensajes por campo y foco en el primer error. */
  formulario.noValidate = true;

  var esArchivo = location.protocol === 'file:';
  var permitidoEnviar = false;

  /* ----- Preselección de habitación por ?hab=<slug> ----- */
  var slug = new URLSearchParams(location.search).get('hab') || '';
  if (slug) {
    var radioHab = formulario.querySelector('input[name="habitacion"][value="' + slug + '"]');
    if (radioHab) { radioHab.checked = true; }
  }

  /* ----- Fecha mínima: hoy (el campo es opcional) ----- */
  var campoFecha = formulario.querySelector('[name="fecha"]');
  if (campoFecha) {
    var hoy = new Date();
    var mes = String(hoy.getMonth() + 1);
    if (mes.length < 2) { mes = '0' + mes; }
    var dia = String(hoy.getDate());
    if (dia.length < 2) { dia = '0' + dia; }
    campoFecha.min = hoy.getFullYear() + '-' + mes + '-' + dia;
  }

  /* ----- Control de pasos ----- */
  var pasos = Array.prototype.slice.call(formulario.querySelectorAll('.paso'));
  var pasosLive = document.getElementById('pasos-live');
  var pasosBarra = document.getElementById('pasos-barra');
  var pasoActual = 0;

  function primerCampoDe(paso) {
    return paso.querySelector('input:not([type="hidden"]), select, textarea');
  }

  function indiceDePaso(nodo) {
    var paso = nodo ? nodo.closest('.paso') : null;
    return paso ? pasos.indexOf(paso) : -1;
  }

  function irAPaso(indice) {
    if (indice < 0 || indice >= pasos.length) { return; }
    pasoActual = indice;
    pasos.forEach(function (paso, i) {
      paso.hidden = i !== indice;
    });
    if (pasosBarra) {
      pasosBarra.style.width = ((indice + 1) * 100 / pasos.length) + '%';
    }
    if (pasosLive) {
      pasosLive.textContent = 'Paso ' + (indice + 1) + ' de ' + pasos.length;
    }
    var primerCampo = primerCampoDe(pasos[indice]);
    if (primerCampo) { primerCampo.focus(); }
  }

  if (pasos.length > 1) {
    /* Solo con JS se ocultan pasos: sin JS, todos los campos en un formulario.
       Con JS también se pliegan los detalles (sin JS quedan abiertos/visibles). */
    formulario.classList.add('js-pasos');
    pasos.forEach(function (paso, i) {
      paso.hidden = i !== 0;
    });
    formulario.querySelectorAll('details[open]').forEach(function (detalle) {
      detalle.removeAttribute('open');
    });
    if (pasosBarra) { pasosBarra.style.width = (100 / pasos.length) + '%'; }
    if (pasosLive) { pasosLive.textContent = 'Paso 1 de ' + pasos.length; }
  }

  formulario.addEventListener('click', function (evento) {
    var objetivo = evento.target;
    if (!objetivo || !objetivo.closest) { return; }
    var siguiente = objetivo.closest('[data-siguiente]');
    if (siguiente) {
      irAPaso(Math.min(pasoActual + 1, pasos.length - 1));
      return;
    }
    var atras = objetivo.closest('[data-atras]');
    if (atras) {
      irAPaso(Math.max(pasoActual - 1, 0));
    }
  });

  /* Enter en pasos 1 y 2 avanza; en el último paso, el formulario envía. */
  formulario.addEventListener('keydown', function (evento) {
    if (evento.key !== 'Enter') { return; }
    var objetivo = evento.target;
    if (!objetivo || objetivo.tagName === 'TEXTAREA' || objetivo.tagName === 'BUTTON') { return; }
    if (pasoActual < pasos.length - 1) {
      evento.preventDefault();
      irAPaso(pasoActual + 1);
    }
  });

  /* ----- Validación ----- */
  var aviso = document.getElementById('aviso-file');
  var btnSeguir = document.getElementById('aviso-file-enviar');
  var btnEnviar = document.getElementById('visita-enviar');
  var textoOriginalBtn = btnEnviar ? btnEnviar.textContent : '';

  var reEmailSimple = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function marcarError(campo, mensaje) {
    var contenedor = campo.closest('.campo');
    if (contenedor) {
      contenedor.classList.add('invalido');
      var texto = contenedor.querySelector('.campo-error');
      if (texto && mensaje) { texto.textContent = mensaje; }
    }
    campo.setAttribute('aria-invalid', 'true');
    return campo;
  }

  function validar() {
    var errores = [];

    formulario.querySelectorAll('.campo.invalido').forEach(function (contenedor) {
      contenedor.classList.remove('invalido');
    });
    formulario.querySelectorAll('[aria-invalid]').forEach(function (campo) {
      campo.removeAttribute('aria-invalid');
    });

    /* Nombre: obligatorio. */
    var nombre = formulario.elements['nombre'];
    if (!String(nombre.value || '').trim()) {
      errores.push(marcarError(nombre, 'Escribe tu nombre para poder atenderte.'));
    }

    /* Teléfono: obligatorio; espacios, guiones y paréntesis se aceptan,
       solo se exige un mínimo de 7 dígitos. */
    var telefono = formulario.elements['telefono'];
    var valorTel = String(telefono.value || '');
    var digitos = valorTel.replace(/[^0-9]/g, '');
    if (!valorTel.trim()) {
      errores.push(marcarError(telefono, 'Necesitamos un número para confirmar la visita.'));
    } else if (digitos.length < 7) {
      errores.push(marcarError(telefono, 'Ese número parece incompleto: revisa que tenga al menos 7 dígitos.'));
    }

    /* Email: opcional; si viene, formato simple sin exigir minúsculas
       ni descartar dominios poco comunes. */
    var email = formulario.elements['email'];
    var valorEmail = String(email.value || '').trim();
    if (valorEmail && !reEmailSimple.test(valorEmail)) {
      errores.push(marcarError(email, 'Revisa el formato del email.'));
    }

    /* Consentimiento: obligatorio. */
    var consent = formulario.elements['consentimiento'];
    if (!consent.checked) {
      errores.push(marcarError(consent, 'Necesitamos tu autorización para poder contactarte.'));
    }

    return errores;
  }

  formulario.addEventListener('submit', function (evento) {
    var errores = validar();
    if (errores.length) {
      evento.preventDefault();
      /* El envío vive en el último paso: si el error está dos pantallas
         atrás (paso 2), se lleva al usuario a ese paso y se enfoca el
         campo con error (primer campo del paso, si coincide). */
      var indiceError = indiceDePaso(errores[0]);
      if (indiceError !== -1 && indiceError !== pasoActual) { irAPaso(indiceError); }
      errores[0].focus();
      return;
    }
    if (esArchivo && !permitidoEnviar) {
      evento.preventDefault();
      if (aviso) { aviso.classList.add('visible'); }
      if (aviso) { aviso.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      return;
    }
    if (btnEnviar) { btnEnviar.disabled = true; btnEnviar.textContent = 'Enviando…'; programarRehabilitacion(); }
  });

  if (btnSeguir) {
    btnSeguir.addEventListener('click', function () {
      permitidoEnviar = true;
      if (formulario.requestSubmit) {
        formulario.requestSubmit();
      } else {
        formulario.submit();
      }
    });
  }

  /* Si el POST no navega (offline, error de red…), el botón no puede
     quedar muerto: se rehabilita a los 8 s y al volver con "Atrás" (bfcache). */
  function rehabilitarEnvio() {
    if (!btnEnviar) { return; }
    btnEnviar.disabled = false;
    btnEnviar.textContent = textoOriginalBtn;
  }
  if (btnEnviar) {
    window.addEventListener('pageshow', function (evento) {
      if (evento.persisted) { rehabilitarEnvio(); }
    });
  }
  var temporizadorEnvio = null;
  function programarRehabilitacion() {
    if (!btnEnviar) { return; }
    if (temporizadorEnvio) { window.clearTimeout(temporizadorEnvio); }
    temporizadorEnvio = window.setTimeout(rehabilitarEnvio, 8000);
  }

  /* Limpia el estado de error al corregir cualquier campo. */
  formulario.addEventListener('input', function (evento) {
    var contenedor = evento.target.closest('.campo');
    if (contenedor) { contenedor.classList.remove('invalido'); }
    evento.target.removeAttribute('aria-invalid');
  });
})();
