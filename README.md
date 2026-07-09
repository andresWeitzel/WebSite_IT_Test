<div align="center">
  <img src="./doc/assets/home_readme.png" alt="IT Test — IT knowledge test platform" width="720">
</div>

<div align="right">
  <img width="22" height="22" src="./doc/assets/icons/frontend/png/vite.png" alt="Vite" />
  <img width="22" height="22" src="./doc/assets/icons/frontend/png/js.png" alt="JavaScript" />
  <img width="20" height="20" src="./doc/assets/icons/frontend/png/html.png" alt="HTML" />
  <img width="20" height="20" src="./doc/assets/icons/frontend/png/css.png" alt="CSS" />
  <img width="22" height="22" src="./doc/assets/icons/devops/png/git.png" alt="Git" />
  <img width="20" height="20" src="./doc/assets/icons/devops/png/npm.png" alt="npm" />
</div>

<br>

<div align="right">
  <a href="./doc/assets/translation/README.es.md" target="_blank">
    <img src="./doc/assets/translation/arg-flag.jpg" width="65" height="40" alt="Español" />
  </a>
  <a href="https://github.com/andresWeitzel/WebSite_Test_IT" target="_blank">
    <img src="./doc/assets/translation/eeuu-flag.jpg" width="65" height="40" alt="English" />
  </a>
</div>

<div align="center">

# IT Test — IT Knowledge Test Platform ![(status-completed)](./doc/assets/icons/badges/status-completed.svg)

</div>

Web platform to **practice and assess IT knowledge** with unlimited tests, multiple modalities per level, integrated study material, and score tracking in the browser.

