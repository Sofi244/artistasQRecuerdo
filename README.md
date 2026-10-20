# QRecuerdo - Experiencia Musical Inmersiva 💜

Plataforma interactiva, emotiva y visualmente impactante dedicada a fansites musicales, desarrollada con HTML5 semántico, CSS3 avanzado y JavaScript moderno sin compilación ni dependencias obligatorias.

## 🚀 Cómo ejecutar localmente
1. Descarga o clona la carpeta del proyecto en tu computadora.
2. Abre el archivo **`index.html`** directamente en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).
3. ¡Listo! Explora los diferentes artistas mediante el selector superior.

> **Nota sobre seguridad de navegadores (`file://`):** Si algún navegador restringe la carga de scripts externos por políticas de seguridad locales, puedes abrir el proyecto con un servidor local liviano como la extensión *Live Server* en Visual Studio Code o ejecutando `npx serve` en la terminal de tu equipo.

---

## 🛠️ Cómo personalizar y editar
- **Agregar o modificar artistas:** Edita el archivo `js/artistsData.js`. Cada objeto contiene la paleta cromática, biografía, imágenes, curiosidades y configuración musical.
- **Cambiar colores y estilos:** Modifica `css/styles.css` o ajusta las variables de color directamente en `artistsData.js`.
- **Modificar mensajes de Easter eggs:** En `artistsData.js`, dentro de cada artista, puedes actualizar los arreglos de `messages`.

---

## ☁️ Cómo desplegar en Netlify
1. Sube la carpeta raíz del proyecto a un repositorio en **GitHub**.
2. Conecta tu repositorio en [Netlify](https://www.netlify.com/).
3. Deja el comando de compilación vacío y la carpeta de publicación como `.` (raíz).
4. ¡Haz clic en **Deploy** y tu fansite estará online en segundos!

---
© QRecuerdo - Todos los derechos reservados.