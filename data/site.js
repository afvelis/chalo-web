/* ============================================================
   Residencia Chalo — datos generales del sitio
   Se carga antes que los demás scripts. Define window.CHALO_SITE.
   ============================================================ */

window.CHALO_SITE = {
  marca: 'Residencia Chalo',
  /* Por decisión del propietario NO se publican teléfono, WhatsApp ni email
     en el sitio público (se evitan llamadas de estafa y acoso). Si algún día
     se quiere volver a publicar algún dato de contacto, añádelo aquí
     (ej. telefono, telefonoDisplay, whatsapp, email) y actualiza las páginas. */
  zona: {
    ciudad: 'San Diego',
    estado: 'Carabobo',
    urbanizacion: 'Urb. San Sur'
  },
  /* Ajusta esta URL si publicas el sitio en otra ruta o dominio
     (la usan los códigos QR y el retorno del formulario). */
  baseUrl: 'https://afvelis.github.io/chalo-web/',
  /* El correo de destino del formulario de visita NO se declara aquí:
     vive únicamente en la action del formulario de visita.html. */
  moneda: 'EUR',
  tasa: 'BCV',
  nav: [
    { texto: 'Inicio', href: 'index.html' },
    { texto: 'Habitaciones', href: 'habitacion.html' },
    { texto: 'Normas', href: 'normas.html' },
    { texto: 'Contrato', href: 'contrato.html' },
    { texto: 'Visita', href: 'visita.html' },
    { texto: 'Contacto', href: 'contacto.html' }
  ]
};
