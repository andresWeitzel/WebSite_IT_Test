//Uso de arrays, creacion de objetos dentro de otros objetos
export const preguntasTestMedioProgramacion01 = [

    {
        pregunta: "1.Paradigma Imperativo",

        respuestas: {
            a: " Es una forma de determinar qué datos son requeridos para el cálculo, asociar a estos direcciones de memoria y efectuar, paso a paso, una secuencia de transformaciones en los datos almacenados de forma tal que el estado final represente el resultado correcto.",
            b: "Es una funcion logica que nos permite hacer consultas solamente a la base de datos",
            c: "Los lenguajes imperativos pueden resolver solamente problemas que no sean cálculos matemáticos."
        },

        solucion: "a"
    },

    {
        pregunta: "2.Paradigma Funcional",

        respuestas: {
            a: "La programación funcional no tiene sus raíces en el cálculo lambda.",
            b: "Basado en el uso de verdaderas funciones matemáticas. En este estilo de programación las funciones son ciudadanas de primera clase, porque sus expresiones pueden ser asignadas a variables como se haría con cualquier otro valor; además de que pueden crearse funciones de orden superior",
            c: "Pardigma Obsoleto."
        },

        solucion: "b"
    },
    {
        pregunta: "3.¿En que consiste la Recursividad?",

        respuestas: {
            a: "La recursividad consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores.",
            b: "La recursividad consiste concretamente en el uso de bucles y otros iteradores.",
            c: "La recursividad consiste en el manejo de datos y no puede generar un desbordamiento de pila en el interprete."
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿A qué refiere el Polimorfismo?",

        respuestas: {
            a: "Refiere a el mecanismo por el cual una clase permite heredar las características (atributos y métodos) de otra clase.",
            b: "El polimorfismo se refiere a la propiedad por la que es no es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. No presenta ningún requisito por parte de los Objetos",
            c: "El polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía."
        },

        solucion: "c"
    },
    {
        pregunta: "5.¿Para que sirve una memoria ram?",

        respuestas: {
            a: "En la memoria RAM se almacenan todos los datos e instrucciones de los programas que se están ejecutando, estas son enviadas desde las unidades de almacenamiento antes de su ejecución. De esta forma podremos tener disponibles todos los programas que ejecutamos.",
            b: "Sirve para almacenar datos y no es un componente critico para el rendimiento de nuestro programa",
            c: "Este tipo de memoria de acceso nos sirve unicamente para el renderizado de imágenes."
        },

        solucion: "a"
    }


];

export const preguntasTestMedioProgramacion02 = [

    {
        pregunta: "1.Patrones de Comportamiento",

        respuestas: {
            a: "Corresponden a patrones de diseño de software que solucionan problemas de creación de instancias. Nos ayudan a encapsular y abstraer dicha creación.",
            b: "Son los patrones de diseño software que solucionan problemas de composición (agregación) de clases y objetos",
            c: "Se definen como patrones de diseño software que ofrecen soluciones respecto a la interacción y responsabilidades entre clases y objetos, así como los algoritmos que encapsulan."
        },

        solucion: "c"
    },

    {
        pregunta: "2.Patrón de Diseño Prototype",

        respuestas: {
            a: "Podemos utilizar este patrón cuando definamos una clase a partir de la que se crearán objetos pero sin saber de qué tipo son, siendo otras subclases las encargadas de decidirlo.",
            b: "Este patrón nos será útil si necesitamos crear y manipular copias de otros objetos.",
            c: "Patrón Obsoleto."
        },

        solucion: "b"
    },
    {
        pregunta: "3.¿Qué es una Cookie?",

        respuestas: {
            a: "Una cookie , dentro del alcance del protocolo de comunicación HTTP utilizado en Internet , es un pequeño archivo de computadora  o paquete de datos enviado por un sitio de Internet al navegador del usuario cuando el usuario visita el sitio.",
            b: "Una cookie , dentro del alcance del protocolo de comunicación HTTP utilizado en Internet , es una función deprecada  y en desuso por un sitio de Internet.",
            c: "Una cookie es una porción de Código Especial que se implementa a través de una Clase funcional."
        },

        solucion: "a"
    },
    {
        pregunta: "4.Protocolo de Transferencia de Hipertexto",

        respuestas: {
            a: "Es un protocolo de comunicación (la capa de aplicación de acuerdo a la Modelo OSI ) que se utiliza para sistemas de información hipermedia , distribuido y de colaboración. Es la base para la comunicación de datos en la World Wide Web .",
            b: "Es un protocolo de comunicación (la capa de presentación de acuerdo a la Modelo OSI ) que se utiliza para sistemas especificos de comunicación de Streaming , distribuido y de colaboración.Es la base para la comunicación de datos en la World Wide Web .",
            c: "Sus siglas son HTTP y el formato de implementación es Json."
        },

        solucion: "a"
    },
    {
        pregunta: "5.Identificador uniforme de recursos",

        respuestas: {
            a: "Cuyos recursos referidos pueden cambiar, esto es, la dirección puede apuntar a recursos variables en el tiempo.",
            b: " Los URI se identifican en grupos especiales que definen una sintaxis específica y no poseen protocolos asociados.",
            c: "El propósito principal de esta identificación es permitir la interacción con representaciones del recurso a través de una red, típicamente la Red Mundial , utilizando protocolos específicos. Los URI se identifican en grupos que definen una sintaxis específica y protocolos asociados."
        },

        solucion: "c"
    }


];

export const preguntasTestMedioProgramacion03 = [
    {
        pregunta: "1.¿Qué es la abstracción en POO?",

        respuestas: {
            a: "Ocultar la complejidad y mostrar solo lo esencial del objeto o servicio",
            b: "Duplicar código en múltiples clases sin relación",
            c: "Eliminar todas las interfaces de un sistema"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es el acoplamiento bajo?",

        respuestas: {
            a: "Cuando los módulos dependen poco entre sí y son más fáciles de mantener",
            b: "Cuando todas las clases comparten el mismo estado global",
            c: "Cuando un programa no usa funciones"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es la cohesión alta?",

        respuestas: {
            a: "Cuando un módulo agrupa responsabilidades relacionadas y bien definidas",
            b: "Cuando una clase hace demasiadas tareas no relacionadas",
            c: "Cuando no existen métodos en una clase"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué describe el patrón MVC?",

        respuestas: {
            a: "Separa la interfaz, la lógica y los datos en Modelo, Vista y Controlador",
            b: "Un protocolo de red para transferir archivos",
            c: "Un tipo de base de datos documental"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es una API REST?",

        respuestas: {
            a: "Interfaz que permite comunicar sistemas usando recursos y métodos HTTP",
            b: "Un lenguaje de programación orientado a objetos",
            c: "Un sistema exclusivo para bases de datos locales"
        },

        solucion: "a"
    }
];

export const preguntasTestMedioProgramacion04 = [
    {
        pregunta: "1.¿Para qué sirve JSON?",

        respuestas: {
            a: "Formato ligero de intercambio de datos basado en texto, fácil de leer y parsear",
            b: "Un motor de renderizado gráfico",
            c: "Un sistema operativo de servidores"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es una excepción?",

        respuestas: {
            a: "Evento que interrumpe el flujo normal cuando ocurre un error o situación especial",
            b: "Un comentario de documentación",
            c: "Una variable constante global"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es Git?",

        respuestas: {
            a: "Sistema de control de versiones distribuido para registrar cambios en el código",
            b: "Un framework de interfaz gráfica",
            c: "Un protocolo de correo electrónico"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es una prueba unitaria?",

        respuestas: {
            a: "Verificación automática de una unidad pequeña de código, como una función",
            b: "Un test manual de toda la aplicación en producción",
            c: "Un diagrama entidad-relación"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué mide la notación O grande (Big O)?",

        respuestas: {
            a: "El crecimiento del tiempo o espacio que requiere un algoritmo respecto al tamaño de entrada",
            b: "La cantidad de líneas de un archivo fuente",
            c: "La resolución de una pantalla"
        },

        solucion: "a"
    }
];

export const preguntasTestMedioProgramacion05 = [
    {
        pregunta: "1.¿Qué es una pila (stack)?",

        respuestas: {
            a: "Estructura LIFO: el último elemento en entrar es el primero en salir",
            b: "Estructura FIFO: el primero en entrar es el primero en salir",
            c: "Un tipo de base de datos relacional"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es una cola (queue)?",

        respuestas: {
            a: "Estructura FIFO: el primero en entrar es el primero en salir",
            b: "Estructura LIFO: el último en entrar es el primero en salir",
            c: "Un patrón de diseño creacional"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es una lista enlazada?",

        respuestas: {
            a: "Estructura donde cada nodo apunta al siguiente mediante referencias",
            b: "Un array de tamaño fijo en memoria",
            c: "Un protocolo de enrutamiento"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es el principio DRY?",

        respuestas: {
            a: "Don't Repeat Yourself: evitar duplicar lógica innecesariamente",
            b: "Do Repeat Yourself: copiar código para mayor velocidad",
            c: "Un estándar de seguridad de red"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es un middleware?",

        respuestas: {
            a: "Capa intermedia que procesa solicitudes entre cliente y lógica de negocio",
            b: "Un tipo de memoria ROM",
            c: "Un editor de imágenes raster"
        },

        solucion: "a"
    }
];

export const preguntasTestMedioProgramacion06 = [
    {
        pregunta: "1.¿Qué es la inyección de dependencias?",

        respuestas: {
            a: "Proveer dependencias desde afuera en lugar de crearlas dentro de la clase",
            b: "Insertar código malicioso en una base de datos",
            c: "Un algoritmo de ordenamiento"
        },

        solucion: "a"
    },
    {
        pregunta: "2.¿Qué es un ORM?",

        respuestas: {
            a: "Herramienta que mapea objetos del programa a tablas de una base de datos",
            b: "Un protocolo de transferencia de archivos",
            c: "Un tipo de compilador"
        },

        solucion: "a"
    },
    {
        pregunta: "3.¿Qué es CORS?",

        respuestas: {
            a: "Mecanismo de seguridad del navegador para controlar solicitudes entre orígenes distintos",
            b: "Un lenguaje de consulta SQL",
            c: "Un patrón de diseño comportamiento"
        },

        solucion: "a"
    },
    {
        pregunta: "4.¿Qué es una sesión web?",

        respuestas: {
            a: "Mecanismo para mantener estado del usuario entre múltiples peticiones HTTP",
            b: "Un archivo de imagen en caché",
            c: "Un tipo de variable local"
        },

        solucion: "a"
    },
    {
        pregunta: "5.¿Qué es la refactorización?",

        respuestas: {
            a: "Mejorar la estructura interna del código sin cambiar su comportamiento externo",
            b: "Agregar funcionalidades nuevas al producto",
            c: "Borrar la base de datos de producción"
        },

        solucion: "a"
    }
];
