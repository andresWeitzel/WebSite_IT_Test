import { createStandardVariants, getStorageKey, getAllTestKeys } from '../test/variantPresets.js';
import { loadPracticaBank } from '../../data/questions/loadBank.js';
import practicaBank from '../../data/questions/seguridad/practica.json';
import { SEGURIDAD_TEORIA } from './teoriaBanks.js';

const practica = loadPracticaBank(practicaBank);

export const SEGURIDAD_LEVELS = [
  {
    id: 'basico',
    title: 'Básico',
    badge: '4 modalidades',
    description: 'Conceptos de ciberseguridad, amenazas y controles básicos.',
    topics: [
      { title: 'Fundamentos', text: 'CIA, malware y phishing.' },
      { title: 'Identidad', text: 'Autenticación y autorización.' },
      { title: 'Controles', text: 'Firewall y cifrado introductorio.' },
      { title: 'Práctica', text: 'Logs y señales de ataque.' },
    ],
    variants: createStandardVariants(SEGURIDAD_TEORIA, practica, 'seguridad', {
      rapido: 'Amenazas comunes y buenas prácticas.',
      codigo: 'Análisis de logs y headers HTTP.',
    }),
  },
  {
    id: 'medio',
    title: 'Medio',
    badge: '4 modalidades',
    description: 'Vulnerabilidades web, MFA y hardening.',
    topics: [
      { title: 'Aplicaciones', text: 'XSS, SQLi y OWASP.' },
      { title: 'Criptografía', text: 'Hash, simétrico y asimétrico.' },
      { title: 'Operaciones', text: 'CVE, pentest y SIEM.' },
      { title: 'Práctica', text: 'CSP, nmap y código vulnerable.' },
    ],
    variants: createStandardVariants(SEGURIDAD_TEORIA, practica, 'seguridad', {
      clasico: 'Defensa en profundidad intermedia.',
      extendido: 'Seguridad ofensiva y defensiva combinada.',
      codigo: 'Escenarios de explotación y mitigación.',
    }),
  },
  {
    id: 'avanzado',
    title: 'Avanzado',
    badge: '4 modalidades',
    description: 'Zero trust, incident response y arquitectura segura.',
    topics: [
      { title: 'Arquitectura', text: 'Zero trust y segmentación.' },
      { title: 'Ataques', text: 'DDoS, ransomware y respuesta.' },
      { title: 'Gobernanza', text: 'Políticas, backups y concienciación.' },
      { title: 'Práctica', text: 'Playbooks y análisis forense básico.' },
    ],
    variants: createStandardVariants(SEGURIDAD_TEORIA, practica, 'seguridad', {
      rapido: 'Síntesis de operaciones de seguridad.',
      extendido: 'IR completo y madurez de seguridad.',
      codigo: 'Casos reales de respuesta a incidentes.',
    }),
  },
];

export const SEGURIDAD_INFO = `Cuatro modalidades por nivel para evaluar conocimientos de ciberseguridad, desde conceptos hasta respuesta a incidentes y lectura práctica.`;

export { getStorageKey, getAllTestKeys };
