# Test IT

Plataforma web para practicar y evaluar conocimientos en el área IT. Tests ilimitados, múltiples modalidades por nivel y seguimiento de puntajes en el navegador.

**Sitio en producción:** https://it-tests.netlify.app/

**Autor:** [Andrés Weitzel](https://github.com/andresWeitzel)

---

## Características

- **4 áreas activas:** Programación, Redes e Infraestructura, Seguridad Informática y Fundamentos IT
- **3 niveles** por área: Básico, Medio y Avanzado
- **4 modalidades** por nivel: Rápido (10), Clásico (20), Extendido (30) y Lectura práctica (10)
- Motor de tests con modal, progreso, corrección y mejor puntaje en `localStorage`
- Material de estudio, novedades con calendario y hoja de ruta del proyecto

---

## Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| [Vite 6](https://vitejs.dev/) | Build y dev server |
| JavaScript ES modules | Sin framework frontend |
| CSS modular | Tokens, layout, páginas y tests |
| Bootstrap 4 | Solo en páginas legacy (material, novedades) |
| FullCalendar 5 | Calendario de novedades |
| Netlify | Deploy estático (`dist/`) |

---

## Requisitos

- Node.js 18+
- npm

---

## Instalación y ejecución

```bash
cd WebSite_Test_IT
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # vista previa de producción
```

---

## Estructura del proyecto

```
WebSite_Test_IT/
├── index.html                 # Home (Vite)
├── html/                      # Páginas internas (MPA)
│   ├── testProgramacion.html
│   ├── testRedes.html
│   ├── testSeguridadInformatica.html
│   ├── testFundamentosIT.html
│   ├── testElectronica.html   # redirige a Fundamentos IT
│   ├── materialEstudio.html
│   └── novedades.html
├── public/
│   └── images/                # Assets estáticos (iconos, body)
├── src/
│   ├── main.js                # Entrada del home
│   ├── components/            # UI reutilizable
│   │   ├── navbar.js
│   │   ├── footer.js
│   │   ├── hero.js
│   │   ├── areaCard.js
│   │   ├── coursesSection.js
│   │   ├── roadmapSection.js
│   │   ├── topicsAccordion.js
│   │   └── modal.js
│   ├── data/
│   │   ├── areas.js           # Áreas, cursos, hoja de ruta
│   │   ├── site.js            # Rutas, navegación, ayuda
│   │   └── variants.js        # Iconos de modalidades
│   ├── data/questions/        # Bancos JSON + utilidades
│   │   ├── normalize.js
│   │   ├── loadBank.js
│   │   ├── mergeSets.js
│   │   ├── programacion/      # *.codigo.json
│   │   ├── redes-infra/
│   │   ├── seguridad/
│   │   └── fundamentos-it/
│   ├── js/
│   │   ├── test/
│   │   │   ├── testRunner.js
│   │   │   ├── testStorage.js
│   │   │   ├── initTestAreaPage.js
│   │   │   └── variantPresets.js
│   │   ├── testProgramacion/
│   │   ├── testRedesInfra/
│   │   ├── testSeguridad/
│   │   ├── testFundamentosIT/
│   │   ├── material/
│   │   ├── novedades/
│   │   └── utilidades/
│   ├── layout/
│   │   └── mountLayout.js     # Navbar + footer en páginas internas
│   ├── pages/                 # Entradas por HTML
│   └── styles/
│       ├── tokens.css
│       ├── layout.css
│       ├── main.css
│       ├── pages.css
│       ├── test.css
│       └── legacy-pages.css
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## Áreas de test

| Área | Ruta | ID storage |
|------|------|------------|
| Programación | `/html/testProgramacion.html` | `programacion` |
| Redes e Infraestructura | `/html/testRedes.html` | `redes-infra` |
| Seguridad Informática | `/html/testSeguridadInformatica.html` | `seguridad` |
| Fundamentos IT | `/html/testFundamentosIT.html` | `fundamentos-it` |

Cada intento guarda claves en `localStorage` con el formato:

`testit_{areaId}_{nivel-modalidad}_{attempts|best|last}`

---

## Bancos de preguntas

- **Teoría (programación):** módulos JS en `src/js/testProgramacion/preguntasTest*.js` (6 sets × 5 preguntas por nivel)
- **Teoría (otras áreas):** `teoriaBanks.js` por área (30 preguntas por área)
- **Lectura práctica:** JSON en `src/data/questions/{area}/practica.json` o `programacion/*.codigo.json`

Formato canónico JSON (ver `src/data/questions/normalize.js`):

```json
{
  "id": "prog-bas-cod-01",
  "type": "code",
  "question": "¿Qué imprime este código?",
  "options": { "a": "...", "b": "...", "c": "..." },
  "answer": "b",
  "code": "...",
  "language": "JavaScript",
  "tags": ["variables"]
}
```

---

## Deploy (Netlify)

El archivo `netlify.toml` ejecuta `npm run build` y publica la carpeta `dist/`.

---

## Repositorio y enlaces

- **GitHub:** https://github.com/andresWeitzel/SitioWebTest_IT
- **YouTube (cursos):** https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured
- **Material de estudio (repo):** https://github.com/andresWeitzel/Material_de_Estudio

---

## Licencia

Proyecto open source. Desarrollado por Andrés Weitzel.
