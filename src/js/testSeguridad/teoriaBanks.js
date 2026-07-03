import { normalizeQuestions } from '../../data/questions/normalize.js';

function q(question, a, b, c, answer) {
  return { question, options: { a, b, c }, answer };
}

function buildSets(groups) {
  return groups.map((group) => normalizeQuestions(group));
}

const SET_01 = [
  q('¿Qué es la seguridad informática?', 'Proteger confidencialidad, integridad y disponibilidad de la información', 'Solo instalar antivirus', 'Deshabilitar firewalls', 'a'),
  q('¿Qué es un ataque de phishing?', 'Suplantación para engañar y robar credenciales', 'Actualización de firmware', 'Backup incremental', 'a'),
  q('¿Qué es malware?', 'Software malicioso diseñado para dañar o infiltrarse', 'Un firewall de hardware', 'Un protocolo seguro', 'a'),
  q('¿Qué es ingeniería social?', 'Manipular personas para obtener información o acceso', 'Cifrar discos duros', 'Configurar VLANs', 'a'),
  q('¿Qué es autenticación?', 'Verificar la identidad de un usuario o sistema', 'Comprimir archivos', 'Asignar direcciones IP', 'a'),
];

const SET_02 = [
  q('¿Qué es autorización?', 'Determinar qué recursos puede usar una identidad autenticada', 'Crear copias de seguridad', 'Instalar drivers', 'a'),
  q('¿Qué es un firewall?', 'Controla tráfico permitido entre redes según reglas', 'Un tipo de base de datos', 'Un editor de texto', 'a'),
  q('¿Qué es cifrado simétrico?', 'Misma clave para cifrar y descifrar', 'Par de claves pública/privada distintas', 'Hash sin reversión', 'a'),
  q('¿Qué es cifrado asimétrico?', 'Usa par de claves pública y privada', 'Una sola clave compartida', 'Sin claves', 'a'),
  q('¿Qué es un hash criptográfico?', 'Función unidireccional que produce huella fija del dato', 'Algoritmo de compresión ZIP', 'Protocolo HTTP', 'a'),
];

const SET_03 = [
  q('¿Qué es XSS?', 'Inyección de scripts en páginas vistas por otros usuarios', 'Escaneo de puertos UDP', 'Backup en la nube', 'a'),
  q('¿Qué es SQL injection?', 'Insertar SQL malicioso en entradas de aplicación', 'Optimizar consultas legítimas', 'Indexar tablas', 'a'),
  q('¿Qué es principio de mínimo privilegio?', 'Dar solo permisos necesarios para cada rol', 'Admin total para todos', 'Deshabilitar logs', 'a'),
  q('¿Qué es MFA?', 'Autenticación con dos o más factores', 'Un solo password débil', 'Login sin verificación', 'a'),
  q('¿Qué es un CVE?', 'Identificador público de vulnerabilidad conocida', 'Certificado SSL', 'Tipo de firewall', 'a'),
];

const SET_04 = [
  q('¿Qué es ransomware?', 'Malware que cifra datos y exige rescate', 'Antivirus gratuito', 'Protocolo de correo', 'a'),
  q('¿Qué es un pentest?', 'Prueba de intrusión autorizada para encontrar fallas', 'Ataque real sin permiso', 'Despliegue de parches', 'a'),
  q('¿Qué es SIEM?', 'Correlaciona logs y eventos de seguridad', 'Switch de capa 3', 'Sistema de archivos', 'a'),
  q('¿Qué es hardening?', 'Endurecer sistemas reduciendo superficie de ataque', 'Abrir todos los puertos', 'Usar passwords por defecto', 'a'),
  q('¿Qué es zero trust?', 'No confiar por defecto; verificar siempre', 'Confiar en toda la red interna', 'Sin autenticación', 'a'),
];

const SET_05 = [
  q('¿Qué es DDoS?', 'Saturar un servicio con tráfico masivo malicioso', 'Backup distribuido', 'DNS round-robin legítimo', 'a'),
  q('¿Qué es certificado digital?', 'Vincula clave pública con identidad verificada', 'Un archivo de log', 'Un tipo de RAM', 'a'),
  q('¿Qué es HTTPS?', 'HTTP sobre TLS con canal cifrado', 'HTTP sin cifrado', 'FTP seguro', 'a'),
  q('¿Qué es política de contraseñas?', 'Reglas de complejidad, rotación y almacenamiento seguro', 'Usar la misma clave siempre', 'Publicar passwords en chat', 'a'),
  q('¿Qué es segmentación de red?', 'Aislar zonas para limitar movimiento lateral', 'Un solo flat network', 'Desactivar VLANs', 'a'),
];

const SET_06 = [
  q('¿Qué es respuesta a incidentes?', 'Proceso para detectar, contener y recuperar de un ataque', 'Ignorar alertas', 'Borrar evidencias', 'a'),
  q('¿Qué es OWASP Top 10?', 'Lista de riesgos críticos en aplicaciones web', 'Estándar de cableado', 'Protocolo BGP', 'a'),
  q('¿Qué es token de acceso?', 'Credencial temporal para APIs o sesiones', 'Un cable de red', 'Un disco SSD', 'a'),
  q('¿Qué es backup 3-2-1?', '3 copias, 2 medios, 1 offsite', 'Un solo backup local', 'Sin copias', 'a'),
  q('¿Qué es concienciación en seguridad?', 'Capacitar usuarios para reconocer amenazas', 'Ocultar políticas', 'Desactivar formación', 'a'),
];

export const SEGURIDAD_TEORIA = buildSets([SET_01, SET_02, SET_03, SET_04, SET_05, SET_06]);
