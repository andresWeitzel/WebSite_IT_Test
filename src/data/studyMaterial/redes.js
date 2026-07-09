/** Temas ampliados de Redes e Infraestructura. */
export const REDES_TOPICS = [
  {
    id: 'redes-osi-tcp',
    title: 'Modelo OSI, TCP/IP y capa de transporte',
    intro:
      'Las redes se entienden mejor en capas: cada nivel abstrae al inferior y ofrece servicios al superior. OSI es el modelo teórico de referencia; TCP/IP es el que realmente implementa Internet. Saber en qué capa ocurre un fallo (cable, IP, puerto, aplicación) acorta diagnósticos en soporte y operaciones.',
    subsections: [
      {
        title: 'Modelo OSI (7 capas)',
        entries: [
          {
            term: 'Capa 1 — Física',
            text: 'Transmite bits por el medio: cobre (UTP), fibra óptica, Wi‑Fi (radio). Define voltajes, conectores (RJ-45), velocidades y distancias. Problemas típicos: cable dañado, enchufe flojo, duplex incorrecto. Herramientas: tester de cable, OTDR en fibra.',
          },
          {
            term: 'Capa 2 — Enlace de datos',
            text: 'Tramas entre nodos en la misma red local. Ethernet usa direcciones MAC. Switches aprenden MAC y reenvían solo al puerto destino. VLANs segmentan broadcast domains. ARP resuelve IP → MAC en LAN. Spanning Tree evita loops en topologías redundantes.',
          },
          {
            term: 'Capa 3 — Red',
            text: 'Enrutamiento entre redes distintas usando direcciones IP. Routers consultan tablas de rutas (estáticas o dinámicas con OSPF, BGP). ICMP (ping, traceroute) diagnostica conectividad IP. Subredes y máscaras definen qué hosts comparten broadcast.',
          },
          {
            term: 'Capas 4 a 7 — Transporte, sesión, presentación, aplicación',
            text: 'Transporte (TCP/UDP) multiplexa con puertos. Sesión y presentación en OSI se integran en la práctica en la capa de aplicación TCP/IP. Aplicación: HTTP, DNS, SMTP, SSH — protocolos que el usuario o servicios consumen directamente.',
          },
          {
            term: 'Mnemotecnia y troubleshooting por capa',
            text: '“Please Do Not Throw Sausage Pizza Away” (Physical…Application). Si ping falla: capa 3+. Si ping OK pero puerto cerrado: firewall o servicio caído (4/7). Si solo un VLAN falla: revisar switch/trunk. Documentar en qué capa se aisló el problema acelera escalamiento.',
          },
        ],
      },
      {
        title: 'Stack TCP/IP (4 capas)',
        entries: [
          {
            term: 'Acceso a red',
            text: 'Equivalente a física + enlace OSI. Driver NIC, Wi‑Fi association, PPP en enlaces WAN. MTU (Maximum Transmission Unit) típico 1500 bytes Ethernet; fragmentación IP si paquetes más grandes cruzan redes con MTU menor.',
          },
          {
            term: 'Internet (IP)',
            text: 'IPv4 direcciones 32 bits (ej. 192.168.1.10); IPv6 128 bits (2001:db8::1). Sin conexión: cada paquete puede ir por ruta distinta. TTL evita loops infinitos. DHCP asigna IP dinámica; APIPA (169.254.x.x) si DHCP falla en Windows.',
          },
          {
            term: 'Transporte',
            text: 'TCP y UDP sobre IP. Puerto origen + destino identifican socket. Socket = IP + puerto + protocolo. Ephemeral ports (49152–65535) para conexiones salientes del cliente.',
          },
          {
            term: 'Aplicación',
            text: 'Protocolos de alto nivel mapeados a puertos bien conocidos. IANA registra 0–1023 sistema, 1024–49151 registrados. Un servidor escucha en 0.0.0.0:443 (todas las interfaces) o IP específica.',
          },
        ],
      },
      {
        title: 'TCP vs UDP en detalle',
        entries: [
          {
            term: 'TCP — confiable y orientado a conexión',
            text: 'Three-way handshake SYN, SYN-ACK, ACK establece sesión. Números de secuencia y ACK confirman recepción. Retransmisión si no hay ACK. Control de flujo (window) y congestión. Cierre con FIN. Usado en HTTP/HTTPS, SSH, SMTP, bases SQL remotas.',
          },
          {
            term: 'UDP — rápido sin garantías',
            text: 'Sin handshake ni reordenamiento. Ideal cuando pérdida ocasional es tolerable: DNS queries, VoIP, video streaming, juegos online, SNMP. Menor overhead de cabecera. Aplicación debe manejar pérdida si la necesita (QUIC combina UDP + lógica en userspace).',
          },
          {
            term: 'Puertos y servicios comunes',
            text: '20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 67/68 DHCP, 80 HTTP, 443 HTTPS, 3306 MySQL, 5432 PostgreSQL, 3389 RDP. netstat -ano / ss -tulpn listan listeners. Telnet/nc prueban puerto TCP; nmap escanea rangos (solo en redes autorizadas).',
          },
          {
            term: 'Firewalls y filtrado por capa',
            text: 'Firewall stateful inspecciona conexiones TCP establecidas. Reglas allow/deny por IP, puerto, protocolo. NGFW añade aplicación e IPS. Regla “deny all” al final. Documentar excepciones temporales con fecha de revisión.',
          },
        ],
      },
      {
        title: 'Direccionamiento IP y subredes',
        entries: [
          {
            term: 'IPv4 privado vs público',
            text: 'RFC1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 no enrutable en Internet. NAT traduce salida a IP pública. IP pública única globalmente en Internet. Doble NAT (ISP + router hogar) complica port forwarding y gaming.',
          },
          {
            term: 'Máscara y CIDR',
            text: '/24 = 255.255.255.0 = 254 hosts útiles. /26 = 62 hosts. Calculá red, broadcast y rango usable. VLSM permite subredes de distinto tamaño en una red corporativa. IPv6 suele usar /64 por subred LAN.',
          },
          {
            term: 'Gateway y DNS en el host',
            text: 'Default gateway: siguiente salto hacia fuera de la subred. Sin gateway correcto no hay Internet aunque LAN funcione. DNS primario/secundario resuelven nombres; si DNS falla, “hay red pero no abre páginas”. ipconfig /all (Windows) o ip a (Linux) muestran todo.',
          },
          {
            term: 'IPv6 essentials',
            text: 'Autoconfig SLAAC, DHCPv6 opcional. No NAT obligatorio (NAT64 en transición). Neighbor Discovery reemplaza ARP. Dual stack convive IPv4 e IPv6. Ping6, traceroute6 diagnostican. Firewalls deben filtrar ICMPv6 necesario para ND.',
          },
        ],
      },
      {
        title: 'Herramientas de diagnóstico',
        entries: [
          {
            term: 'ping',
            text: 'ICMP Echo Request/Reply. Mide latencia y pérdida. Fallo total: host down, firewall bloquea ICMP o ruta ausente. ping -t continuo Windows; ping -c 4 Linux cuenta paquetes.',
          },
          {
            term: 'traceroute / tracert',
            text: 'Muestra saltos hasta destino incrementando TTL. Identifica dónde se corta la ruta. Asteriscos pueden ser routers que no responden ICMP pero reenvían. pathping combina ping y traceroute en Windows.',
          },
          {
            term: 'arp -a y tabla MAC del switch',
            text: 'ARP cache local IP→MAC. Si ARP falla en LAN, problema capa 2 o VLAN. show mac address-table en Cisco lista qué MAC está en qué puerto.',
          },
          {
            term: 'Wireshark',
            text: 'Captura paquetes en modo promiscuo. Filtra http, tcp.port==443, dns. Útil para ver handshakes TLS, retransmisiones TCP, DNS NXDOMAIN. Capturar solo con autorización en redes corporativas.',
          },
        ],
      },
    ],
  },
  {
    id: 'redes-dns',
    title: 'DNS, DHCP, NAT y servicios de red',
    intro:
      'Más allá de “conectar cables”, una red operativa necesita asignar direcciones automáticamente, resolver nombres legibles y permitir salida segura a Internet. Estos servicios son el día a día de administradores de sistemas y soporte de segundo nivel.',
    subsections: [
      {
        title: 'DNS en profundidad',
        entries: [
          {
            term: 'Jerarquía del DNS',
            text: 'Root (.), TLD (.com, .ar), dominio autoritativo (empresa.com). Resolver recursivo (ISP, 8.8.8.8, 1.1.1.1) consulta en cadena y cachea respuestas según TTL. Autoritative server tiene la “verdad” del dominio.',
          },
          {
            term: 'Tipos de registros',
            text: 'A: nombre → IPv4. AAAA: → IPv6. CNAME: alias a otro nombre (no en apex root usualmente). MX: servidores de correo con prioridad. TXT: SPF, DKIM, verificación dominio. NS: servidores autoritativos. PTR: reverse DNS IP → nombre.',
          },
          {
            term: 'TTL y propagación',
            text: 'TTL en segundos define cuánto cachean resolvers. Bajar TTL antes de migrar IP reduce downtime percibido. Cambios pueden tardar minutos u horas según caches intermedios. dig +trace muestra cadena completa.',
          },
          {
            term: 'Problemas frecuentes',
            text: 'NXDOMAIN: nombre no existe. SERVFAIL: error servidor. Respuesta stale por cache. Split-horizon DNS: misma URL resuelve distinto dentro/fuera VPN. nslookup, dig, host diagnostican desde cliente.',
          },
        ],
      },
      {
        title: 'DHCP',
        entries: [
          {
            term: 'Proceso DORA',
            text: 'Discover (broadcast), Offer, Request, Acknowledge. Cliente obtiene IP, máscara, gateway, DNS, lease time. Reservas por MAC dan IP fija sin configurar host manualmente. Scope: rango de pool.',
          },
          {
            term: 'Relay agent',
            text: 'DHCP broadcast no cruza routers. ip helper-address / DHCP relay reenvía a servidor central en otra subred. Centraliza administración en empresas multi-sede.',
          },
          {
            term: 'Conflictos y agotamiento',
            text: 'IP duplicada: otro dispositivo con IP estática dentro del pool. Scope 100% lleno: nuevos dispositivos no obtienen IP. Monitorear uso y ampliar scope o acortar lease.',
          },
          {
            term: 'Opciones avanzadas',
            text: 'Option 43 Wi‑Fi controllers, Option 66 PXE boot, Option 150 VoIP. Documentar opciones custom en infraestructura legacy.',
          },
        ],
      },
      {
        title: 'NAT, PAT y conectividad remota',
        entries: [
          {
            term: 'SNAT y DNAT',
            text: 'Source NAT: LAN privada sale con IP pública del router. Destination NAT (port forward): tráfico entrante a IP:puerto público redirige a servidor interno. Hairpin NAT permite acceder a IP pública desde dentro de la misma LAN (no todos los routers lo soportan).',
          },
          {
            term: 'PAT (NAT overload)',
            text: 'Muchas IPs privadas comparten una pública diferenciando por puerto origen traducido. Tabla de sesiones en router. Límite de conexiones concurrentes en NAT sobrecargado.',
          },
          {
            term: 'VPN site-to-site y remote access',
            text: 'Site-to-site une sedes con túnel IPsec/WireGuard. Remote access: usuario con cliente VPN obtiene IP corporativa y accede recursos internos. Split tunnel: solo tráfico corporativo por túnel; full tunnel: todo por VPN.',
          },
          {
            term: 'Proxy y reverse proxy',
            text: 'Forward proxy filtra salida usuarios (Squid). Reverse proxy (nginx, HAProxy) termina TLS y balancea a backends. WAF en reverse proxy filtra ataques web.',
          },
        ],
      },
      {
        title: 'Wi‑Fi y switching',
        entries: [
          {
            term: 'Estándares 802.11',
            text: 'Wi‑Fi 5 (802.11ac), Wi‑Fi 6 (802.11ax) mejor densidad y eficiencia. Bandas 2.4 GHz (alcance, interferencia) y 5/6 GHz (velocidad). SSID, WPA2/WPA3-Enterprise con 802.1X y RADIUS.',
          },
          {
            term: 'VLAN y trunk',
            text: '802.1Q tag en trunks switch-switch o switch-AP. Access port pertenece a una VLAN. Voice VLAN separa telefonía IP. Native VLAN en trunk debe coincidir en ambos extremos.',
          },
          {
            term: 'PoE',
            text: 'Power over Ethernet alimenta APs y cámaras por UTP. Estándares 802.3af/at/bt con wattaje distinto. Switch debe soportar PoE total budget para todos los dispositivos.',
          },
        ],
      },
      {
        title: 'Alta disponibilidad y monitoreo',
        entries: [
          {
            term: 'Load balancing',
            text: 'Distribuye tráfico entre servidores: round robin, least connections, health checks. Active/passive failover con VIP que flota al nodo sano. Keepalived + HAProxy patrón común.',
          },
          {
            term: 'SNMP y syslog',
            text: 'SNMP consulta métricas de switches/routers (CPU, interfaces). Traps alertan eventos. Syslog centraliza logs de dispositivos en SIEM. NetFlow/sFlow analiza patrones de tráfico.',
          },
          {
            term: 'Documentación de red',
            text: 'Diagramas L2/L3, tabla de IPAM, inventario de VLANs, runbooks para cambios. Cambio sin documentación es deuda operativa.',
          },
        ],
      },
    ],
  },
  {
    id: 'redes-docker',
    title: 'Virtualización, Docker y contenedores',
    intro:
      'Los contenedores empaquetan aplicaciones con sus dependencias de forma reproducible. Docker democratizó su uso; Kubernetes escala en orquestación. Entender imagen vs contenedor, redes Docker y volúmenes es base para DevOps moderno y despliegues cloud.',
    subsections: [
      {
        title: 'VM vs contenedor',
        entries: [
          {
            term: 'Hipervisor y VM',
            text: 'VM simula hardware completo con SO invitado. Aislamiento fuerte, arranque lento, más RAM/CPU. Tipo 1 (ESXi, Hyper-V bare metal) vs tipo 2 (VirtualBox en desktop). Snapshots permiten rollback pero no reemplazan backup.',
          },
          {
            term: 'Contenedor Linux',
            text: 'Comparte kernel del host. namespaces aíslan PID, red, mount; cgroups limitan CPU/RAM. Arranque en segundos, imagen de MB vs GB de VM. No corre kernel Windows nativo en Linux (contenedores Windows en host Windows).',
          },
          {
            term: 'Cuándo usar cada uno',
            text: 'VM: cargas legacy, kernels distintos, compliance estricto. Contenedor: microservicios, CI, escalado horizontal stateless. A menudo conviven: K8s sobre VMs en cloud.',
          },
        ],
      },
      {
        title: 'Docker core',
        entries: [
          {
            term: 'Imagen y capas',
            text: 'Imagen es inmutable, en capas overlay FS. docker pull descarga del registry (Docker Hub, ECR, GHCR). docker run crea contenedor writable encima. Union mount: capas compartidas entre contenedores ahorran disco.',
          },
          {
            term: 'Dockerfile',
            text: 'FROM node:20-alpine base. WORKDIR /app. COPY package*.json ./. RUN npm ci. COPY . . CMD ["node","server.js"]. Multi-stage build: builder compila, imagen final solo runtime. .dockerignore excluye node_modules y .git.',
          },
          {
            term: 'Comandos esenciales',
            text: 'docker ps -a lista contenedores. docker logs -f sigue stdout. docker exec -it bash shell dentro. docker stop envía SIGTERM luego SIGKILL. docker system prune limpia recursos huérfanos.',
          },
          {
            term: 'Registry y tags',
            text: 'Tag :latest es mala práctica en prod; usar semver o git SHA. Escanear imágenes con Trivy/Snyk. Firmar imágenes con cosign en supply chain security.',
          },
        ],
      },
      {
        title: 'Redes y volúmenes Docker',
        entries: [
          {
            term: 'Modos de red',
            text: 'bridge (default): red privada docker0, publish -p 8080:80. host: comparte stack de red del host. none: sin red. overlay: multi-host en Swarm/K8s CNI.',
          },
          {
            term: 'DNS interno',
            text: 'Contenedores en misma user-defined network resuelven por nombre de servicio. docker compose crea red automática. Links legacy reemplazados por network aliases.',
          },
          {
            term: 'Volúmenes',
            text: 'bind mount: carpeta host → contenedor (dev). named volume: gestionado por Docker (prod DB). tmpfs en RAM. Backup de volúmenes: docker run --volumes-from o snapshots storage driver.',
          },
          {
            term: 'Variables y secretos',
            text: 'env en compose o -e. No hardcodear passwords en Dockerfile. Docker secrets (Swarm) o vault externo en K8s. .env en gitignore.',
          },
        ],
      },
      {
        title: 'Docker Compose',
        entries: [
          {
            term: 'Orquestación local',
            text: 'docker-compose.yml define services, networks, volumes. docker compose up -d levanta stack. depends_on ordena arranque (no espera health). profiles activan servicios opcionales.',
          },
          {
            term: 'Ejemplo stack web',
            text: 'app + postgres + redis. app expone 3000. postgres volumen persistente. healthcheck en DB antes de que app acepte tráfico (script wait-for-it o health condition compose v2).',
          },
          {
            term: 'Override y entornos',
            text: 'docker-compose.override.yml para dev (bind mounts, debug). compose.prod.yml sin puertos DB expuestos. -f múltiples archivos combinan configuración.',
          },
        ],
      },
      {
        title: 'Hacia producción',
        entries: [
          {
            term: 'Kubernetes intro',
            text: 'Pod: uno o más contenedores compartiendo red. Deployment declara réplicas. Service ClusterIP/LoadBalancer expone. Ingress termina HTTP. kubectl apply -f manifiestos YAML.',
          },
          {
            term: 'Recursos y límites',
            text: 'requests/limits CPU y memory en K8s evitan noisy neighbor. OOMKilled si excede memory limit. Horizontal Pod Autoscaler escala por CPU o métricas custom.',
          },
          {
            term: 'Observabilidad',
            text: 'Logs agregados (Loki, ELK). Métricas Prometheus + Grafana. Tracing OpenTelemetry entre microservicios. Health endpoints /healthz y /readyz para probes.',
          },
        ],
      },
    ],
  },
  {
    id: 'redes-cicd',
    title: 'CI/CD, automatización e infraestructura como código',
    intro:
      'Integración y despliegue continuos automatizan build, test y release. Infraestructura como código versiona servidores, redes y permisos como el código de aplicación. Juntos reducen errores manuales y acortan time-to-market.',
    subsections: [
      {
        title: 'CI — Integración continua',
        entries: [
          {
            term: 'Objetivo del CI',
            text: 'Cada push o PR dispara pipeline que compila, lintea y testea. Falla rápido antes de merge. Main siempre deployable es la meta. Artefactos (binarios, imágenes Docker) se generan una vez y promueven entre entornos.',
          },
          {
            term: 'Etapas típicas',
            text: 'Checkout → install deps → lint → unit test → build → integration test → publicar artefacto. Cache de node_modules/.npm acelera. Matriz de jobs prueba varias versiones Node/OS.',
          },
          {
            term: 'GitHub Actions ejemplo',
            text: 'Workflow en .github/workflows/ci.yml. on: [push, pull_request]. jobs.build.runs-on ubuntu-latest. steps: uses actions/checkout, setup-node, npm ci, npm test. Secrets en repo settings, nunca en YAML plano.',
          },
          {
            term: 'Calidad de pipeline',
            text: 'Pipeline debe ser más rápido que esperar humano. Flaky tests se arreglan o quitan. Required checks bloquean merge. Notificaciones Slack/email en rojo.',
          },
        ],
      },
      {
        title: 'CD — Entrega y despliegue',
        entries: [
          {
            term: 'Continuous Delivery vs Deployment',
            text: 'Delivery: siempre listo para deploy manual aprobado. Deployment: cada green main va a prod automáticamente. Feature flags mitigan riesgo en deployment continuo.',
          },
          {
            term: 'Estrategias de deploy',
            text: 'Rolling update: reemplazo gradual instancias. Blue-green: dos entornos, switch tráfico. Canary: % pequeño usuarios primero. Rollback automático si métricas degradan.',
          },
          {
            term: 'Entornos',
            text: 'dev → staging (paridad prod) → production. Config por env vars, no builds distintos. Staging con datos anonimizados. Promotion manual gate en empresas reguladas.',
          },
          {
            term: 'Artefactos inmutables',
            text: 'Misma imagen Docker taggeada sha-abc pasa por todos los entornos. No rebuild por entorno. SBOM lista dependencias para auditoría.',
          },
        ],
      },
      {
        title: 'Infraestructura como código (IaC)',
        entries: [
          {
            term: 'Terraform',
            text: 'Declarativo HCL: provider aws, resource aws_instance. terraform plan preview; apply ejecuta. State file trackea recursos reales — guardar remoto en S3 + lock DynamoDB en equipo.',
          },
          {
            term: 'Ansible',
            text: 'Imperativo declarativo por playbooks YAML. SSH a servidores, instala paquetes, templates configs. Idempotente: segunda corrida no cambia si ya está OK. Inventario por grupos (web, db).',
          },
          {
            term: 'CloudFormation / Bicep',
            text: 'Nativos AWS y Azure. Stack updates atómicos. Drift detection si alguien cambió manualmente consola. Export outputs entre stacks.',
          },
          {
            term: 'Principios IaC',
            text: 'Todo en Git, PR para cambios infra. Modules reutilizables. Separar state por entorno. Never edit producción a mano sin backport al código.',
          },
        ],
      },
      {
        title: 'Config management y secretos',
        entries: [
          {
            term: '12-factor app',
            text: 'Config en entorno, no en repo. Logs como streams. Procesos stateless. Paridad dev/prod. Estos principios guían apps cloud-native.',
          },
          {
            term: 'Vault y secret managers',
            text: 'HashiCorp Vault, AWS Secrets Manager, Azure Key Vault rotan credenciales. CI obtiene secrets en runtime. Evitar .env commiteado — usar git-secrets scan.',
          },
          {
            term: 'GitOps',
            text: 'Repo Git es fuente de verdad; operador (Argo CD, Flux) reconcilia cluster K8s con manifests. Rollback = git revert. Audit trail natural.',
          },
        ],
      },
      {
        title: 'Monitoreo post-deploy',
        entries: [
          {
            term: 'SLI, SLO, SLA',
            text: 'SLI: métrica (latencia p99). SLO: objetivo (99.9% requests < 300ms). SLA: contrato con penalidad. Error budget permite innovar sin romper SLO.',
          },
          {
            term: 'Alerting sensato',
            text: 'Alertar síntomas usuario (checkout falla), no solo CPU alta. Runbooks linkeados en alerta. On-call rotation y postmortems blameless.',
          },
          {
            term: 'Chaos engineering',
            text: 'Experiments controlados (matar pod, latencia) validan resiliencia. Empezar en staging. Game days en equipo.',
          },
        ],
      },
    ],
  },
];