**Live site:** [it-tests.netlify.app](https://it-tests.netlify.app/)

**Repository:** [WebSite_Test_IT](https://github.com/andresWeitzel/WebSite_Test_IT) <a href="https://github.com/andresWeitzel/WebSite_Test_IT" target="_blank"><img src="./doc/assets/icons/social-networks/github.gif" width="25" alt="GitHub" /></a>

**Channel:** [YouTube](https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured) <a href="https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured" target="_blank"><img src="./doc/assets/social-networks/yt.png" width="25" alt="YouTube" /></a>

<br>

## Index 📜

<details>
  <summary> View details </summary>

<div align="right">

`Last update: 07/08/26`

</div>

### Section 1) Description, configuration and technologies

* [1.0) Description.](#10-description-)
* [1.1) Project execution.](#11-project-execution-)
* [1.2) Project structure.](#12-project-structure-)
* [1.3) Technologies.](#13-technologies-)

### Section 2) Usage flow and behavior

* [2.0) Platform flow.](#20-platform-flow-)
* [2.1) Areas, levels and modalities.](#21-areas-levels-and-modalities-)
* [2.2) Score storage.](#22-score-storage-)
* [2.3) Question banks.](#23-question-banks-)

### Section 3) Testing, deploy and references

* [3.0) Functional test.](#30-functional-test-)
* [3.1) Netlify deploy.](#31-netlify-deploy-)
* [3.2) Contributing.](#32-contributing-)
* [3.3) License.](#33-license-)

<br>

</details>

<br>

## Section 1) Description, configuration and technologies

### 1.0) Description [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

**IT Test** is a static web application (MPA with Vite) aimed at students and IT professionals who want to review and measure knowledge in a practical way. The project includes:

* **Home with test areas:** Programming, Networks & Infrastructure, Cybersecurity, and IT Fundamentals.

* **Assessment engine:** full-screen modal tests (mobile), progress bar, grading on submit, and retry.

* **Four modalities per level:** Quick (10), Classic (20), Extended (30), and Practical reading (10 code fragments or scenarios).

* **Study material:** content per area with accordions, navigation sidebar, and links to tests.

* **News:** dynamic calendar (FullCalendar) with project milestones, practice suggestions, and month/day events.

* **Local tracking:** attempts, best score, and last result stored in the browser `localStorage`.

**Requirements:**

* Node.js 18 or higher.

* npm (included with Node).

<br>

</details>

### 1.1) Project execution [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

* Open your workspace and go to the repository root:

```bash
cd WebSite_IT_Test
```

* Clone the repository (if you have not yet):

```bash
git clone https://github.com/andresWeitzel/WebSite_Test_IT.git
cd WebSite_Test_IT
```

* Install dependencies:

```bash
npm install
```

* Development mode (hot reload):

```bash
npm run dev
```

The app is available at `http://localhost:5173`.

* Production build:

```bash
npm run build
```

This generates the `dist/` folder ready to publish.

* Preview the build:

```bash
npm run preview
```

* `Important:` if any step fails due to Node versions, check with `node -v` (18+) and reinstall dependencies with `rm -rf node_modules && npm install`.

<br>

</details>

### 1.2) Project structure [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

```
WebSite_IT_Test/
├── index.html                    # Home (Vite entry)
├── html/                         # Internal pages (MPA)
│   ├── testProgramacion.html
│   ├── testRedes.html
│   ├── testSeguridadInformatica.html
│   ├── testFundamentosIT.html
│   ├── testElectronica.html      # redirects to IT Fundamentals
│   ├── materialEstudio.html
│   └── novedades.html
├── public/
│   ├── critical.css              # Critical CSS referenced in HTML
│   └── images/                   # Icons, backgrounds and assets
├── doc/
│   └── assets/
│       ├── home_readme.png       # Home screenshot for docs
│       ├── translation/          # Flags and Spanish README
│       ├── icons/                # Stack icons and badges
│       └── social-networks/      # Social icons (YouTube, etc.)
├── src/
│   ├── main.js                   # Home entry
│   ├── components/               # Reusable UI
│   │   ├── navbar.js
│   │   ├── footer.js
│   │   ├── pageTabs.js
│   │   ├── hero.js
│   │   ├── areaCard.js
│   │   ├── roadmapSection.js
│   │   ├── topicsAccordion.js
│   │   ├── helpModal.js
│   │   └── modal.js
│   ├── data/
│   │   ├── areas.js              # Areas, courses, practice path
│   │   ├── site.js               # Routes, navigation, global copy
│   │   ├── calendarEvents.js     # News calendar events
│   │   ├── variants.js           # Modality metadata
│   │   ├── studyMaterial/        # Content per area
│   │   └── questions/            # JSON banks and utilities
│   ├── js/
│   │   ├── test/                 # Shared test engine
│   │   ├── testProgramacion/
│   │   ├── testRedesInfra/
│   │   ├── testSeguridad/
│   │   ├── testFundamentosIT/
│   │   ├── material/
│   │   ├── novedades/
│   │   └── utilidades/
│   ├── layout/
│   │   └── mountLayout.js        # Navbar + tabs + footer on internal pages
│   ├── pages/                    # Vite entries per HTML page
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

<br>

</details>

### 1.3) Technologies [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

| **Technology** | **Version** | **Purpose** |
| ------------- | ------------- | ------------- |
| [Vite](https://vitejs.dev/) | 6.x | Build, dev server and MPA bundling |
| JavaScript (ES modules) | ES2020+ | App logic without a frontend framework |
| Modular CSS | — | Tokens, layout, pages, tests and components |
| [FullCalendar](https://fullcalendar.io/) | 5.5 | News calendar (CDN) |
| [Netlify](https://www.netlify.com/) | — | Static hosting for `dist/` |
| [Git](https://git-scm.com/) | 2.x | Version control |
| localStorage | Native API | Persistence of attempts and scores |
| Playwright (dev) | 1.x | Dependency available for future E2E tests |

<br>

</details>

<br>

## Section 2) Usage flow and behavior

### 2.0) Platform flow [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

1. **Home:** the user picks an area from the home page or from the test tabs in the navbar.

2. **Level and modality selection:** each area has three levels (Basic, Intermediate, Advanced) with four variants each.

3. **Test modal:** a modal opens with questions, answer progress, and a submit button.

4. **Grading:** on submit, correct/incorrect answers are highlighted, the score is shown, and it is saved to `localStorage`.

5. **Review:** the user can retry, open study material, or follow the suggested path in News.

<br>

</details>

### 2.1) Areas, levels and modalities [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

| Area | Route | Storage ID |
|------|------|----------------|
| Programming | `/html/testProgramacion.html` | `programacion` |
| Networks & Infrastructure | `/html/testRedes.html` | `redes-infra` |
| Cybersecurity | `/html/testSeguridadInformatica.html` | `seguridad` |
| IT Fundamentals | `/html/testFundamentosIT.html` | `fundamentos-it` |

**Modalities per level:**

| Modality | Questions | Brief description |
|-----------|-----------|---------------------|
| Quick | 10 | Express review of the level |
| Classic | 20 | Standard assessment |
| Extended | 30 | Full level coverage |
| Practical reading | 10 | Code fragments or real scenarios |

Each area also includes a **Topics by level** section (accordion with content blocks) and links to study material.

<br>

</details>

### 2.2) Score storage [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

Results are stored in the browser with the `testit_` prefix:

```
testit_{areaId}_{level-modality}_{attempts|best|last}
```

Example:

```
testit_programacion_basico-rapido_attempts
testit_programacion_basico-rapido_best
testit_programacion_basico-rapido_last
```

* **attempts:** number of attempts (also alternates the theoretical question set).

* **best:** highest percentage achieved.

* **last:** JSON with the last result (correct, total, percentage, date).

<br>

</details>

### 2.3) Question banks [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

* **Programming (theory):** modules in `src/js/testProgramacion/preguntasTest*.js` (6 sets × 5 questions per level).

* **Other areas (theory):** `teoriaBanks.js` per area (~30 questions per area).

* **Practical reading:** JSON in `src/data/questions/{area}/practica.json` or `programacion/*.codigo.json`.

Canonical format (see `src/data/questions/normalize.js`):

```json
{
  "id": "prog-bas-cod-01",
  "type": "code",
  "question": "What does this code print?",
  "options": { "a": "...", "b": "...", "c": "..." },
  "answer": "b",
  "code": "...",
  "language": "JavaScript",
  "tags": ["variables"]
}
```

<br>

</details>

<br>

## Section 3) Testing, deploy and references

### 3.0) Functional test [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

#### 3.0.1) Verify the app runs locally

```bash
npm run dev
```

Open `http://localhost:5173` and check:

* Home with the 4 area cards.
* Navbar: Home, News, Study Material, Help.
* Test tabs per area (desktop) or hamburger menu (mobile).

#### 3.0.2) Case 1 — Complete a quick test

1. Go to **Programming** → **Basic** level → **Quick** modality.
2. Answer all 10 questions and tap **Submit**.
3. Verify score, visual grading, and **Retry** button.
4. In DevTools → Application → Local Storage, look for `testit_programacion_…` keys.

#### 3.0.3) Case 2 — Study material

1. Open `/html/materialEstudio.html`.
2. Browse areas in the sidebar (or tabs on mobile).
3. Expand a topic and use the link to that area's tests.

#### 3.0.4) Case 3 — News and calendar

1. Open `/html/novedades.html`.
2. Review the monthly calendar and tap an event for details.
3. Check the embedded practice path below the calendar.

#### 3.0.5) Production build

```bash
npm run build
npm run preview
```

Confirm all routes (`/`, `/html/testRedes.html`, etc.) load without console errors.

<br>

</details>

### 3.1) Netlify deploy [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

The `netlify.toml` file defines:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

**Manual deploy:**

1. Connect the repo on Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

**Published site:** [it-tests.netlify.app](https://it-tests.netlify.app/)

<br>

</details>

### 3.2) Contributing [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

1. Fork the project.

2. Create a branch (`git checkout -b feature/my-improvement`).

3. Commit your changes (`git commit -m 'feat: short description'`).

4. Push to the branch (`git push origin feature/my-improvement`).

5. Open a Pull Request.

If you find an error in a question or study content, you can also open an **Issue** with the area, level, and question text.

<br>

</details>

### 3.3) License [🔝](#index-)

<details>
  <summary>View details</summary>

<br>

Open source project. Developed by [Andrés Weitzel](https://github.com/andresWeitzel).

**Related links:**

* **Repository:** [github.com/andresWeitzel/WebSite_Test_IT](https://github.com/andresWeitzel/WebSite_Test_IT)
* **Study material (repo):** [github.com/andresWeitzel/Material_de_Estudio](https://github.com/andresWeitzel/Material_de_Estudio)
* **YouTube channel:** [youtube.com/@andresWeitzel](https://www.youtube.com/channel/UCuSVXmBcMURyTvbmbcgZalQ/featured)

<br>

</details>
