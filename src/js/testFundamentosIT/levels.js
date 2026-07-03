import { createStandardVariants, getStorageKey, getAllTestKeys } from '../test/variantPresets.js';
import { loadPracticaBank } from '../../data/questions/loadBank.js';
import practicaBank from '../../data/questions/fundamentos-it/practica.json';
import { FUNDAMENTOS_IT_TEORIA } from './teoriaBanks.js';

const practica = loadPracticaBank(practicaBank);

export const FUNDAMENTOS_IT_LEVELS = [
  {
    id: 'basico',
    title: 'Básico',
    badge: '4 modalidades',
    description: 'Hardware, sistema operativo y componentes del puesto de trabajo.',
    topics: [
      { title: 'Hardware', text: 'CPU, RAM, disco y periféricos.' },
      { title: 'Software', text: 'SO, drivers y archivos.' },
      { title: 'Usuario', text: 'Escritorio, periféricos y backups.' },
      { title: 'Práctica', text: 'Comandos Windows básicos.' },
    ],
    variants: createStandardVariants(FUNDAMENTOS_IT_TEORIA, practica, 'fundamentos-it', {
      rapido: 'Conceptos de soporte nivel 1.',
      codigo: 'CMD, PowerShell y diagnóstico.',
    }),
  },
  {
    id: 'medio',
    title: 'Medio',
    badge: '4 modalidades',
    description: 'Active Directory, políticas, inventario y soporte remoto.',
    topics: [
      { title: 'Empresa', text: 'AD, GPO e inventario de activos.' },
      { title: 'Soporte', text: 'Tickets, SLA y troubleshooting.' },
      { title: 'Servicios', text: 'Impresoras, UPS y escritorio remoto.' },
      { title: 'Práctica', text: 'PowerShell y eventos de Windows.' },
    ],
    variants: createStandardVariants(FUNDAMENTOS_IT_TEORIA, practica, 'fundamentos-it', {
      clasico: 'Operaciones IT de mesa de ayuda.',
      extendido: 'Ciclo de vida del usuario y activos.',
      codigo: 'Escenarios de soporte corporativo.',
    }),
  },
  {
    id: 'avanzado',
    title: 'Avanzado',
    badge: '4 modalidades',
    description: 'ITIL, cloud de usuario, onboarding y gobernanza.',
    topics: [
      { title: 'Servicios', text: 'ITIL, help desk y base de conocimiento.' },
      { title: 'Identidad', text: 'Onboarding, offboarding y BYOD.' },
      { title: 'Productividad', text: 'M365, parches y ergonomía.' },
      { title: 'Práctica', text: 'Procedimientos y runbooks.' },
    ],
    variants: createStandardVariants(FUNDAMENTOS_IT_TEORIA, practica, 'fundamentos-it', {
      rapido: 'Gestión de servicios y políticas.',
      extendido: 'Operaciones IT maduras en organización.',
      codigo: 'Flujos de soporte y recuperación.',
    }),
  },
];

export const FUNDAMENTOS_IT_INFO = `Tests de fundamentos IT y soporte técnico: hardware, Windows, Active Directory, ITIL y lectura práctica de comandos y procedimientos.`;

export { getStorageKey, getAllTestKeys };
