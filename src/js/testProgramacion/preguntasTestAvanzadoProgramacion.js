//Uso de arrays, creacion de objetos dentro de otros objetos
export const preguntasTestAvanzadoProgramacion01 = [

    {
        pregunta: "1.¿Qué es un Árbol en TDA?",

        respuestas: {
            a: "Una estructura de datos de árbol se puede definir de forma recursiva (localmente) como una colección de nodos (a partir de un nodo raíz), donde cada nodo es una estructura de datos con un valor, junto con una lista de referencias a los nodos (los hijos) , con la condición de que ninguna referencia esté duplicada ni que ningún nodo apunte a la raíz.",
            b: "Un árbol se puede definir de una manera no abstracta en su conjunto como un árbol no ordenado, con un valor asignado a cada nodo",
            c: "Ninguna de las anteriores."
        },

        solucion: "a"
    },

    {
        pregunta: "2.¿Qué es un Algoritmo del Tipo Búsqueda de Profundidad?",

        respuestas: {
            a: "Un Búsqueda en profundidad es un algoritmo que solamente nos permite reformar un procesamiento de imagenes de forma directa.",
            b: "Una Búsqueda en profundidad es un algoritmo de búsqueda no informada utilizado para recorrer todos los nodos de un grafo o árbol (teoría de grafos) de manera ordenada, pero no uniforme.",
            c: "Una Búsqueda en profundidad es un algoritmo de búsqueda no informada utilizado para recorrer todos los nodos de un grafo o árbol.Cuando ya no quedan más nodos que visitar en dicho camino, regresa (Backtracking), de modo que solo repite el mismo proceso una sola vez."
        },

        solucion: "b"
    },
    {
        pregunta: "3.Propiedades de Sockets con protocolo TCP",

        respuestas: {
            a: "Son orientados a la conexión, se garantiza la transmisión de todos los octetos sin errores ni omisiones, se garantiza que todo octeto llegará a su destino en el mismo orden en que se ha transmitido.",
            b: "Son orientados a la conexión, pero no se garantiza la transmisión de todos los octetos sin errores ni omisiones",
            c: "No son orientados a la conexión, pero si se garantiza la transmisión de todos los octetos sin errores ni omisiones y que todo octeto llegara a su destino en el mismo orden en el que se ha transmitido."
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué Ventajas existen en una Nube Pública?",

        respuestas: {
            a: "No integración probada de servicios Red, poca implementación y mayor riesgo, presenta actualizaciones automáticas y constituyen un poblema al usuario.",
            b: "Integración probada de servicios Red, Prestación de servicios a nivel mundial, Implementación más rápida y con menos riesgos, Contribuye al uso eficiente de la energía.",
            c: "La disponibilidad de las aplicaciones está sujeta a la disponibilidad de acceso a Internet, gran escalabilidad a largo plazo "
        },

        solucion: "b"
    },
    {
        pregunta: "5.¿Como se produce un desbordamiento de memoria-buffer?",

        respuestas: {
            a: "Un desbordamiento de búfer ocurre cuando los datos que se escriben en un búfer no corrompen aquellos datos en direcciones de memoria adyacentes a los destinados para el búfer, sino que se produce por el consumo excesivo del componente.",
            b: "Se produce solamente por un fallo fisico del dispositivo",
            c: "Se produce cuando un programa no controla adecuadamente la cantidad de datos que se copian sobre un área de memoria reservada a tal efecto (buffer) y constituye un fallor de programacion"
        },

        solucion: "c"
    }


];

//Uso de arrays, creacion de objetos dentro de otros objetos
export const preguntasTestAvanzadoProgramacion02 = [

    {
        pregunta: "1.Punteros en Memoria",

        respuestas: {
            a: "Los punteros a datos mejoran significativamente el rendimiento de las operaciones repetitivas tales como cadenas de desplazamiento, tablas de búsqueda, tablas de control y estructuras árbol.",
            b: "Los punteros a datos mejoran significativamente el rendimiento de las operaciones de grafico, tales como renderizado de imagenes, procesamiento, etc.",
            c: "Ninguna de las anteriores."
        },

        solucion: "a"
    },

    {
        pregunta: "2.Tabla de Consulta",

        respuestas: {
            a: "Se usa para sustituir una rutina de computación con una simple indexación de los vectores.Es una funcion desarrollado solamente en Sistemas Operativos especiales",
            b: "Se usa para sustituir una rutina de computación con una simple indexación de los vectores. Son muy útiles a la hora de ahorrar tiempo de procesamiento, porque sacar un valor de memoria es mucho más rápido que hacer una gran computación",
            c: "Ambas respuestas son correctas."
        },

        solucion: "b"
    },
    {
        pregunta: "3.Tiempo de Procesamiento",

        respuestas: {
            a: "El tiempo de procesamiento es el tiempo real que ocupa el disco virtual para llevar a cabo tares no repetitivas.",
            b: "El tiempo no real transcurrido no incluye el tiempo de la entrada/salida y todos los otros tipos de esperas incurridas por el programa.Es inestable",
            c: "Es la cantidad de tiempo en que la unidad central de proceso fue usada para procesar las instrucciones de un programa de computadora, en oposición a la espera por las operaciones de entrada/salida."
        },

        solucion: "c"
    },
    {
        pregunta: "4.Segmentación de Memoria",

        respuestas: {
            a: "La segmentación de memoria es una técnica de gestión de memoria que pretende acercarse más al punto de vista del usuario. Los programas se desarrollan, generalmente, en torno a un núcleo central (principal) desde el que se bifurca a otras partes (rutinas) o se accede a zonas de datos (tablas, pilas, etc).",
            b: "La segmentación de un programa la realiza el compilador y en ella cada dirección lógica se expresará mediante dos valores: Números aleatorios y Numero especifico.",
            c: "Esta técnica no permite reducir la fragmentación interna de la memoria provocada por la paginación."
        },

        solucion: "a"
    },
    {
        solucion: "c"
    }


];

export const preguntasTestAvanzadoProgramacion03 = [
    {
        pregunta: "1.¿Qué es BFS (búsqueda en anchura)?",

        respuestas: {
            a: "Algoritmo que explora un grafo nivel por nivel usando típicamente una cola",
            b: "Un algoritmo exclusivo de ordenamiento de arrays",
            c: "Un protocolo de capa física de red"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es una tabla hash?",

        respuestas: {
            a: "Estructura que mapea claves a valores usando una función hash para acceso eficiente",
            b: "Una tabla relacional de SQL sin índices",
            c: "Un tipo de memoria caché del navegador"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué hace el algoritmo de Dijkstra?",

        respuestas: {
            a: "Encuentra caminos mínimos desde un nodo origen en grafos con pesos no negativos",
            b: "Comprime archivos de imagen sin pérdida",
            c: "Gestiona memoria virtual en el SO"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es un grafo dirigido?",

        respuestas: {
            a: "Conjunto de vértices y aristas con dirección definida entre nodos",
            b: "Un diagrama de clases UML sin relaciones",
            c: "Un archivo de configuración JSON"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es la complejidad O(n log n)?",

        respuestas: {
            a: "Crecimiento típico de algoritmos eficientes de ordenamiento comparativo",
            b: "Tiempo constante independiente del tamaño de entrada",
            c: "Complejidad exclusiva de estructuras de cola"
        },

        solucion: "a"
    }
];

export const preguntasTestAvanzadoProgramacion04 = [
    {
        pregunta: "1.¿Qué es DNS?",

        respuestas: {
            a: "Sistema que traduce nombres de dominio a direcciones IP",
            b: "Protocolo de transferencia de hipertexto",
            c: "Un tipo de firewall de aplicación"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué aporta TLS en HTTP?",

        respuestas: {
            a: "Cifrado y autenticación para comunicaciones seguras (HTTPS)",
            b: "Compresión obligatoria de imágenes",
            c: "Eliminación de cookies de sesión"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es balanceo de carga?",

        respuestas: {
            a: "Distribuir tráfico entre varios servidores para mejorar disponibilidad y rendimiento",
            b: "Ordenar elementos de un array en memoria",
            c: "Un patrón de diseño Singleton"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es un CDN?",

        respuestas: {
            a: "Red de servidores distribuidos que entrega contenido cerca del usuario final",
            b: "Base de datos relacional en la nube",
            c: "Un lenguaje de scripting del lado cliente"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es UDP comparado con TCP?",

        respuestas: {
            a: "Protocolo sin conexión, más liviano, sin garantía de entrega ordenada",
            b: "Protocolo orientado a conexión con garantías de entrega",
            c: "Un formato de serialización de objetos"
        },

        solucion: "a"
    }
];

export const preguntasTestAvanzadoProgramacion05 = [
    {
        pregunta: "1.¿Qué es la memoria virtual?",

        respuestas: {
            a: "Técnica que permite usar disco como extensión de RAM mediante paginación",
            b: "Memoria exclusiva de la tarjeta gráfica",
            c: "Un tipo de variable global"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es la paginación?",

        respuestas: {
            a: "División de memoria en páginas fijas para gestión del espacio virtual",
            b: "Un algoritmo de búsqueda en árboles binarios",
            c: "Un protocolo de correo electrónico"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es la memoria caché del procesador?",

        respuestas: {
            a: "Memoria rápida que almacena datos frecuentes para reducir latencia",
            b: "Almacenamiento permanente del disco SSD",
            c: "Un registro de auditoría de red"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es un deadlock?",

        respuestas: {
            a: "Situación donde procesos se bloquean mutuamente esperando recursos",
            b: "Un error de sintaxis en compilación",
            c: "Finalización normal de un hilo"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es un hilo (thread)?",

        respuestas: {
            a: "Unidad de ejecución dentro de un proceso que comparte memoria con otros hilos",
            b: "Un archivo de log del sistema operativo",
            c: "Un tipo de socket UDP"
        },

        solucion: "a"
    }
];

export const preguntasTestAvanzadoProgramacion06 = [
    {
        pregunta: "1.¿Qué es arquitectura de microservicios?",

        respuestas: {
            a: "Diseño donde la aplicación se divide en servicios pequeños e independientes",
            b: "Un monolito con una sola base de código desplegada",
            c: "Un patrón de diseño para interfaces gráficas"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es idempotencia en APIs?",

        respuestas: {
            a: "Repetir la misma operación produce el mismo efecto sin duplicar resultados",
            b: "Imposibilidad de cachear respuestas HTTP",
            c: "Cifrado obligatorio de payloads JSON"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es un contenedor (Docker)?",

        respuestas: {
            a: "Empaqueta aplicación y dependencias aisladas del host de forma portable",
            b: "Una máquina virtual con su propio kernel completo siempre",
            c: "Un sistema de control de versiones"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es observabilidad en sistemas?",

        respuestas: {
            a: "Capacidad de entender el estado interno mediante logs, métricas y trazas",
            b: "Ocultar errores al usuario final",
            c: "Eliminar pruebas automatizadas"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es backtracking?",

        respuestas: {
            a: "Técnica que retrocede al encontrar un camino inválido para probar alternativas",
            b: "Un método de compresión de video",
            c: "Un tipo de indexación SQL única"
        },

        solucion: "a"
    }
];