/* ============================================================
   Residencia Chalo — js/qr.js
   Envoltorio para la librería local assets/vendor/qrcode.js
   (UMD, global "qrcode" en minúscula).
   API usada: qrcode(typeNumber, nivel) · addData · createSvgTag
   · createDataURL · getModuleCount. Si el typeNumber automático
   (0) o qr.make() fallan por longitud, se prueba un bucle 5→20
   con try/catch.
   ============================================================ */
(function () {
  'use strict';

  function construir(tipo, nivel, texto) {
    var qr = window.qrcode(tipo, nivel);
    qr.addData(texto);
    qr.make();
    return qr;
  }

  function crear(texto, nivel, cellSize, margin) {
    if (typeof window.qrcode !== 'function') {
      throw new Error('La librería qrcode.js no está cargada.');
    }
    var qr = null;
    try {
      qr = construir(0, nivel, texto);
    } catch (e) {
      for (var tipo = 5; tipo <= 20; tipo += 1) {
        try {
          qr = construir(tipo, nivel, texto);
          break;
        } catch (e2) { qr = null; }
      }
      if (!qr) { throw new Error('No se pudo generar el QR para este texto.'); }
    }
    var celda = cellSize || 6;
    var margen = typeof margin === 'number' ? margin : 2;
    return {
      svg: qr.createSvgTag(celda, margen),
      png: qr.createDataURL(celda * 4, margen),
      modulos: qr.getModuleCount()
    };
  }

  function descargarBlob(contenido, tipo, nombre) {
    var blob = new Blob([contenido], { type: tipo });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function descargarPngFallido() {
    window.alert('No se pudo generar la imagen PNG del QR. Revisa tu navegador o descarga el SVG.');
  }

  window.CHALO_QR = {
    crear: crear,
    descargarPng: function (texto, nivel, cellSize, nombre) {
      var r;
      try {
        r = crear(texto, nivel, cellSize, 2);
      } catch (e) {
        descargarPngFallido();
        return;
      }
      var img = new Image();
      img.onload = function () {
        try {
          var lienzo = document.createElement('canvas');
          lienzo.width = img.naturalWidth;
          lienzo.height = img.naturalHeight;
          lienzo.getContext('2d').drawImage(img, 0, 0);
          var a = document.createElement('a');
          a.href = lienzo.toDataURL('image/png');
          a.download = nombre;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } catch (e) {
          descargarPngFallido();
        }
      };
      img.onerror = descargarPngFallido;
      img.src = r.png;
    },
    descargarSvg: function (texto, nivel, cellSize, nombre) {
      var r = crear(texto, nivel, cellSize, 2);
      descargarBlob(r.svg, 'image/svg+xml', nombre);
    }
  };
})();
