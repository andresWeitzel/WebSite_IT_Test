import { normalizeQuestions } from '../../data/questions/normalize.js';

function q(question, a, b, c, answer) {
  return { question, options: { a, b, c }, answer };
}

function buildSets(groups) {
  return groups.map((group) => normalizeQuestions(group));
}

const SET_01 = [
  q('¿Qué es una red informática?', 'Un conjunto de dispositivos interconectados que comparten recursos', 'Un solo servidor sin conexión', 'Un lenguaje de programación', 'a'),
  q('¿Qué es el modelo OSI?', 'Marco de referencia de 7 capas para comunicación de redes', 'Un protocolo de enrutamiento', 'Un tipo de cable UTP', 'a'),
  q('¿En qué capa opera HTTP?', 'Capa de aplicación', 'Capa física', 'Capa de enlace', 'a'),
  q('¿Qué es una dirección IP?', 'Identificador lógico de un host en una red', 'Un nombre de dominio web', 'Un puerto TCP', 'a'),
  q('¿Qué hace un switch?', 'Conmuta tramas entre dispositivos en una LAN', 'Traduce nombres DNS', 'Cifra tráfico HTTPS', 'a'),
];

const SET_02 = [
  q('¿Qué es TCP?', 'Protocolo orientado a conexión con entrega ordenada', 'Protocolo sin conexión sin garantías', 'Un formato de imagen', 'a'),
  q('¿Qué es UDP?', 'Protocolo sin conexión, liviano y sin garantía de entrega', 'Protocolo que siempre retransmite paquetes', 'Un sistema de archivos', 'a'),
  q('¿Qué es una máscara de subred?', 'Define qué parte de la IP es red y cuál es host', 'Cifra el tráfico entre routers', 'Asigna nombres a dominios', 'a'),
  q('¿Qué es DHCP?', 'Asigna configuración IP automáticamente a clientes', 'Resuelve nombres a IP', 'Envía correo electrónico', 'a'),
  q('¿Qué es un router?', 'Enruta paquetes entre redes distintas', 'Amplifica señal Wi-Fi solamente', 'Almacena archivos compartidos', 'a'),
];

const SET_03 = [
  q('¿Qué es DNS?', 'Traduce nombres de dominio a direcciones IP', 'Protocolo de transferencia de archivos', 'Estándar de cableado', 'a'),
  q('¿Qué es NAT?', 'Permite que redes privadas accedan a Internet compartiendo IP pública', 'Cifra datos en reposo', 'Monitorea CPU del servidor', 'a'),
  q('¿Qué es VLAN?', 'Segmentación lógica de una red en switches', 'Un tipo de firewall de aplicación', 'Un contenedor Docker', 'a'),
  q('¿Qué es latencia?', 'Tiempo que tarda un paquete en ir y volver', 'Ancho de banda máximo', 'Cantidad de hops en BGP', 'a'),
  q('¿Qué es ancho de banda?', 'Capacidad de transmisión de datos en un enlace', 'Tiempo de respuesta DNS', 'Número de puertos abiertos', 'a'),
];

const SET_04 = [
  q('¿Qué es Docker?', 'Plataforma de contenedores para empaquetar aplicaciones', 'Sistema operativo de routers', 'Protocolo de correo', 'a'),
  q('¿Qué es Kubernetes?', 'Orquestador de contenedores a escala', 'Base de datos relacional', 'Herramienta de diseño gráfico', 'a'),
  q('¿Qué es CI/CD?', 'Integración y despliegue continuo automatizado', 'Un tipo de cable de fibra', 'Un algoritmo de ordenamiento', 'a'),
  q('¿Qué es infraestructura como código?', 'Gestionar infra con archivos versionados (Terraform, etc.)', 'Escribir código solo en producción', 'Eliminar backups', 'a'),
  q('¿Qué es un pipeline de despliegue?', 'Secuencia automatizada de build, test y deploy', 'Un cable troncal de red', 'Un registro DNS inverso', 'a'),
];

const SET_05 = [
  q('¿Qué es un balanceador de carga?', 'Distribuye tráfico entre varios servidores', 'Comprime imágenes JPEG', 'Asigna IPs privadas', 'a'),
  q('¿Qué es un reverse proxy?', 'Intermediario que recibe peticiones y las reenvía a backends', 'Un antivirus de endpoint', 'Un switch de capa 1', 'a'),
  q('¿Qué es alta disponibilidad?', 'Diseño para minimizar tiempo de caída del servicio', 'Usar un solo servidor', 'Desactivar redundancia', 'a'),
  q('¿Qué es un CDN?', 'Red de servidores edge para entregar contenido cerca del usuario', 'Un protocolo de routing interno', 'Un IDE en la nube', 'a'),
  q('¿Qué es monitoreo de infraestructura?', 'Observar métricas, logs y alertas de sistemas', 'Borrar logs automáticamente', 'Deshabilitar métricas', 'a'),
];

const SET_06 = [
  q('¿Qué es GitOps?', 'Operar infra usando repos Git como fuente de verdad', 'Programar solo sin versionar', 'Un protocolo de capa física', 'a'),
  q('¿Qué es un secret en DevOps?', 'Credencial o clave gestionada de forma segura', 'Un commit sin mensaje', 'Un tipo de VLAN', 'a'),
  q('¿Qué es escalado horizontal?', 'Agregar más instancias para soportar carga', 'Aumentar solo CPU de un servidor', 'Reducir réplicas', 'a'),
  q('¿Qué es un health check?', 'Verificación de que un servicio responde correctamente', 'Un escaneo de malware offline', 'Un tipo de DNSSEC', 'a'),
  q('¿Qué es Infrastructure as a Service?', 'Nube que provee cómputo, red y almacenamiento virtualizados', 'Solo hosting de correo', 'Un framework frontend', 'a'),
];

export const REDES_INFRA_TEORIA = buildSets([SET_01, SET_02, SET_03, SET_04, SET_05, SET_06]);
