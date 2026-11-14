/* ============================================================
   Residencia Chalo — habitaciones
   Define window.CHALO_ROOMS. Edita "disponible" para publicar
   u ocultar una habitación, o usa el editor local (admin.html
   en tu copia de trabajo; no se publica) para hacerlo
   visualmente y exportar este archivo ya actualizado.
   ============================================================ */

window.CHALO_ROOMS = [
  {
    slug: 'hab-grande',
    nombre: 'Habitación Grande',
    subtitulo: 'Espacio amplio, luz y baño de uso individual',
    banio: 'exterior',
    canon: 100,
    moneda: 'EUR',
    disponible: true,
    orden: 1,
    posters: [
      'assets/img/hab-grande-01.jpg',
      'assets/img/hab-grande-02.jpg',
      'assets/img/hab-grande-03.jpg'
    ],
    posterWebp: [
      'assets/img/hab-grande-01.webp',
      'assets/img/hab-grande-02.webp',
      'assets/img/hab-grande-03.webp'
    ],
    video: {
      mp4: 'assets/media/hab-grande.mp4',
      hdWebm: 'assets/media/hd/hab-grande.webm',
      ytid: 'cRhXx7wfRqU',  /* YouTube: Habitación Grande (con música libre) */
      vertical: true,
      duracion: '1:29'
    },
    incluidos: [
      'Agua, luz e internet',
      'Limpieza de áreas comunes incluida',
      'Limpieza de tu espacio: 5 €/mes (1 vez al mes, obligatoria)',
      'Cama individual con colchón',
      'Aire acondicionado Split 12.000 BTU',
      'Nevera, closet y escritorio empotrado',
      'TV pantalla plana y espejo'
    ],
    destacados: [
      'Baño de uso individual',
      'Amplia y ventilada',
      'Escritorio empotrado para estudio'
    ],
    descripcion: 'La habitación más espaciosa de la casa, pensada para quien necesita sitio de sobra: cama individual con colchón cómodo, closet completo, escritorio empotrado para estudiar o trabajar, televisión pantalla plana y aire acondicionado con control remoto. El baño es de uso individual y está ubicado justo fuera de la habitación, en el pasillo de tu área. Todo el mobiliario está incluido: llegas con tu maleta y nada más.'
  },
  {
    slug: 'hab-sencilla',
    nombre: 'Habitación Sencilla',
    subtitulo: 'Cómoda, práctica y con baño dentro de la habitación',
    banio: 'interior',
    canon: 75,
    moneda: 'EUR',
    disponible: true,
    orden: 2,
    posters: [
      'assets/img/hab-sencilla-01.jpg',
      'assets/img/hab-sencilla-02.jpg',
      'assets/img/hab-sencilla-03.jpg'
    ],
    posterWebp: [
      'assets/img/hab-sencilla-01.webp',
      'assets/img/hab-sencilla-02.webp',
      'assets/img/hab-sencilla-03.webp'
    ],
    video: {
      mp4: 'assets/media/hab-sencilla.mp4',
      hdWebm: 'assets/media/hd/hab-sencilla.webm',
      ytid: 'ny_aWmtTWpQ',  /* YouTube: Habitación Sencilla (con música libre) */
      vertical: true,
      duracion: '1:02'
    },
    incluidos: [
      'Agua, luz e internet',
      'Limpieza de áreas comunes incluida',
      'Limpieza de tu espacio: 5 €/mes (1 vez al mes, obligatoria)',
      'Cama individual con colchón',
      'Aire acondicionado Split 12.000 BTU',
      'Nevera, closet y escritorio empotrado',
      'TV pantalla plana y espejo'
    ],
    destacados: [
      'Baño interior (dentro de la habitación)',
      'Ideal para estudiantes',
      'Todo el mobiliario incluido'
    ],
    descripcion: 'Una habitación cómoda y bien resuelta, con la gran ventaja de tener el baño de uso individual dentro de la propia habitación. Cuenta con cama individual con colchón, closet, escritorio empotrado, televisión pantalla plana, nevera y aire acondicionado Split con control remoto. Es la favorita de quienes vienen a estudiar: llegas, instalas tus cosas y tu espacio queda completo.'
  }
];
