/** Temas ampliados de Seguridad Informática. */
export const SEGURIDAD_TOPICS = [
  {
    id: 'seg-owasp',
    title: 'OWASP Top 10 y vulnerabilidades web',
    intro:
      'OWASP Top 10 lista los riesgos más críticos en aplicaciones web. No es checklist legal sino guía práctica para developers, QA y pentesters. Entender cada categoría con ejemplos concretos y contramedidas permite diseñar software que resista ataques comunes sin depender solo del firewall perimetral.',
    subsections: [
      {
        title: 'Inyección',
        entries: [
          {
            term: 'SQL Injection',
            text: 'Entrada del usuario concatena en query SQL: \' OR 1=1 -- bypass login. Mitigación: consultas parametrizadas (prepared statements), ORM bien usado, least privilege DB user (sin DROP). WAF capa adicional, no sustituto. Validar tipo: id numérico debe ser int.',
          },
          {
            term: 'Command injection',
            text: 'Input pasa a shell: ; rm -rf /. Nunca pasar input a exec/system sin whitelist estricta. Usar APIs de librería en lugar de invocar comandos OS. Ejemplo vulnerable: ping host desde formulario sin sanitizar.',
          },
          {
            term: 'LDAP / XPath / NoSQL injection',
            text: 'Misma lógica: metacaracteres alteran consulta. MongoDB $where con input usuario. Escapar según contexto y usar APIs parametrizadas del driver.',
          },
          {
            term: 'Prevención general',
            text: 'Validación allowlist server-side. Encoding al output según contexto (HTML, URL, JS). Principio de mínimo privilegio en cuentas de servicio. SAST/DAST en pipeline detectan patrones.',
          },
        ],
      },
      {
        title: 'Autenticación rota',
        entries: [
          {
            term: 'Contraseñas débiles',
            text: 'Política: longitud mínima 12+, sin composición obsoleta forzada. bcrypt/Argon2/scrypt con salt, nunca MD5/SHA1 plano. Rate limit login, CAPTCHA tras intentos. Have I Been Pwned para detectar passwords filtradas.',
          },
          {
            term: 'Gestión de sesión',
            text: 'Session ID aleatorio largo, cookie HttpOnly + Secure + SameSite. Rotar ID post-login. Timeout inactividad y absolute timeout. Invalidar sesiones server-side en logout. No session ID en URL.',
          },
          {
            term: 'MFA',
            text: 'Segundo factor TOTP (app authenticator), WebAuthn/FIDO2 hardware key, SMS (menos seguro). MFA obligatorio admin y acceso remoto. Backup codes almacenados hashed.',
          },
          {
            term: 'Recuperación de cuenta',
            text: 'Tokens reset un solo uso, expiran en 15–60 min, enviados por canal verificado. No revelar si email existe (“si existe, enviamos mail”). Preguntas secreto obsoletas.',
          },
        ],
      },
      {
        title: 'XSS y CSRF',
        entries: [
          {
            term: 'Reflected XSS',
            text: 'Payload en URL reflejado sin escapar: ?q=<script>alert(1)</script>. Robo cookies si no HttpOnly, keylogging, defacement. Escapar HTML entities en output. Content-Security-Policy default-src self limita scripts inline.',
          },
          {
            term: 'Stored XSS',
            text: 'Script guardado en DB (comentario, perfil) ejecutado a otros usuarios. Más peligroso: worm en red social. Sanitizar HTML con librería allowlist (DOMPurify) si rich text necesario.',
          },
          {
            term: 'DOM-based XSS',
            text: 'JS lee location.hash y escribe innerHTML sin sanitizar. Fix en cliente y servidor. Usar textContent, no innerHTML con datos usuario.',
          },
          {
            term: 'CSRF',
            text: 'Sitio malicioso envía form a tu banco con cookies del victim. Token CSRF sincronizado por sesión, SameSite cookies, verificar Origin/Referer en POST state-changing.',
          },
        ],
      },
      {
        title: 'Control de acceso y configuración',
        entries: [
          {
            term: 'Broken Access Control',
            text: 'Cambiar ?userId=123 a 124 expone datos ajenos (IDOR). Forzar autorización en cada endpoint server-side. RBAC/ABAC centralizado. Tests: usuario A no accede recurso de B.',
          },
          {
            term: 'Security misconfiguration',
            text: 'Debug en prod, directory listing, headers default, cloud buckets públicos. Hardening checklist, escaneo CIS benchmarks. Desactivar endpoints admin no usados.',
          },
          {
            term: 'Componentes vulnerables',
            text: 'Dependencias desactualizadas (Log4Shell). npm audit, Dependabot, SBOM. Parchear o mitigar con WAF temporal. Inventario software third-party.',
          },
          {
            term: 'Logging y monitoring failures',
            text: 'Sin logs no hay forensics. Loguear auth fallida, privilege changes, input validation fail — sin passwords ni PII completa. Retención y acceso restringido a logs.',
          },
        ],
      },
      {
        title: 'Criptografía y diseño seguro',
        entries: [
          {
            term: 'TLS everywhere',
            text: 'HTTPS con TLS 1.2+; deshabilitar cipher suites débiles. HSTS preload. Certificados Let\'s Encrypt o CA interna. Mixed content bloqueado.',
          },
          {
            term: 'Almacenamiento sensible',
            text: 'Passwords hashed; PII cifrada at rest (AES-256, KMS). No custom crypto; usar librerías auditadas. Key rotation documentada.',
          },
          {
            term: 'Threat modeling',
            text: 'STRIDE por feature: Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation. DFD con trust boundaries. Mitigar antes de code freeze.',
          },
        ],
      },
    ],
  },
  {
    id: 'seg-phishing',
    title: 'Phishing, ingeniería social y concienciación',
    intro:
      'Muchos incidentes empiezan con un correo convincente o una llamada, no con un exploit zero-day. La ingeniería social explota confianza, urgencia y autoridad. Formación continua y procesos claros de verificación son tan importantes como antivirus y firewalls.',
    subsections: [
      {
        title: 'Tipos de phishing',
        entries: [
          {
            term: 'Phishing masivo',
            text: 'Correos genéricos “Tu paquete DHL” a millones. Baja tasa éxito pero volumen alto. Filtros antispam, SPF/DKIM/DMARC reducen entrega. Usuario reporta con botón phishing.',
          },
          {
            term: 'Spear phishing',
            text: 'Dirigido: usa nombre jefe, proyecto real, LinkedIn. Objetivo: ejecutivos (whaling) o IT con credenciales admin. OSINT previo del atacante. Verificar canal alternativo ante pedidos urgentes de transferencia.',
          },
          {
            term: 'Vishing y smishing',
            text: 'Voz: “Soy soporte Microsoft”. SMS: enlace acortado banco falso. Nunca dar OTP por teléfono. Colgar y llamar número oficial del dorso tarjeta.',
          },
          {
            term: 'BEC (Business Email Compromise)',
            text: 'Cuenta real comprometida o dominio typosquatting (paypa1.com). Cambio datos bancarios proveedor. Proceso dual control pagos > umbral. Confirmar cambios por teléfono conocido.',
          },
        ],
      },
      {
        title: 'Señales de alerta',
        entries: [
          {
            term: 'Remitente y dominio',
            text: 'Display name “CEO” pero email gmail.com. Dominio homóglifo (rn vs m). Revisar cabeceras Received, Return-Path. SPF fail no siempre spam pero señal.',
          },
          {
            term: 'Urgencia y miedo',
            text: '“Cuenta suspendida en 2 horas”, “Multa AFIP”. Presión para no pensar. Política: pausar, verificar por canal oficial. Ningún legit pide password por mail.',
          },
          {
            term: 'Enlaces y adjuntos',
            text: 'Hover URL antes click (mobile: long press). Acortadores ocultan destino. Adjuntos .html, .zip con .exe, macros Office. Sandbox attachments en gateway. Bloquear macros default.',
          },
          {
            term: 'Calidad del mensaje',
            text: 'Errores idioma, logo pixelado, saludo genérico “Estimado cliente”. No es definitivo: ataques targeted están impecables.',
          },
        ],
      },
      {
        title: 'Ingeniería social avanzada',
        entries: [
          {
            term: 'Pretexting',
            text: 'Inventar escenario: auditor externo pide listado empleados. Validar identidad con proceso establecido antes de compartir datos.',
          },
          {
            term: 'Tailgating / piggybacking',
            text: 'Seguir empleado por puerta secure. Badge visible, challenge desconocidos, sensibilización recepción.',
          },
          {
            term: 'Quid pro quo',
            text: '“IT support, necesito que ejecutes este script”. Verificar ticket en sistema oficial. Callback al interno corporativo.',
          },
          {
            term: 'Dumpster diving y shoulder surfing',
            text: 'Basura con documentos confidenciales. Pantalla visible en café. Shredder cross-cut, privacy filters, clean desk.',
          },
        ],
      },
      {
        title: 'Programa de concienciación',
        entries: [
          {
            term: 'Simulaciones de phishing',
            text: 'Campañas controladas miden click rate. Refuerzo inmediato al usuario que clickea (micro training). Métrica trending down, no punir sin educar.',
          },
          {
            term: 'Políticas claras',
            text: 'Cómo reportar incidente, SLAs respuesta SOC. Premio cultura reportar sin vergüenza. Phishing es cuando le pasa a cualquiera.',
          },
          {
            term: 'Onboarding y refresh',
            text: 'Training día 1 + anual + tras incidente sector. Microlearning mensual 5 min. Executives mismo training que staff.',
          },
        ],
      },
      {
        title: 'Respuesta si alguien cayó',
        entries: [
          {
            term: 'Acciones inmediatas',
            text: 'Desconectar red (no apagar si forensics). Reset password y revocar sesiones. Cambiar credenciales reutilizadas. Notificar SOC con hora exacta y captura.',
          },
          {
            term: 'Credenciales en sitio falso',
            text: 'Asumir compromiso. MFA bloquea si atacante no tiene segundo factor. Monitorear accesos anómalos geo/IP. Forzar reset org-wide si campaña masiva.',
          },
          {
            term: 'Malware en adjunto',
            text: 'Aislar equipo. Imagen disco para análisis. Reimagen desde gold master. Verificar lateral movement en AD.',
          },
        ],
      },
    ],
  },
  {
    id: 'seg-hardening',
    title: 'Hardening, monitoreo y respuesta a incidentes',
    intro:
      'La defensa en profundidad combina prevención, detección y recuperación. Hardening reduce superficie de ataque; SIEM y EDR detectan comportamiento anómalo; un plan de respuesta a incidentes ordenado limita daño y tiempo de inactividad ante ransomware o brechas de datos.',
    subsections: [
      {
        title: 'Hardening de sistemas',
        entries: [
          {
            term: 'Principio de mínimo privilegio',
            text: 'Usuarios y servicios solo permisos necesarios. No admin daily driver. sudo con log. Service accounts sin login interactivo. Just-in-time access en cloud (PIM).',
          },
          {
            term: 'Parches y gestión vulnerabilidades',
            text: 'Ventana parche mensual críticos, 72h zero-day. WSUS/SCCM Windows; apt unattended-upgrades Linux. Scan Nessus/Qualys; priorizar CVSS + exposición Internet. Virtual patch WAF temporal.',
          },
          {
            term: 'Configuración base (CIS)',
            text: 'Benchmarks CIS para Windows Server, Linux, cloud. Desactivar servicios innecesarios (Telnet, FTP claro). Firewall host enabled. Secure Boot, BitLocker/LUKS full disk.',
          },
          {
            term: 'Endurecimiento aplicaciones',
            text: 'Desactivar directory listing web. Ocultar version banners. Security headers: X-Frame-Options, CSP, X-Content-Type-Options. Rate limiting API.',
          },
        ],
      },
      {
        title: 'Perímetro y segmentación',
        entries: [
          {
            term: 'Firewall y zonas',
            text: 'DMZ servicios públicos; LAN usuarios; VLAN servidores; mgmt out-of-band. Reglas deny-by-default. Microsegmentación limita lateral movement post-compromiso.',
          },
          {
            term: 'Zero Trust',
            text: 'Never trust, always verify. MFA, device posture check, acceso app por app no flat network. SDP reemplaza VPN amplio en algunos casos.',
          },
          {
            term: 'IDS/IPS',
            text: 'Snort/Suricata firmas conocidas; anomalía baseline. IPS bloquea inline con riesgo false positive. Correlacionar con SIEM.',
          },
        ],
      },
      {
        title: 'SIEM, logs y EDR',
        entries: [
          {
            term: 'Fuentes de log',
            text: 'AD auth, VPN, firewall, proxy web, cloud trail, app audit. NTP sincronizado para correlación. Retención 90d–1y según compliance.',
          },
          {
            term: 'SIEM use cases',
            text: 'Brute force login, impossible travel, privilege escalation, data exfil volume spike. Playbooks automatizados tier-1. Tuning reduce alert fatigue.',
          },
          {
            term: 'EDR/XDR',
            text: 'Agent endpoint: procesos, injections, ransomware behavior. Respuesta remota aislar host. XDR une endpoint, email, cloud en una consola.',
          },
          {
            term: 'Threat intelligence',
            text: 'Feeds IOC (IPs, hashes maliciosos). Block en firewall/proxy. STIX/TAXII intercambio. Validar false positives antes block global.',
          },
        ],
      },
      {
        title: 'Respuesta a incidentes',
        entries: [
          {
            term: 'Fases NIST',
            text: 'Preparation (equipo, runbooks). Detection & Analysis. Containment (short/long term). Eradication (malware root cause). Recovery (restore services). Post-incident lessons learned.',
          },
          {
            term: 'Contención ransomware',
            text: 'Aislar segmentos, deshabilitar cuentas comprometidas, preservar logs. No pagar sin evaluar legal y backups. Comunicación stakeholders y regulador si datos personales.',
          },
          {
            term: 'Forensics básico',
            text: 'Orden volatilidad: memoria, disco, logs red. Chain of custody. Imagen bit-a-bit. No montar disco infected read-write. Timeline eventos.',
          },
          {
            term: 'Comunicación y legal',
            text: 'PR preparado, notificación clientes según GDPR/Ley local plazos. Cyber insurance y abogados especializados. Postmortem blameless documentado.',
          },
        ],
      },
      {
        title: 'Backup y continuidad',
        entries: [
          {
            term: 'Regla 3-2-1-1-0',
            text: '3 copias, 2 medios, 1 offsite, 1 offline/air-gapped, 0 errors verificación restore. Backup sin restore test es esperanza, no estrategia.',
          },
          {
            term: 'Protección ransomware',
            text: 'Immutable backups (WORM S3, tape). Separar credenciales backup domain. MFP no accesible desde LAN producción. Detectar mass encrypt behavior.',
          },
          {
            term: 'DRP y RTO/RPO',
            text: 'Recovery Time Objective: cuánto downtime tolerable. RPO: cuántos datos se pierden. Hot/warm/cold site. Simulacro anual tabletop + técnico.',
          },
        ],
      },
    ],
  },
  {
    id: 'seg-crypto-iam',
    title: 'Criptografía, identidad y cumplimiento',
    intro:
      'Criptografía protege confidencialidad e integridad; IAM (Identity and Access Management) controla quién accede a qué. Marcos como ISO 27001 y regulaciones de protección de datos exigen controles técnicos y organizativos documentados.',
    subsections: [
      {
        title: 'Conceptos criptográficos',
        entries: [
          {
            term: 'Simétrico vs asimétrico',
            text: 'Simétrico (AES): misma clave cifrar/descifrar, rápido para bulk data. Asimétrico (RSA, ECC): par pública/privada, key exchange y firmas. TLS combina ambos en handshake.',
          },
          {
            term: 'Hashing',
            text: 'SHA-256 one-way; integridad archivos y passwords con salt+slow hash. No reversible. MD5/SHA1 obsoletos seguridad. HMAC autentica mensaje con clave secreta.',
          },
          {
            term: 'Certificados X.509',
            text: 'CA firma clave pública servidor. Cadena trust hasta root CA en OS/browser. Expiry monitoring; renovación auto ACME. Pinning en mobile apps críticas.',
          },
          {
            term: 'PKI interna',
            text: 'AD CS emite certs usuarios/equipos. Template por uso. CRL/OCSP revocación. Proteger CA root offline.',
          },
        ],
      },
      {
        title: 'IAM y SSO',
        entries: [
          {
            term: 'OAuth2 y OpenID Connect',
            text: 'OAuth delega autorización; OIDC capa identidad (id_token JWT). “Login with Google” en apps SaaS. Scopes mínimos necesarios.',
          },
          {
            term: 'SAML',
            text: 'Enterprise SSO browser POST assertion XML. IdP (Okta, ADFS) ↔ SP (Salesforce). Atributos rol/grupo mapeados a permisos app.',
          },
          {
            term: 'Active Directory y Azure AD',
            text: 'On-prem AD + sync Azure AD Connect. Conditional Access: MFA + device compliant. Privileged Identity Management eleva admin just-in-time.',
          },
          {
            term: 'Lifecycle identidades',
            text: 'Joiner/mover/leaver: alta cuenta, cambio rol, baja mismo día offboarding. Access reviews trimestrales certifican permisos aún necesarios.',
          },
        ],
      },
      {
        title: 'Cumplimiento y privacidad',
        entries: [
          {
            term: 'ISO 27001',
            text: 'SGSI basado riesgo. Anexo A controles. Audit externo certificación. Políticas, risk assessment, statement applicability.',
          },
          {
            term: 'Protección datos personales',
            text: 'GDPR UE, leyes locales LATAM. Base legal procesamiento. Derecho acceso/borrado. DPIA proyectos alto riesgo. DPO si aplica. Breach notification plazos.',
          },
          {
            term: 'PCI-DSS',
            text: 'Si procesás tarjetas: segmentar CDE, no almacenar CVV, tokenización, ASV scan trimestral. SAQ según volumen comercio.',
          },
        ],
      },
    ],
  },
];
