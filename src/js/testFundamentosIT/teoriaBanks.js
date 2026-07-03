import { normalizeQuestions } from '../../data/questions/normalize.js';

function q(question, a, b, c, answer) {
  return { question, options: { a, b, c }, answer };
}

function buildSets(groups) {
  return groups.map((group) => normalizeQuestions(group));
}

const SET_01 = [
  q('¿Qué es un sistema operativo?', 'Software que gestiona hardware y recursos para aplicaciones', 'Un navegador web', 'Un cable de red', 'a'),
  q('¿Qué es RAM?', 'Memoria volátil de acceso rápido para programas en ejecución', 'Almacenamiento permanente', 'Un protocolo TCP', 'a'),
  q('¿Qué es CPU?', 'Unidad que ejecuta instrucciones de programas', 'Monitor de pantalla', 'Router Wi-Fi', 'a'),
  q('¿Qué es disco SSD?', 'Almacenamiento flash sin partes móviles', 'Memoria de video solamente', 'Fuente de poder', 'a'),
  q('¿Qué es periférico?', 'Dispositivo externo conectado al equipo', 'El núcleo del procesador', 'Un firewall', 'a'),
];

const SET_02 = [
  q('¿Qué es BIOS/UEFI?', 'Firmware de arranque del hardware', 'Antivirus integrado', 'Sistema de archivos', 'a'),
  q('¿Qué es partición de disco?', 'División lógica del almacenamiento', 'Un tipo de malware', 'Puerto HTTP', 'a'),
  q('¿Qué es sistema de archivos?', 'Organiza cómo se guardan datos en disco', 'Un editor de video', 'Cable HDMI', 'a'),
  q('¿Qué es driver?', 'Software que permite al SO comunicarse con hardware', 'Un virus', 'Un dominio web', 'a'),
  q('¿Qué es virtualización de escritorio?', 'Ejecutar SO invitado sobre hipervisor', 'Aumentar brillo de pantalla', 'Formatear solo la RAM', 'a'),
];

const SET_03 = [
  q('¿Qué es Active Directory?', 'Servicio de directorio de Microsoft para identidades', 'Antivirus de red', 'Lenguaje de programación', 'a'),
  q('¿Qué es ticket de soporte IT?', 'Registro de solicitud de ayuda técnica', 'Certificado SSL', 'IP privada', 'a'),
  q('¿Qué es imagen de sistema?', 'Copia clonable de SO y configuración', 'Fotografía del monitor', 'Log de firewall', 'a'),
  q('¿Qué es GPO?', 'Política de grupo para configurar equipos y usuarios', 'Protocolo de correo', 'Tipo de SSD', 'a'),
  q('¿Qué es inventario de activos IT?', 'Registro de hardware y software de la organización', 'Lista de contraseñas', 'Tabla DNS pública', 'a'),
];

const SET_04 = [
  q('¿Qué es SLA en soporte?', 'Acuerdo de nivel de servicio con tiempos de respuesta', 'Tipo de cable UTP', 'Algoritmo de búsqueda', 'a'),
  q('¿Qué es troubleshooting?', 'Diagnóstico sistemático de fallas', 'Instalar juegos', 'Deshabilitar updates', 'a'),
  q('¿Qué es remote desktop?', 'Acceso gráfico remoto a un equipo', 'Copia de seguridad offline', 'Switch de capa 2', 'a'),
  q('¿Qué es impresora compartida en red?', 'Dispositivo accesible por varios hosts', 'Solo USB local', 'Un servidor DNS', 'a'),
  q('¿Qué es UPS/SAI?', 'Suministro ininterrumpido ante cortes eléctricos', 'Antivirus', 'Proxy web', 'a'),
];

const SET_05 = [
  q('¿Qué es cloud computing para usuarios?', 'Servicios IT consumidos por Internet bajo demanda', 'Solo almacenar en USB', 'Programar en ensamblador', 'a'),
  q('¿Qué es Microsoft 365 en empresas?', 'Suite de productividad y correo en la nube', 'Sistema operativo de router', 'Base de datos NoSQL', 'a'),
  q('¿Qué es ticketing ITIL?', 'Marco de buenas prácticas para gestión de servicios', 'Protocolo FTP', 'Tipo de RAM DDR2', 'a'),
  q('¿Qué es onboarding de usuario?', 'Alta y provisión de accesos a nuevo empleado', 'Borrar cuenta sin aviso', 'Desinstalar SO', 'a'),
  q('¿Qué es offboarding?', 'Revocar accesos al salir un usuario', 'Agregar permisos admin', 'Publicar passwords', 'a'),
];

const SET_06 = [
  q('¿Qué es BYOD?', 'Política de traer dispositivos personales al trabajo', 'Backup obligatorio en tape', 'Red sin Wi-Fi', 'a'),
  q('¿Qué es actualización de parches?', 'Corregir vulnerabilidades del software', 'Eliminar antivirus', 'Formatear todos los discos', 'a'),
  q('¿Qué es help desk?', 'Mesa de ayuda para incidencias de usuarios', 'Centro de datos', 'Proveedor de fibra', 'a'),
  q('¿Qué es base de conocimiento IT?', 'Documentación de soluciones frecuentes', 'Foro público sin moderar', 'Lista de contraseñas', 'a'),
  q('¿Qué es ergonomía en puestos IT?', 'Diseño saludable de espacio y equipos de trabajo', 'Solo usar pantallas pequeñas', 'Trabajar sin descansos', 'a'),
];

export const FUNDAMENTOS_IT_TEORIA = buildSets([SET_01, SET_02, SET_03, SET_04, SET_05, SET_06]);
