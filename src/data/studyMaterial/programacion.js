/** Temas ampliados de Programación. */
export const PROGRAMACION_TOPICS = [
  {
    id: 'prog-javascript',
    title: 'JavaScript y entorno web',
    intro:
      'JavaScript es el lenguaje que hace interactivas las páginas web modernas. Corre en el navegador (frontend), en servidores con Node.js (backend) y en herramientas de build como Vite o Webpack. Dominarlo implica entender tipos de datos, el DOM, eventos, asincronía y cómo organizar el código en módulos reutilizables.',
    subsections: [
      {
        title: 'Fundamentos del lenguaje',
        entries: [
          {
            term: 'Tipos primitivos y referencias',
            text: 'JavaScript trabaja con number, string, boolean, null, undefined, symbol y bigint. Los objetos, arrays y funciones se pasan por referencia: modificar un array dentro de una función puede afectar al original. Los primitivos se copian por valor. Comparar objetos con === compara referencias, no contenido; para eso se usa JSON.stringify o librerías de deep equal.',
          },
          {
            term: 'let, const y scope',
            text: 'const declara una referencia que no puede reasignarse (pero el contenido de un objeto sí puede mutar). let tiene scope de bloque (if, for, {}). Evitá var en código nuevo: tiene scope de función y puede provocar bugs sutiles en bucles y closures. Un patrón habitual es const por defecto y let solo cuando necesitás reasignar.',
          },
          {
            term: 'Funciones y arrow functions',
            text: 'Las funciones declaradas se elevan (hoisting); las arrow functions no. Arrow functions no tienen su propio this: heredan el this del contexto léxico, útil en callbacks y métodos de clase. function suma(a, b) { return a + b; } y const suma = (a, b) => a + b son equivalentes para lógica simple. Para métodos de objeto que usan this, preferí function clásica.',
          },
          {
            term: 'Arrays y métodos funcionales',
            text: 'map transforma cada elemento y devuelve un nuevo array. filter deja solo los que cumplen una condición. reduce acumula un valor (suma, conteo, agrupación). find devuelve el primer match; some/every responden boolean. Encadenar map → filter → reduce es idiomático en JS moderno y reemplaza muchos bucles for imperativos.',
          },
          {
            term: 'Objetos, destructuring y spread',
            text: 'Destructuring extrae propiedades: const { nombre, edad } = usuario. Spread copia o combina: { ...defaults, ...overrides }. Object.keys, values y entries recorren propiedades. Optional chaining (?.) evita errores si una propiedad es null/undefined: usuario?.direccion?.calle. Nullish coalescing (??) usa un valor por defecto solo si el izquierdo es null o undefined.',
          },
        ],
      },
      {
        title: 'DOM y manipulación de la página',
        entries: [
          {
            term: 'Qué es el DOM',
            text: 'El Document Object Model es la representación en árbol del HTML que el navegador construye al parsear la página. Cada etiqueta es un nodo; document es la raíz. JavaScript puede leer atributos, cambiar texto, agregar clases CSS, crear nodos nuevos o eliminarlos. Sin el DOM, una página sería estática: no habría menús, formularios dinámicos ni actualizaciones sin recargar.',
          },
          {
            term: 'Selección de elementos',
            text: 'querySelector devuelve el primer match de un selector CSS; querySelectorAll devuelve una NodeList. getElementById es más rápido para IDs únicos. getElementsByClassName devuelve HTMLCollection viva (se actualiza sola). Buena práctica: cachear referencias a nodos que no cambian y volver a consultar solo tras renderizados grandes.',
          },
          {
            term: 'Modificar contenido y estilos',
            text: 'textContent asigna texto plano (seguro ante XSS). innerHTML interpreta HTML (usar solo con datos confiables). classList.add/remove/toggle maneja clases sin pisar otras. element.style modifica estilos inline; preferí clases CSS para mantenimiento. setAttribute y dataset (data-*) guardan metadatos en el markup para scripts.',
          },
          {
            term: 'Crear y eliminar nodos',
            text: 'document.createElement("div") crea un elemento vacío. appendChild o append insertan en el padre. remove() elimina un nodo del árbol. DocumentFragment permite construir muchos nodos en memoria y montarlos de una vez, reduciendo reflows. En apps grandes, frameworks como React virtualizan el DOM; en vanilla JS conviene minimizar escrituras repetidas.',
          },
          {
            term: 'Eventos del usuario',
            text: 'addEventListener registra handlers sin sobrescribir otros. El objeto event trae target (elemento que disparó), preventDefault() (cancela acción default como submit) y stopPropagation() (evita burbujeo). Delegación: escuchar clicks en un contenedor padre y filtrar por event.target.closest(".btn") escala mejor que un listener por botón en listas largas.',
          },
        ],
      },
      {
        title: 'Asincronía y comunicación',
        entries: [
          {
            term: 'Event loop y call stack',
            text: 'JavaScript es single-threaded: una pila de ejecución a la vez. Operaciones lentas (red, timers) se delegan al navegador u OS; al terminar, callbacks entran a la cola de tareas. El event loop vacía la pila y luego procesa la cola. Por eso un while(true) bloquea la UI aunque haya timers pendientes.',
          },
          {
            term: 'Promesas',
            text: 'Una Promise representa un valor futuro: pending, fulfilled o rejected. then encadena éxito; catch maneja errores; finally corre siempre. Promise.all espera todas; Promise.race la primera que termine. Evitá callback hell encadenando then anidados; async/await es más legible para flujos secuenciales.',
          },
          {
            term: 'async / await',
            text: 'async function devuelve siempre una Promise. await pausa la función hasta que la Promise se resuelve, sin bloquear el hilo principal. Usá try/catch alrededor de await para errores de fetch. Paralelizar: const [a, b] = await Promise.all([fetchA(), fetchB()]) en lugar de dos await seguidos.',
          },
          {
            term: 'fetch y APIs HTTP',
            text: 'fetch(url) devuelve una Promise con la Response. response.ok indica status 200–299. response.json() parsea cuerpo JSON (otra Promise). Configurá method, headers y body para POST/PUT. Manejá timeout con AbortController. CORS: el servidor debe permitir el origen del frontend; errores de red no siempre tienen response.status.',
          },
          {
            term: 'localStorage y sessionStorage',
            text: 'localStorage persiste entre sesiones del navegador (mismo origen). sessionStorage se borra al cerrar la pestaña. Solo guardan strings; objetos requieren JSON.stringify/parse. No uses para datos sensibles (tokens): accesibles por cualquier script en la página. Cuota típica ~5 MB por origen.',
          },
        ],
      },
      {
        title: 'Módulos y entorno de desarrollo',
        entries: [
          {
            term: 'ES Modules (import / export)',
            text: 'export const PI = 3.14; export default function App() {} expone símbolos. import App from "./App.js"; import { PI } from "./constants.js" los consume. Los paths relativos llevan extensión .js en navegador nativo. Los módulos son strict mode y scope aislado por archivo. Vite y bundlers modernos parten de un entry y resuelven el grafo de dependencias.',
          },
          {
            term: 'Node.js y npm',
            text: 'Node ejecuta JS fuera del navegador: scripts, APIs, herramientas CLI. npm (o pnpm/yarn) gestiona dependencias en package.json. npm install agrega paquetes; npm run dev ejecuta scripts definidos. node_modules contiene librerías; package-lock.json fija versiones exactas para builds reproducibles.',
          },
          {
            term: 'Vite en este proyecto',
            text: 'Vite sirve módulos ES en desarrollo con hot module replacement (cambios sin recargar toda la página). En build, empaqueta y minifica para producción en dist/. Importar CSS desde JS inyecta estilos. Public/ sirve assets estáticos sin procesar. Entender este flujo ayuda a depurar rutas rotas o imports incorrectos.',
          },
          {
            term: 'Linting y formato',
            text: 'ESLint detecta patrones y malas prácticas; Prettier unifica formato. Reglas comunes: no variables sin usar, prefer const, evitar ==. Integrarlos en el editor acelera feedback antes del commit. En equipos, un .eslintrc compartido evita discusiones de estilo.',
          },
        ],
      },
      {
        title: 'Errores frecuentes y buenas prácticas',
        entries: [
          {
            term: 'Comparaciones y coerción',
            text: '== convierte tipos antes de comparar ("" == 0 es true); === exige tipo y valor iguales. Preferí === casi siempre. Ojo con NaN: NaN === NaN es false; usá Number.isNaN. Arrays vacíos son truthy; validá length si buscás “sin elementos”.',
          },
          {
            term: 'Closures en bucles',
            text: 'Un for con var y setTimeout imprime el mismo índice final. Solución: let en el for, o IIFE, o forEach con parámetro. Los closures capturan variables por referencia; entender esto explica muchos bugs en callbacks y listeners.',
          },
          {
            term: 'Manejo de errores',
            text: 'No silencies catch vacíos. Logueá o mostrá feedback al usuario. Errores síncronos: try/catch. Promesas: .catch o try/catch con await. window.onerror y unhandledrejection capturan fallos globales en producción (Sentry, etc.).',
          },
          {
            term: 'Accesibilidad básica en JS',
            text: 'Botones reales (<button>) en lugar de divs clickables. aria-expanded en acordeones. Focus visible tras abrir modales. No dependas solo de color para estado. Teclado: Enter/Space activan controles custom si replicás comportamiento de botón.',
          },
        ],
      },
    ],
  },
  {
    id: 'prog-algoritmos',
    title: 'Algoritmos y complejidad',
    intro:
      'Un algoritmo es una secuencia finita de pasos para resolver un problema. En entrevistas y en producción importa no solo que funcione, sino cuánto tiempo y memoria consume al crecer la entrada. La notación O grande resume ese comportamiento asymptótico y guía la elección entre estructuras de datos.',
    subsections: [
      {
        title: 'Análisis de complejidad',
        entries: [
          {
            term: 'Notación O grande',
            text: 'O(f(n)) acota el peor caso cuando n crece. O(1): acceso a array por índice. O(log n): búsqueda binaria. O(n): recorrer una lista una vez. O(n log n): mergesort. O(n²): dos bucles anidados sobre n. Constantes y términos menores se ignoran: O(2n + 5) se escribe O(n).',
          },
          {
            term: 'Tiempo vs espacio',
            text: 'Trade-off habitual: un hash map O(1) lookup usa más memoria que buscar en array ordenado O(log n). Memoización guarda resultados intermedios (más RAM, menos recomputo). En dispositivos limitados priorizá espacio; en servidores con millones de requests, tiempo de respuesta.',
          },
          {
            term: 'Casos mejor, promedio y peor',
            text: 'Quicksort promedio O(n log n) pero peor O(n²) con pivote malo. Al reportar complejidad especificá cuál caso. Data structures amortizadas (dynamic array) tienen costo promedio bajo aunque un insert puntual sea O(n).',
          },
          {
            term: 'Cómo estimar en código',
            text: 'Contá bucles anidados sobre la entrada principal. Una pasada = O(n). Dos anidados = O(n²). Dividir a la mitad cada paso = O(log n). Combinar: O(n) + O(n log n) domina el término mayor. Recursión: profundidad × trabajo por nivel.',
          },
        ],
      },
      {
        title: 'Búsqueda y ordenamiento',
        entries: [
          {
            term: 'Búsqueda lineal',
            text: 'Recorre elemento a elemento hasta encontrar o agotar. O(n) tiempo, O(1) espacio extra. Útil en listas pequeñas o desordenadas. Early exit al encontrar mejora el caso promedio pero no el peor.',
          },
          {
            term: 'Búsqueda binaria',
            text: 'Requiere array ordenado. Compara con el medio; descarta mitad. O(log n). Implementación clásica: left=0, right=n-1, mid=floor((left+right)/2). Cuidado con overflow en otros lenguajes; en JS no es issue. Variante: lower_bound para primer índice >= objetivo.',
          },
          {
            term: 'Bubble, insertion y selection sort',
            text: 'Simples de implementar, O(n²). Insertion sort eficiente en arrays casi ordenados o n pequeño. En producción usá sort nativo del lenguaje (Timsort en JS: O(n log n) promedio) salvo restricciones educativas.',
          },
          {
            term: 'Merge sort y quick sort',
            text: 'Merge: divide, ordena mitades, merge O(n log n) estable, O(n) espacio auxiliar. Quick: pivote, partición, recursión; in-place promedio O(n log n). Elegir pivote aleatorio reduce peor caso en práctica.',
          },
        ],
      },
      {
        title: 'Recursión',
        entries: [
          {
            term: 'Caso base y caso recursivo',
            text: 'Toda recursión necesita condición de parada (caso base) y llamada con problema más chico. Sin base → stack overflow. Ejemplo factorial: if (n <= 1) return 1; return n * factorial(n-1). La pila guarda cada frame hasta volver.',
          },
          {
            term: 'Recursión vs iteración',
            text: 'Cualquier recursión puede reescribirse con pila explícita (iterativa). Recursión es clara en árboles y backtracking. Iteración suele usar menos memoria de pila. Tail recursion optimization existe en algunos lenguajes; en JS no está garantizada.',
          },
          {
            term: 'Divide and conquer',
            text: 'Partir problema en subproblemas independientes, resolver recursivamente, combinar. Merge sort y binary search son ejemplos. Master theorem ayuda a acotar recurrencias T(n)=aT(n/b)+f(n) en teoría.',
          },
          {
            term: 'Backtracking',
            text: 'Explorar decisiones (laberinto, N reinas, permutaciones) y retroceder si no hay solución. Podar ramas inviables reduce explosión combinatoria. Complejidad exponencial en muchos casos; heurísticas y límites de profundidad en práctica.',
          },
        ],
      },
      {
        title: 'Estructuras de datos en profundidad',
        entries: [
          {
            term: 'Arrays y listas enlazadas',
            text: 'Array: acceso O(1), insert/delete al inicio O(n). Lista enlazada: insert O(1) si tenés puntero al nodo, búsqueda O(n). Doubly linked list permite borrar con referencia al nodo. En JS los arrays son dinámicos y optimizados internamente.',
          },
          {
            term: 'Pila (stack) y cola (queue)',
            text: 'Pila LIFO: undo, parsing, DFS. Cola FIFO: BFS, colas de mensajes, schedulers. Implementación con array push/pop O(1) amortizado; shift en array es O(n) en JS — para colas grandes considerá linked list o deque.',
          },
          {
            term: 'Hash map / objeto / Map',
            text: 'Clave → valor, lookup promedio O(1). Colisiones resuelven con chaining o open addressing. Map en JS acepta cualquier tipo de clave; Object convierte keys a string. Set guarda valores únicos. Contar frecuencias con map es patrón clásico.',
          },
          {
            term: 'Árboles y grafos',
            text: 'Árbol binario de búsqueda: insert/search O(log n) si balanceado; O(n) degenerado. Recorridos: inorder (ordenado en BST), preorder, postorder, level-order (BFS). Grafos: lista de adyacencia vs matriz; Dijkstra shortest path; detectar ciclos con DFS y colores.',
          },
          {
            term: 'Heap y priority queue',
            text: 'Min-heap: el mínimo está en la raíz; insert/extract O(log n). Usado en Dijkstra, top-K elementos, schedulers. En JS no hay heap nativo; array + bubble up/down o librería.',
          },
        ],
      },
      {
        title: 'Patrones útiles para resolver problemas',
        entries: [
          {
            term: 'Two pointers',
            text: 'Dos índices en array ordenado: suma objetivo, eliminar duplicados, palíndromos. Avanzá el puntero según la condición. Típico O(n) en lugar de O(n²) por pares.',
          },
          {
            term: 'Sliding window',
            text: 'Ventana de tamaño fijo o variable sobre array/string: máximo subarray de suma k, substring sin repetir. Mantener contadores en ventana y mover bordes izquierdo/derecho.',
          },
          {
            term: 'Greedy',
            text: 'Decisión local óptima en cada paso. Funciona cuando tiene propiedad greedy (ej. activity selection con sort por fin). Si no, puede fallar; comparar con DP.',
          },
          {
            term: 'Programación dinámica',
            text: 'Subproblemas solapados + optimal substructure. Tabulation (bottom-up) o memoization (top-down). Ejemplos: Fibonacci, knapsack, longest common subsequence. Definir estado y transición es el núcleo del diseño.',
          },
        ],
      },
    ],
  },
  {
    id: 'prog-git',
    title: 'Control de versiones con Git',
    intro:
      'Git registra el historial de un proyecto y permite trabajar en paralelo sin pisar cambios ajenos. Es estándar en equipos de desarrollo, DevOps y documentación técnica. Saber branch, merge, resolver conflictos y leer git log es tan importante como escribir código.',
    subsections: [
      {
        title: 'Conceptos base',
        entries: [
          {
            term: 'Repositorio y working tree',
            text: 'El repo contiene commits, branches y tags en .git/. Working tree son los archivos que editás. staging area (index) es donde preparás el próximo commit. Flujo: modificar → git add → git commit. git status muestra en qué estado está cada archivo.',
          },
          {
            term: 'Commit',
            text: 'Snapshot inmutable identificado por hash SHA. Incluye autor, fecha, mensaje y puntero al padre. Mensajes claros: imperativo, 50 chars título, cuerpo opcional con motivo. Commits pequeños y atómicos facilitan revert y bisect.',
          },
          {
            term: 'Branch y HEAD',
            text: 'Branch es un puntero móvil a un commit. HEAD indica dónde estás (normalmente una branch). Crear branch es barato: git branch feature/login. Cambiar: git checkout feature/login o git switch. main/master suele ser producción; develop integración.',
          },
          {
            term: 'Remote y origin',
            text: 'git remote -v lista servidores (GitHub, GitLab). git fetch trae commits sin fusionar. git pull = fetch + merge/rebase. git push sube tus commits. Upstream: git push -u origin branch vincula tracking.',
          },
        ],
      },
      {
        title: 'Flujo de trabajo diario',
        entries: [
          {
            term: 'Clonar y configurar',
            text: 'git clone url crea copia local. git config user.name y user.email identifican commits. .gitignore excluye node_modules, .env, dist/ del tracking. Nunca commitear secretos: rotar keys si se filtraron.',
          },
          {
            term: 'Ver historial',
            text: 'git log --oneline --graph --all visualiza ramas. git show commit muestra diff. git blame línea por autor. git diff compara working vs staging; git diff --staged vs último commit.',
          },
          {
            term: 'Deshacer cambios',
            text: 'git restore archivo descarta cambios no staged. git restore --staged saca del index. git commit --amend reescribe último commit (solo si no se pusheó). git revert crea commit que deshace otro (seguro en main compartida). git reset mueve branch (cuidado en compartido).',
          },
          {
            term: 'Stash',
            text: 'git stash guarda cambios temporales sin commit. git stash pop los reaplica. Útil para cambiar de branch con trabajo a medias. git stash list muestra entradas.',
          },
        ],
      },
      {
        title: 'Colaboración y merge',
        entries: [
          {
            term: 'Merge',
            text: 'Integra otra branch en la actual. Fast-forward si no hay divergencia. Merge commit si ambas avanzaron. Conflictos: Git marca <<<<<<< en archivos; editás manualmente, git add, git commit. Probar tras resolver conflictos.',
          },
          {
            term: 'Rebase',
            text: 'Reaplica tus commits encima de otra base. Historial lineal más limpio. Regla: no rebase commits ya pusheados que otros usan. git rebase main en feature branch antes de PR es habitual.',
          },
          {
            term: 'Pull request / Merge request',
            text: 'Propuesta en GitHub/GitLab para integrar cambios. Incluye descripción, reviewers, checks CI. Code review mejora calidad y difunde conocimiento. Squash merge condensa muchos commits en uno en main.',
          },
          {
            term: 'Tags y releases',
            text: 'git tag v1.0.0 marca versión. Tags anotados guardan mensaje y firmante. Releases en GitHub adjuntan changelog y binarios. Semantic versioning: MAJOR.MINOR.PATCH.',
          },
        ],
      },
      {
        title: 'Estrategias de branching',
        entries: [
          {
            term: 'Git Flow',
            text: 'main producción, develop integración, feature/*, release/*, hotfix/*. Formal para releases versionados. Más overhead; común en software empaquetado.',
          },
          {
            term: 'GitHub Flow',
            text: 'main siempre deployable, feature branches cortas, PR + deploy. Simple para SaaS y CI/CD continuo. Feature flags para código incompleto en producción.',
          },
          {
            term: 'Trunk-based',
            text: 'Commits frecuentes a main/trunk con ramas de horas o días. Requiere CI fuerte y disciplina. Escala en equipos grandes (Google, etc.).',
          },
        ],
      },
      {
        title: 'Buenas prácticas y troubleshooting',
        entries: [
          {
            term: 'Commits atómicos',
            text: 'Un commit = un cambio lógico (fix login, add test). Facilita git bisect para encontrar regresiones. Evitá “WIP” gigantes mezclando refactor + feature + formato.',
          },
          {
            term: 'git bisect',
            text: 'Búsqueda binaria en historial: git bisect start, bad, good. Git checkout commits intermedios hasta encontrar el que introdujo el bug. Automatizable con script de test.',
          },
          {
            term: 'Hooks',
            text: 'pre-commit puede correr lint/test. commit-msg valida formato. Husky en Node integra hooks. No saltear hooks en equipo (--no-verify) salvo emergencia acordada.',
          },
          {
            term: 'Submodules y monorepos',
            text: 'Submodule apunta a otro repo (complejo de mantener). Monorepo: varios proyectos en un repo (Nx, Turborepo). Elegir según acoplamiento y release cycle del equipo.',
          },
        ],
      },
    ],
  },
  {
    id: 'prog-typescript-apis',
    title: 'TypeScript, APIs REST y testing',
    intro:
      'Proyectos medianos y grandes suelen tipar JavaScript con TypeScript, exponer o consumir APIs REST y validar comportamiento con tests automatizados. Estas tres piezas reducen bugs en runtime, documentan contratos entre frontend y backend y permiten refactor con confianza.',
    subsections: [
      {
        title: 'TypeScript esencial',
        entries: [
          {
            term: 'Tipos estáticos',
            text: 'TS añade tipos en compile-time. let edad: number = 25. Interfaces describen forma de objetos. Errores se detectan al compilar, no solo en producción. tsc transpila a JS; muchos proyectos usan Vite/esbuild que transpilan sin chequeo estricto separado.',
          },
          {
            term: 'Interfaces y type aliases',
            text: 'interface User { id: string; name: string; email?: string } — email opcional. type Status = "pending" | "done" union literal. extends para heredar interfaces. type para unions e intersecciones complejas.',
          },
          {
            term: 'Generics',
            text: 'function first<T>(arr: T[]): T | undefined permite reutilizar lógica conservando tipo. Promise<User>, Array<string>. Constraints: <T extends { id: string }>. Generics aparecen en utilidades de fetch y state managers.',
          },
          {
            term: 'strict mode',
            text: 'strictNullChecks obliga a manejar null/undefined. noImplicitAny exige tipar parámetros. Activar strict en tsconfig.json desde el inicio del proyecto evita deuda técnica masiva después.',
          },
        ],
      },
      {
        title: 'Diseño de APIs REST',
        entries: [
          {
            term: 'Recursos y verbos HTTP',
            text: 'URLs nombran recursos: /users, /users/42/orders. GET lee, POST crea, PUT/PATCH actualiza, DELETE elimina. Códigos: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error.',
          },
          {
            term: 'JSON y contratos',
            text: 'Cuerpo request/response en JSON. Content-Type: application/json. Versionar API: /v1/users o header Accept. OpenAPI/Swagger documenta endpoints y genera clientes. Validar entrada en servidor (Zod, Joi, class-validator).',
          },
          {
            term: 'Paginación y filtros',
            text: '?page=2&limit=20&sort=-createdAt. Respuesta con meta: total, hasNext. Cursor-based pagination para feeds en tiempo real. Evitar offset grande en tablas enormes (lento en SQL).',
          },
          {
            term: 'Autenticación en APIs',
            text: 'Bearer token JWT en Authorization header. Refresh tokens en httpOnly cookie. API keys para servicio a servicio. OAuth2 para delegar login a Google/GitHub. Nunca tokens en query string (logs, referrer).',
          },
        ],
      },
      {
        title: 'Testing automatizado',
        entries: [
          {
            term: 'Pirámide de tests',
            text: 'Muchos unit tests (rápidos, aislados), menos integration (DB, API), pocos E2E (Playwright, Cypress simulan usuario real). Balance según costo de mantenimiento y confianza requerida.',
          },
          {
            term: 'Unit tests',
            text: 'Vitest/Jest: describe, it, expect. Mock de dependencias con vi.fn() o jest.mock. Testear casos borde: null, array vacío, error de red. AAA: Arrange, Act, Assert.',
          },
          {
            term: 'Integration y E2E',
            text: 'Integration levanta API real contra DB de test (Docker). E2E recorre flujos críticos: login, checkout. Más lentos; correr en CI en main/PR, no en cada keystroke.',
          },
          {
            term: 'TDD y cobertura',
            text: 'Test-Driven Development: test rojo → código mínimo → verde → refactor. Cobertura 100% no garantiza calidad pero detecta código sin ejecutar. Apuntar a paths críticos de negocio.',
          },
        ],
      },
    ],
  },
];
