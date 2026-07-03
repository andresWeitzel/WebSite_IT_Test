import { createStandardVariants, getStorageKey, getAllTestKeys } from '../test/variantPresets.js';
import { loadPracticaBank } from '../../data/questions/loadBank.js';
import practicaBank from '../../data/questions/redes-infra/practica.json';
import { REDES_INFRA_TEORIA } from './teoriaBanks.js';

const practica = loadPracticaBank(practicaBank);

export const REDES_INFRA_LEVELS = [
  {
    id: 'basico',
    title: 'Básico',
    badge: '4 modalidades',
    description: 'Conceptos de red, modelo OSI y conectividad LAN.',
    topics: [
      { title: 'Fundamentos', text: 'Redes, IP, switches y routers.' },
      { title: 'Protocolos', text: 'TCP, UDP, HTTP y DNS básico.' },
      { title: 'Servicios', text: 'DHCP, NAT y direccionamiento.' },
      { title: 'Práctica', text: 'Comandos y lectura de configuración.' },
    ],
    variants: createStandardVariants(REDES_INFRA_TEORIA, practica, 'redes-infra', {
      rapido: 'Repaso de networking esencial.',
      codigo: 'Comandos, DNS y Docker introductorio.',
    }),
  },
  {
    id: 'medio',
    title: 'Medio',
    badge: '4 modalidades',
    description: 'VLANs, contenedores, CI/CD y orquestación.',
    topics: [
      { title: 'Redes avanzadas', text: 'VLAN, latencia, ancho de banda y CDN.' },
      { title: 'DevOps', text: 'Pipelines, IaC y despliegue continuo.' },
      { title: 'Contenedores', text: 'Docker, Kubernetes y health checks.' },
      { title: 'Práctica', text: 'Manifiestos, systemd y kubectl.' },
    ],
    variants: createStandardVariants(REDES_INFRA_TEORIA, practica, 'redes-infra', {
      clasico: 'DevOps intermedio y redes corporativas.',
      extendido: 'Recorrido completo redes + infraestructura.',
      codigo: 'Terraform, iptables y diagnóstico.',
    }),
  },
  {
    id: 'avanzado',
    title: 'Avanzado',
    badge: '4 modalidades',
    description: 'Alta disponibilidad, GitOps, cloud y observabilidad.',
    topics: [
      { title: 'Arquitectura', text: 'Balanceo, reverse proxy y HA.' },
      { title: 'Cloud', text: 'IaaS, escalado y secretos.' },
      { title: 'Operaciones', text: 'Monitoreo, alertas y GitOps.' },
      { title: 'Práctica', text: 'Escenarios de producción.' },
    ],
    variants: createStandardVariants(REDES_INFRA_TEORIA, practica, 'redes-infra', {
      rapido: 'Síntesis de arquitectura y operaciones.',
      extendido: 'Cloud, SRE y redes a escala.',
      codigo: 'Infra real: K8s, redes y automatización.',
    }),
  },
];

export const REDES_INFRA_INFO = `Tests de redes e infraestructura con cuatro modalidades por nivel. Incluye protocolos, DevOps, contenedores y lectura práctica de comandos y configuraciones.`;

export { getStorageKey, getAllTestKeys };
