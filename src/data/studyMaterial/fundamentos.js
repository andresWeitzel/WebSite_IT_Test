/** Temas ampliados de Fundamentos IT. */
export const FUNDAMENTOS_TOPICS = [
  {
    id: 'fund-hardware',
    title: 'Hardware, componentes y diagnóstico físico',
    intro:
      'Todo software corre sobre hardware físico. Entender CPU, memoria, almacenamiento, buses y periféricos permite diagnosticar lentitud, pantallas azules, equipos que no encienden y cuellos de botella antes de escalar a especialistas. El técnico de primera línea combina observación física con herramientas del sistema operativo.',
    subsections: [
      {
        title: 'Componentes internos del PC',
        entries: [
          {
            term: 'CPU (procesador)',
            text: 'Ejecuta instrucciones en núcleos y threads. GHz no es todo: arquitectura, cache L1/L2/L3 y generación importan. Intel Core / AMD Ryzen en desktop; Xeon/EPYC en servidores. Thermal throttling reduce frecuencia si sobrecalienta — revisar pasta térmica y ventiladores. Task Manager muestra uso por núcleo.',
          },
          {
            term: 'RAM (memoria)',
            text: 'Volátil: se pierde al apagar. DDR4/DDR5 con velocidad MHz y latencia CAS. Dual channel requiere pares en slots correctos (consultar manual placa). 8 GB mínimo office; 16+ desarrollo/VMs. Memtest86+ detecta módulos defectuosos. Page file/swap compensa RAM insuficiente pero degrada rendimiento.',
          },
          {
            term: 'Placa madre y chipset',
            text: 'Interconecta CPU, RAM, expansion slots. Chipset define USB, SATA, PCIe lanes. BIOS/UEFI firmware inicializa hardware. Capacitores hinchados señal envejecimiento. Form factors: ATX, micro-ATX, ITX.',
          },
          {
            term: 'GPU',
            text: 'Procesamiento gráfico y cómputo paralelo (CUDA). Integrada en CPU vs dedicada PCIe. Drivers actualizados críticos gaming/CAD. Artefactos pantalla o TDR reset pueden indicar GPU fallando o PSU insuficiente.',
          },
        ],
      },
      {
        title: 'Almacenamiento',
        entries: [
          {
            term: 'HDD vs SSD vs NVMe',
            text: 'HDD discos magnéticos: barato por TB, lento random I/O, sensible golpes. SSD SATA ~500 MB/s. NVMe M.2 PCIe 3/4/5 varios GB/s. OS y apps en SSD; archivos bulk en HDD. SMART status predice fallos (reallocated sectors).',
          },
          {
            term: 'Particiones y filesystem',
            text: 'Windows NTFS, Linux ext4/xfs, macOS APFS. GPT reemplaza MBR en discos >2 TB. EFI System Partition boot UEFI. Clonar disco con Clonezilla al migrar HDD→SSD.',
          },
          {
            term: 'RAID (servidor/workstation)',
            text: 'RAID 0 striping sin redundancia. RAID 1 mirror. RAID 5/6 parity tolera disco fallido. RAID 10 combina mirror+stripe. Hardware RAID controller con batería cache vs software RAID OS.',
          },
          {
            term: 'Externos y NAS',
            text: 'USB 3.x, Thunderbolt velocidades. NAS en red SMB/NFS para backups compartidos. 3-2-1 backup rule aplica también aquí.',
          },
        ],
      },
      {
        title: 'Energía, refrigeración y POST',
        entries: [
          {
            term: 'Fuente de alimentación (PSU)',
            text: 'Wattage suficiente para CPU+GPU picos. 80 Plus eficiencia. Cables modulares facilitan airflow. PSU fallando causa reinicios aleatorios bajo carga — probar otra fuente.',
          },
          {
            term: 'Refrigeración',
            text: 'Air cooler vs AIO líquida. Flujo positivo/negativo polvo. Temperaturas CPU <85°C bajo load típico. Polvo acumulado = throttle. Servidores datacenter HVAC dedicado.',
          },
          {
            term: 'POST y códigos error',
            text: 'Power On Self Test al encender. Beeps o LEDs debug placa indican RAM/GPU no detectada. Sin video: probar un RAM stick, GPU integrada, reset CMOS. Laptop: desconectar batería 30s.',
          },
          {
            term: 'UEFI vs BIOS legacy',
            text: 'UEFI GUI, Secure Boot, GPT, red PXE boot. Legacy BIOS CSM para SO antiguos. Boot order USB first para instalación o recovery.',
          },
        ],
      },
      {
        title: 'Periféricos y conectividad física',
        entries: [
          {
            term: 'Puertos y buses',
            text: 'USB-A/C, HDMI, DisplayPort, Ethernet RJ-45, audio 3.5mm. USB-C puede ser solo data o DisplayPort alt mode — no todos cables iguales. Docking station drivers Thunderbolt.',
          },
          {
            term: 'Drivers',
            text: 'Software traduce OS ↔ hardware. Obtener de fabricante (Dell SupportAssist, Lenovo Vantage) no sitios terceros sospechosos. Driver Store Windows; pnputil admin. Firmas WHQL.',
          },
          {
            term: 'Impresoras y multifunción',
            text: 'USB vs red IP. Cola impresión servidor vs local. PCL vs PostScript drivers. Atasco papel, rodillos desgastados, tóner OEM vs compatible. Print Spooler restart servicio común fix.',
          },
          {
            term: 'Monitores',
            text: 'Resolución nativa, refresh Hz, panel IPS/VA/TN. Cable DisplayPort para 144Hz+. Flicker PWM cansa vista. Calibración color diseño gráfico.',
          },
        ],
      },
      {
        title: 'Diagnóstico práctico en mesa de ayuda',
        entries: [
          {
            term: 'Checklist “no enciende”',
            text: 'Cable power, strip encendido, botón case conectado header placa, RAM asentada, beeps POST. Laptop: cargador watt correcto, batería desconectada test.',
          },
          {
            term: 'Lentitud',
            text: 'Task Manager: disco 100% HDD dying, RAM llena, CPU malware/minero. Startup apps deshabilitar. SSD upgrade mayor impacto percepción velocidad.',
          },
          {
            term: 'Temperatura y ruido',
            text: 'Ventilador bearing falla = grinding. HWiNFO, Core Temp lecturas. Limpiar polvo con aire comprimido equipo apagado.',
          },
          {
            term: 'Garantía y RMA',
            text: 'Serial number registro fabricante. No abrir si invalida garantía. Log asset taglinea de vida equipo en CMDB.',
          },
        ],
      },
    ],
  },
  {
    id: 'fund-windows-ad',
    title: 'Windows, Active Directory y administración corporativa',
    intro:
      'En entornos empresariales Windows Server y Active Directory centralizan usuarios, equipos y políticas. Saber crear cuentas, unir PCs al dominio, aplicar GPO y diagnosticar login fallido es competencia core del soporte IT y sysadmin junior.',
    subsections: [
      {
        title: 'Active Directory fundamentals',
        entries: [
          {
            term: 'Dominio y bosque',
            text: 'Forest root domain; trees optional. Trust relationships entre dominios. FSMO roles (Schema Master, etc.) en pocos DCs. Global Catalog acelera búsquedas multi-domain.',
          },
          {
            term: 'OU (Unidades organizativas)',
            text: 'Contenedores lógicos usuarios/equipos/computers por departamento/geo. Delegar permisos helpdesk reset password solo en OU Ventas. GPO link a OU aplica políticas.',
          },
          {
            term: 'Objetos: user, group, computer',
            text: 'Security groups asignan permisos recursos (AGDLP: Account→Global group→Domain Local→Permission). Distribution groups solo mail. Computer account representa PC unido dominio; password machine account rotado.',
          },
          {
            term: 'Domain Controllers',
            text: 'Réplicas multi-master AD. DNS integrado casi siempre en DC. Mínimo dos DCs producción. Seize roles si DC permanente offline (último recurso).',
          },
        ],
      },
      {
        title: 'Autenticación y acceso',
        entries: [
          {
            term: 'Kerberos y NTLM',
            text: 'Kerberos tickets TGT/TGS preferido dominio. NTLM legacy fallback vulnerable pass-the-hash — deshabilitar donde posible. Clock skew >5 min rompe Kerberos — sync NTP.',
          },
          {
            term: 'Login interactivo vs red',
            text: 'Logon locally, remote desktop, network logon audit distintos event IDs Security log. Failed logon 4625 brute force indicator.',
          },
          {
            term: 'Cuentas de servicio',
            text: 'gMSA managed service accounts rotación auto password. Evitar service account password never expires sin control. SPN para Kerberos SQL/IIS.',
          },
          {
            term: 'Azure AD híbrido',
            text: 'Hybrid join: on-prem AD + cloud identity. SSO apps SaaS. Password hash sync o federation ADFS. Intune MDM policies dispositivos.',
          },
        ],
      },
      {
        title: 'Group Policy (GPO)',
        entries: [
          {
            term: 'Computer vs User config',
            text: 'Computer policies aplican máquina (independiente quién loguea). User policies siguen usuario. Loopback processing reemplaza user GPO en kiosks terminales.',
          },
          {
            term: 'Políticas comunes',
            text: 'Password policy complejidad/historial. Screen lock 15 min. USB block. Software deployment MSI. Mapped drives scripts logon. Windows Update WSUS deferral.',
          },
          {
            term: 'gpupdate y RSOP',
            text: 'gpupdate /force refresca. gpresult /r muestra applied GPOs. Group Policy Modeling simula antes aplicar. Conflicto: LSDOU last wins mismo setting.',
          },
          {
            term: 'Seguridad GPO',
            text: 'Restrict admins locales. LAPS rota password admin local único por PC. Applocker/WDAC whitelist apps. Audit policy enable advanced logging.',
          },
        ],
      },
      {
        title: 'Windows cliente en soporte',
        entries: [
          {
            term: 'Ediciones',
            text: 'Home sin join domain. Pro/Enterprise domain + BitLocker + Assigned Access. LTSC sin Store para kiosks embedded.',
          },
          {
            term: 'Perfiles',
            text: 'Local C:\\Users\\user. Roaming profile sync server (legacy). FSLogix containers VHD moderno. Mandatory .man read-only aula. Profile corruption sintoma: desktop reset — crear profile nuevo.',
          },
          {
            term: 'Herramientas admin',
            text: 'Event Viewer, Computer Management, Services.msc, regedit (backup antes). MSConfig startup diagnostic. Safe mode networking troubleshoot drivers.',
          },
          {
            term: 'Actualizaciones',
            text: 'Feature update vs quality cumulative. WUfB rings pilot/broad. Rollback 10 días post feature update. Servicing stack updates prerequisito.',
          },
        ],
      },
      {
        title: 'Escenarios típicos mesa de ayuda',
        entries: [
          {
            term: '“No puedo loguear”',
            text: 'Caps lock, teclado layout, cuenta locked/disabled, password expired, clock skew, no domain controller reachable (cable/VPN), profile service failed. Unlock ADUC, reset pwd, check secure channel: Test-ComputerSecureChannel.',
          },
          {
            term: 'Unir equipo al dominio',
            text: 'DNS must point DC. Domain admin rights. Rename PC si necesario. Reboot. Autopilot puede join durante OOBE cloud.',
          },
          {
            term: 'Permisos carpetas',
            text: 'Share permissions vs NTFS — intersección más restrictiva aplica. Groups not individuals en ACLs. Access denied effective permissions tab calcula.',
          },
        ],
      },
    ],
  },
  {
    id: 'fund-itil',
    title: 'ITIL, mesa de ayuda y gestión de servicios',
    intro:
      'ITIL (Information Technology Infrastructure Library) estandariza cómo prestar servicios IT alineados al negocio. Incidentes, problemas, cambios y niveles de servicio dan estructura a help desks que de otro modo apagarían fuegos sin aprender ni medir.',
    subsections: [
      {
        title: 'Conceptos ITIL 4',
        entries: [
          {
            term: 'Service Value System',
            text: 'Guiding principles, governance, service value chain, practices, continual improvement. Enfoque en co-crear valor con negocio, no solo “mantener luces encendidas”.',
          },
          {
            term: 'Incident vs Problem vs Change',
            text: 'Incident: interrupción no planificada (“email caído”). Problem: causa raíz subyacente recurrente. Change: adición/modificación/remoción controlada infra o app. Request: rutina usuario (nuevo laptop).',
          },
          {
            term: 'Catálogo de servicios',
            text: 'Lista servicios IT ofrece con descripción, SLA, cómo solicitar. Service catalog portal self-service reduce tickets “¿cómo pido VPN?”.',
          },
          {
            term: 'CMDB',
            text: 'Configuration Management Database: CIs (servers, apps, relaciones). Change impact analysis. Discovery tools auto-populate parcialmente.',
          },
        ],
      },
      {
        title: 'Gestión de incidentes',
        entries: [
          {
            term: 'Flujo incidente',
            text: 'Registro → categorización → priorización → diagnóstico → resolución → cierre. Major incident: bridge call, comms manager, status page clientes.',
          },
          {
            term: 'Prioridad matriz',
            text: 'Impact × Urgency = Priority. P1 sistema crítico caído muchos usuarios. P4 consulta menor. Definir en SLA acordado negocio.',
          },
          {
            term: 'Escalamiento',
            text: 'Functional: L1→L2 redes cuando ping falla. Hierarchical: manager si SLA breach inminente. Automatic rules ticket sin update 4h.',
          },
          {
            term: 'Comunicación usuario',
            text: 'Acknowledge receipt rápido. Updates proactivos incidentes largos. Cierre confirmar satisfacción. CSAT survey post ticket.',
          },
        ],
      },
      {
        title: 'SLA, OLA y métricas',
        entries: [
          {
            term: 'SLA',
            text: 'Acuerdo externo con cliente/negocio: 99.9% uptime mensual email. Penalidades crédito si incumple. Medible objetivamente.',
          },
          {
            term: 'OLA y UC',
            text: 'Operational Level Agreement entre equipos IT (L1 resuelve password 30 min). Underpinning Contract con proveedor cloud/hosting.',
          },
          {
            term: 'KPIs mesa ayuda',
            text: 'First Contact Resolution %, Mean Time To Resolve, ticket backlog age, reopen rate, agent utilization. No KPIs sin contexto calidad.',
          },
          {
            term: 'Reporting',
            text: 'Dashboard semanal tendencias. Problem management revisa top incident categories mensual. Demostrar valor IT con datos.',
          },
        ],
      },
      {
        title: 'Problem y Change management',
        entries: [
          {
            term: 'Problem management',
            text: 'Root Cause Analysis 5 whys, fishbone. Known Error Database workaround hasta fix permanente. Proactive: trend analysis pre-falla.',
          },
          {
            term: 'Change Advisory Board',
            text: 'CAB aprueba changes normal. Standard pre-approved low risk. Emergency change post-incident documentado después. Change window maintenance domingo 2am.',
          },
          {
            term: 'Release management',
            text: 'Bundle changes deploy coordinado. Rollback plan obligatorio. Communication stakeholders pre release.',
          },
        ],
      },
      {
        title: 'Buenas prácticas en tickets',
        entries: [
          {
            term: 'Calidad del ticket',
            text: 'Título específico “Outlook error 0x800CCC0E” no “email roto”. Pasos reproduce, capturas, hora inicio, dispositivo, ubicación red. Una solicitud por ticket.',
          },
          {
            term: 'Knowledge base',
            text: 'Artículos KCS: síntoma → causa → solución. Link KB en resolución ticket. Deflection: usuario self-help antes abrir ticket.',
          },
          {
            term: 'Categorización',
            text: 'Hardware/Software/Network/Access. Tags para reporting. Mal categorizado distorsiona métricas — training analistas.',
          },
        ],
      },
    ],
  },
  {
    id: 'fund-soporte',
    title: 'Soporte técnico, troubleshooting y soft skills',
    intro:
      'El soporte efectivo combina método estructurado de diagnóstico, comunicación clara con usuarios no técnicos y documentación que evita repetir trabajo. Estas habilidades diferencian un técnico que adivina de uno que resuelve de forma reproducible y profesional.',
    subsections: [
      {
        title: 'Metodología de troubleshooting',
        entries: [
          {
            term: 'Identificar el problema',
            text: 'Preguntas abiertas: ¿qué esperaba? ¿qué ocurrió? ¿cuándo empezó? ¿cambió algo? ¿solo usted o todos? Reproducir pasos. Diferenciar síntoma vs causa.',
          },
          {
            term: 'Establecer teoría probable',
            text: 'Divide and conquer: capa OSI, hardware/software/red. Cambio reciente #1 sospechoso. Occam: explicación simple antes reinstalar todo.',
          },
          {
            term: 'Probar solución',
            text: 'Un cambio a la vez. Documentar qué probaste. Rollback si empeora. Usuario confirma resolución antes cerrar.',
          },
          {
            term: 'Modelo OSI aplicado',
            text: 'Físico cable → enlace Wi‑Fi asociado → IP asignada → DNS resuelve → puerto app abierto → credenciales app. Ping 8.8.8.8 vs ping google.com separa capa 3 vs 7.',
          },
        ],
      },
      {
        title: 'Comandos y herramientas esenciales',
        entries: [
          {
            term: 'Windows',
            text: 'ipconfig /all, ipconfig /flushdns, ping, tracert, nslookup, netstat -ano, sfc /scannow, DISM, Get-EventLog, tasklist, gpresult, whoami /groups.',
          },
          {
            term: 'Linux / macOS',
            text: 'ip a, ss -tulpn, dig, traceroute, journalctl, systemctl status, df -h, top/htop, chmod/chown permisos.',
          },
          {
            term: 'Remote support',
            text: 'RDP Windows (no exponer Internet sin VPN). Quick Assist, TeamViewer corporate con logging. Consentimiento usuario antes control remoto. Grabación sesión compliance.',
          },
          {
            term: 'Inventario remoto',
            text: 'SCCM/Intune hardware report. WMI queries serial. PowerShell Invoke-Command equipos dominio (con permiso).',
          },
        ],
      },
      {
        title: 'Escenarios frecuentes',
        entries: [
          {
            term: 'Sin Internet pero hay red local',
            text: 'Gateway incorrecto, DNS down, proxy PAC misconfigured, VPN split tunnel, captive portal Wi‑Fi guest. ipconfig renew. Probar DNS 1.1.1.1 temporal.',
          },
          {
            term: 'Outlook / correo',
            text: 'Cached mode vs online. OST corrupt rebuild. Autodiscover test. MFA app registration. Licencia M365 asignada portal admin.',
          },
          {
            term: 'Impresora no imprime',
            text: 'Cola stuck clear spooler. Driver PCL correcto. Ping IP impresora red. Default printer policy GPO. Print test page local bypass app.',
          },
          {
            term: 'Lentitud post update',
            text: 'Disk cleanup, disable startup, check disk 100%, incompatible driver rollback, feature update bug known issues Microsoft.',
          },
          {
            term: 'Acceso denegado archivos',
            text: 'NTFS permissions, no share alone. Group membership refresh klist purge tickets. Take ownership último recurso con aprobación.',
          },
        ],
      },
      {
        title: 'Seguridad en soporte',
        entries: [
          {
            term: 'Verificación identidad',
            text: 'Antes reset password: employee ID, ticket number, callback extension interno, manager approval high risk. Nunca password por chat sin verificar.',
          },
          {
            term: 'Principio least privilege',
            text: 'Cuenta soporte no domain admin daily. Just-in-time elevation. Log acciones admin. Separación duties financial systems.',
          },
          {
            term: 'Datos sensibles',
            text: 'No screenshots passwords. Redact PII en tickets públicos. Secure wipe dispositivos retirados NIST 800-88. Chain custody legal holds.',
          },
        ],
      },
      {
        title: 'Comunicación y soft skills',
        entries: [
          {
            term: 'Lenguaje claro',
            text: 'Evitar jerga con usuario final. Analogías simples. Confirmar entendimiento “¿podría intentar X y decirme qué ve?”. Empatía frustración sin condescendencia.',
          },
          {
            term: 'Gestión expectativas',
            text: 'SLA honesto: “investigo y actualizo en 2 horas”. No prometer lo desconocido. Escalar sin culpar usuario.',
          },
          {
            term: 'De-escalación',
            text: 'Usuario enojado: escuchar, disculpa por impacto (no admisión culpa técnica prematura), foco solución, ofrecer workaround temporal.',
          },
          {
            term: 'Capacitación usuario',
            text: 'Mini demo prevención futura. Link KB. Ticket resolución con pasos numerados usuario puede seguir. Reduce repeat tickets.',
          },
        ],
      },
    ],
  },
  {
    id: 'fund-cloud-basics',
    title: 'Cloud computing y virtualización básica',
    intro:
      'Cada vez más servicios migran a cloud híbrido o público. Comprender IaaS/PaaS/SaaS, modelos de responsabilidad compartida y conceptos básicos de Azure/AWS ayuda al soporte a orientar usuarios y escalar incidentes de infraestructura correctamente.',
    subsections: [
      {
        title: 'Modelos de servicio',
        entries: [
          {
            term: 'IaaS',
            text: 'Infrastructure as a Service: VMs, redes, storage en cloud. Cliente gestiona OS, middleware, apps. Ejemplos: EC2, Azure VMs, Google Compute Engine.',
          },
          {
            term: 'PaaS',
            text: 'Platform as a Service: runtime, DB managed sin administrar SO. Azure App Service, Heroku. Deploy código directo.',
          },
          {
            term: 'SaaS',
            text: 'Software as a Service: app lista M365, Salesforce, Slack. Solo configura tenant y usuarios. Updates vendor-side.',
          },
          {
            term: 'Responsabilidad compartida',
            text: 'Cloud provider seguridad DE la nube (físico, hypervisor). Cliente seguridad EN la nube (datos, IAM, config). “Credenciales filtradas S3 bucket” es culpa cliente.',
          },
        ],
      },
      {
        title: 'Conceptos cloud comunes',
        entries: [
          {
            term: 'Regiones y availability zones',
            text: 'Datacenter geográfico vs AZ aisladas dentro región. Alta disponibilidad multi-AZ. Latencia elegir region cerca usuarios. Data residency legal.',
          },
          {
            term: 'Escalado',
            text: 'Vertical: VM más grande. Horizontal: más instancias + load balancer. Auto-scaling por CPU/RPS. Stateless apps escalan fácil.',
          },
          {
            term: 'Storage cloud',
            text: 'Object S3/Blob archivos. Block EBS disk VM. File EFS/SMB share. Tier hot/cool/archive costo vs acceso.',
          },
          {
            term: 'Identity en cloud',
            text: 'IAM roles mejor que long-lived keys. MFA root account. Principle least privilege policies JSON. Federated SSO empleados.',
          },
        ],
      },
      {
        title: 'Soporte en entorno híbrido',
        entries: [
          {
            term: 'VPN / ExpressRoute',
            text: 'Conectividad on-prem ↔ cloud privada. Latency sensitive apps considerar híbrido. DNS split resolve internal vs cloud names.',
          },
          {
            term: 'Hybrid AD',
            text: 'Sync identidades cloud on-prem. Password writeback opcional. Conditional Access MFA cloud apps.',
          },
          {
            term: 'Escalamiento cloud',
            text: 'L1 verifica cliente app y red local. L2 cloud team revisa metrics portal, logs Activity Log, service health dashboard outage regional.',
          },
        ],
      },
    ],
  },
];
