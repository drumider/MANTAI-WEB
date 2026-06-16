# Iconos de búsqueda de Google (Favicons) para Mantai

Esta carpeta ha sido creada para organizar todos los archivos de iconos y favicons de **Mantai** necesarios para que aparezcan correctamente en los resultados de búsqueda de Google y en los navegadores web.

## Requisitos de Google para mostrar tu logotipo en las búsquedas:
1. **Relación de aspecto 1:1 (Cuadrado):** El icono debe ser perfectamente cuadrado (ej. `48x48`, `96x96`, `192x192` o `512x512` píxeles).
2. **Dimensiones:** Google requiere que las dimensiones sean múltiples de 48px.
3. **Formato:** PNG, ICO, SVG o JPG (PNG es el más recomendado para transparencia y nitidez).
4. **URL Estable:** No cambies el nombre del archivo de icono frecuentemente o Google tardará más tiempo en re-indexarlo.

## Archivos recomendados en esta carpeta:
- `favicon-32x32.png` - Para navegadores clásicos.
- `favicon-192x192.png` - Ideal para dispositivos Android y motores de búsqueda móviles.
- `apple-touch-icon.png` (180x180px) - Para favoritos e iconos de inicio en iOS (Apple).

---

## Cómo cambiarlos o personalizarlos:
1. Reemplaza el archivo `/public/logo.png` con tu logotipo cuadrado definitivo.
2. Si prefieres usar formatos específicos de diferentes tamaños, puedes colocarlos dentro de esta carpeta `/public/favicons/` y actualizar las rutas correspondientes en el archivo `/index.html`.

*Nota: Google puede tardar desde unos días hasta un par de semanas en rastrear tu sitio web nuevamente y actualizar el icono en los resultados de búsqueda.*
