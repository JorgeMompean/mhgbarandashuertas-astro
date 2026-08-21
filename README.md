# MHG Barandas Huertas — Web Oficial

Sitio web oficial moderno y de alto rendimiento para **MHG Barandas Huertas**, empresa especializada en la fabricación e instalación a medida de barandas personalizadas y pasamanos de pared en madera (roble, pino, haya), acero inoxidable, forja artesanal y cristal templado.

Desarrollado con **Astro 4**, **TypeScript** y **Vanilla CSS** con enfoque en diseño luxury, optimización SEO avanzada e internacionalización bilingüe (Español / Inglés).

---

## 🚀 Comandos del Proyecto

Todos los comandos se ejecutan desde la raíz del proyecto usando `npm`:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo en `http://localhost:4321` con recarga en tiempo real. |
| `npm start` | Alias de `npm run dev`. |
| `npm run build` | Ejecuta la comprobación de tipos de Astro (`astro check`) y compila el sitio para producción en la carpeta `dist/`. |
| `npm run preview` | Sirve la carpeta `dist/` localmente para previsualizar el sitio exactamente como se verá en producción. |

### 🛑 Cómo detener el servidor de desarrollo

- **En la terminal de comandos**: Presiona **`Ctrl + C`** mientras estés en la ventana de la consola donde se ejecuta `npm run dev`.
- **Cerrar la terminal**: También puedes cerrar la ventana de PowerShell o Terminal.
- **Si el puerto 4321 se queda ocupado**: Puedes ejecutar `npx kill-port 4321` en la consola para liberar el puerto.

---

## 🛠️ Tecnologías y Características Destacadas

- **Astro 4**: Generación estática ultrafiel y ultra rápida.
- **Sistema i18n Bilingüe (Español / Inglés)**:
  - Cambio de idioma instantáneo.
  - Cero parpadeos (0ms FOUC).
  - Persistencia global de preferencia de idioma durante toda la navegación.
- **Diseño Responsive 100%**: Adaptación fluida para smartphones, tablets y monitores de escritorio.
- **SEO 300% Optimizado**:
  - Estructura JSON-LD (`HomeAndConstructionBusiness`).
  - Metadatos OpenGraph y Twitter Cards.
  - Archivos `sitemap.xml` y `robots.txt` incluidos.
- **Galería Interactiva & Carrusel**:
  - Filtrado por categorías (Madera, Acero, Pasamanos, Cristal).
  - Modal Lightbox expandible con consulta directa por WhatsApp.
- **Estética Luxury & Minimalista**:
  - Tipografía cuidada (*Cormorant Garamond* y *Montserrat*).
  - Iconografía vectorial SVG a medida.
  - Favicon cuadrado de alta resolución (`favicon.svg`).

---

## 📁 Estructura del Código

```text
├── public/
│   ├── assets/              # Imágenes reales de trabajos e instalaciones
│   ├── favicon.svg          # Favicon vectorial cuadrado (512x512)
│   ├── robots.txt           # Directivas para buscadores
│   └── sitemap.xml          # Mapa del sitio para SEO
│
├── src/
│   ├── components/
│   │   ├── Header.astro           # Cabecera sticky, selector ES/EN y menú móvil
│   │   ├── Footer.astro           # Pie de página con enlaces e información
│   │   ├── ProjectsCarousel.astro # Carrusel interactivo destacado
│   │   ├── ProjectsGallery.astro  # Galería filtrable con modal Lightbox
│   │   ├── WhatsAppButton.astro   # Botón flotante exclusivo para móvil
│   │   └── BackToTop.astro        # Botón flotante para volver arriba
│   │
│   ├── data/
│   │   └── projects.ts            # Base de datos editable de proyectos y fotos
│   │
│   ├── i18n/
│   │   └── ui.ts                  # Diccionario de traducciones bilingüe (ES / EN)
│   │
│   ├── layouts/
│   │   └── Layout.astro           # Estructura base, metadatos SEO y motor i18n
│   │
│   ├── pages/
│   │   ├── index.astro            # Página principal / Landing
│   │   ├── barandas.astro         # Catálogo detallado de barandas
│   │   ├── escaleras.astro        # Pasamanos de pared y soluciones de escalera
│   │   └── contacto.astro         # Formulario de presupuesto y FAQs
│   │
│   └── styles/
│       └── global.css             # Sistema de diseño CSS, fuentes y utilidades
│
├── package.json
└── tsconfig.json
```

---

## 📸 Cómo añadir nuevos proyectos o fotos de trabajos

Para agregar nuevas fotos de instalaciones a la galería y al carrusel:

1. Guarda la imagen en la carpeta `public/assets/` (ejemplo: `mi-nueva-baranda.jpg`).
2. Abre el archivo `src/data/projects.ts`.
3. Añade un nuevo objeto a la lista `projectsData`:

```typescript
{
  id: "mi-nueva-baranda",
  title: {
    es: "Baranda de Madera de Roble",
    en: "Oak Wood Railing"
  },
  category: "madera", // Opción: 'madera' | 'acero' | 'pasamanos' | 'cristal'
  categoryLabel: {
    es: "Madera Nobles",
    en: "Hardwoods"
  },
  description: {
    es: "Descripción del trabajo realizado en español.",
    en: "Description of the installed work in English."
  },
  image: "/assets/mi-nueva-baranda.jpg",
  featured: true // Pon true si quieres que aparezca en el carrusel principal
}
```

---

## 📄 Licencia

MHG Barandas Huertas — Todos los derechos reservados.
