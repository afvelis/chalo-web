# Pack publicitario — Residencia Chalo

Material gráfico listo para imprimir y compartir. Todo lo que hay aquí está **fuera del sitio web**; no forma parte del repo ni se publica.

## Qué es cada archivo

| Archivo | Qué es | Cómo se usa |
|---|---|---|
| `cartel-carta.pdf` | Cartel en PDF, página carta (8.5×11 in), a sangrado completo (sin márgenes) | Imprimir en papel carta |
| `cartel-carta.png` | El mismo cartel en imagen, 2550×3300 px (300 DPI) | Para subir, previsualizar o imprimir desde apps que no aceptan PDF |
| `tarjeta-whatsapp.png` | Tarjeta vertical 1080×1350 px (4:5), de marca y sin precios | Enviar por WhatsApp o publicar en Instagram/estado |
| `qr-residencia-chalo.png` | QR real y verificado, 1480×1480 px | Pegarlo en otros diseños; ya está incrustado en el cartel y la tarjeta |
| `cartel-carta.html` / `tarjeta-whatsapp.html` | Fuentes editables del diseño | Para cambiar textos y volver a renderizar (ver abajo) |
| `index.html` | Página de descargas del pack | Abrir en el navegador para ver miniaturas y descargar |
| `PROMPT-nano-banana.md` | Prompts para generar variantes ilustradas con IA | Solo como base visual; ver advertencia de QR |

**Prohibido publicar**: teléfono, correo, dirección exacta, redes sociales o logos. Todas las visitas se coordinan por la web.

## Cómo imprimir el PDF en carta sin escalar

1. En el diálogo de impresión elige **Tamaño de papel: Carta (Letter)** y **Orientación: Vertical**.
2. En **Escala** elige **100 % / Tamaño real** (desactiva "Ajustar a página" o "Fit to page").
3. Márgenes: **Ninguno** (el PDF ya está a página completa, sin bordes blancos añadidos).
4. Imprime en color si puedes; también se ve aceptable en escala de grises.

Si la impresora fuerza márgenes inevitables, activa "Escalar al área imprimible": el diseño tiene aire suficiente para tolerarlo, pero lo correcto es 100 %.

## Cómo pegar el QR si usas la versión de Nano Banana

1. Genera la imagen con los prompts de `PROMPT-nano-banana.md`: la esquina (o el centro, en la tarjeta) queda como **cuadrado blanco vacío**.
2. Abre la imagen en Canva, Photopea o GIMP y pega encima `qr-residencia-chalo.png`, centrado en el cuadrado.
3. Deja **margen blanco alrededor del QR** (zona de silencio, ≈4 módulos) y no le apliques filtros ni transparencias.
4. Exporta y **prueba el escaneo con el celular** antes de imprimir o publicar.

> ⚠️ **Los QR generados por IA no escanean.** El único QR válido es `qr-residencia-chalo.png`.

## Link corto (opcional, para más adelante)

Hoy el QR apunta a `https://afvelis.github.io/chalo-web/`. Funciona, pero es largo. Si quieres un link más corto y memorable, elige **una** de estas opciones y luego **regenera el QR** (basta cambiar la URL y volver a renderizar los HTML):

1. **TinyURL (gratis):** cuenta gratuita con alias `residenciachalo` → `tinyurl.com/residenciachalo`. Rápido y sin coste; depende de un tercer servicio.
2. **Dominio propio (~10 $/año):** comprar p. ej. `residenciachalo.com` y conectarlo a GitHub Pages. Lo más profesional y permanente.
3. **Subdominio gratuito:** Netlify, Vercel o Cloudflare Pages permiten un subdominio propio (p. ej. `residenciachalo.netlify.app`) apuntando al mismo sitio.

Después de cambiar la URL, actualiza también el texto visible `afvelis.github.io/chalo-web` en el cartel y la tarjeta para que coincida con el QR.

## Regenerar las piezas (si cambias textos)

Los diseños viven en los HTML con las mismas fuentes y paleta del sitio:

```bash
export LD_LIBRARY_PATH=/home/avelis/lib-linux64/system-libs:/home/avelis/lib-linux64/usr/lib/x86_64-linux-gnu:/tmp/chalo/deps/usr/lib/x86_64-linux-gnu:/home/avelis/lib-linux64/usr/lib/x86_64-linux-gnu
node render-pack.js   # renderiza cartel PNG+PDF y tarjeta PNG
```

Luego verifica el QR con OpenCV (recorta la zona del QR y decodifícala) antes de dar por buena cualquier pieza.

---

*Visitas coordinadas solo por la web. Respondemos en menos de 24 horas hábiles.*
