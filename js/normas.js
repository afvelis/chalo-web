/* ============================================================
   Residencia Chalo — js/normas.js
   Renderiza window.CHALO_NORMAS: índice lateral pegajoso,
   chips filtrables por categoría, búsqueda en vivo y la zona
   verde "Lo que sí está incluido".
   ============================================================ */
(function () {
  'use strict';

  var datos = window.CHALO_NORMAS;
  var raiz = document.getElementById('normas-contenido');
  if (!datos || !raiz) { return; }

  var categoriaActiva = 'todas';
  var consulta = '';

  /* Búsqueda sin distinción de acentos: NFD + eliminación de diacríticos
     para que "bano" encuentre "baño". */
  function normalizar(texto) {
    return String(texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /* ----- Render inicial ----- */
  var indice = document.getElementById('normas-indice');
  datos.categorias.forEach(function (cat) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#cat-' + cat.id;
    a.textContent = cat.nombre;
    li.appendChild(a);
    indice.appendChild(li);

    var seccion = document.createElement('section');
    seccion.className = 'norma-grupo';
    seccion.id = 'cat-' + cat.id;
    seccion.setAttribute('data-categoria', cat.id);

    var h3 = document.createElement('h3');
    h3.className = 'norma-grupo__titulo';
    h3.innerHTML = cat.nombre + ' <small>' + cat.normas.length + (cat.normas.length === 1 ? ' norma' : ' normas') + '</small>';
    seccion.appendChild(h3);

    var contenedor = document.createElement('div');
    contenedor.className = 'norma-cards';
    cat.normas.forEach(function (norma) {
      var card = document.createElement('article');
      card.className = 'norma-card';
      card.setAttribute('data-texto', normalizar(norma.titulo + ' ' + norma.texto + ' ' + cat.nombre + ' ' + norma.fuente));
      var h4 = document.createElement('h4');
      h4.textContent = norma.titulo;
      var p = document.createElement('p');
      p.textContent = norma.texto;
      var f = document.createElement('span');
      f.className = 'fuente';
      f.textContent = norma.fuente;
      card.appendChild(h4);
      card.appendChild(p);
      card.appendChild(f);
      contenedor.appendChild(card);
    });
    seccion.appendChild(contenedor);
    raiz.appendChild(seccion);
  });

  /* ----- Zona verde: lo que sí está incluido ----- */
  var zona = document.getElementById('normas-incluido');
  if (zona && datos.incluido) {
    zona.querySelector('h3').textContent = datos.incluido.titulo;
    zona.querySelector('p').textContent = datos.incluido.intro;
    var ul = zona.querySelector('ul');
    datos.incluido.items.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  }

  /* ----- Chips de categoría ----- */
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      categoriaActiva = chip.getAttribute('data-cat') || 'todas';
      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      filtrar();
    });
  });

  /* ----- Búsqueda en vivo ----- */
  var entrada = document.getElementById('normas-busca');
  if (entrada) {
    entrada.addEventListener('input', function () {
      consulta = normalizar(entrada.value.trim());
      filtrar();
    });
  }

  function filtrar() {
    var visibles = 0;
    raiz.querySelectorAll('.norma-grupo').forEach(function (grupo) {
      var coincideCategoria = categoriaActiva === 'todas' || grupo.getAttribute('data-categoria') === categoriaActiva;
      var visiblesEnGrupo = 0;
      grupo.querySelectorAll('.norma-card').forEach(function (card) {
        var coincideTexto = !consulta || card.getAttribute('data-texto').indexOf(consulta) !== -1;
        var visible = coincideCategoria && coincideTexto;
        card.classList.toggle('oculta', !visible);
        if (visible) { visiblesEnGrupo += 1; }
      });
      grupo.classList.toggle('oculto', visiblesEnGrupo === 0);
      visibles += visiblesEnGrupo;
    });
    var vacio = document.querySelector('.sin-resultados');
    if (vacio) { vacio.classList.toggle('visible', visibles === 0); }
    var zonaIncluido = document.getElementById('normas-incluido');
    if (zonaIncluido) {
      var mostrarZona = !consulta && (categoriaActiva === 'todas' || categoriaActiva === 'servicios');
      zonaIncluido.style.display = mostrarZona ? '' : 'none';
    }
  }
})();
