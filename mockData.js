export const INITIAL_BRAND_PROFILE = {
  companyName: "Apex Financial Group",
  tagline: "Global Digital Wealth & Sovereign Banking Solutions",
  officialWebsite: "https://www.apexfinancial.com",
  officialEmailDomain: "apexfinancial.com",
  industry: "Financial Services & Digital Banking",
  description: "Apex Financial Group is a tier-one financial institution serving over 4.2 million private and commercial clients worldwide with high-security digital banking and wealth infrastructure.",
  logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&auto=format&fit=crop&q=80",
  authorizedPublishers: [
    "Apex Financial Group Ltd.",
    "Apex Global Mobile Services Inc."
  ],
  authorizedAccounts: [
    { platform: "Twitter/X", handle: "@ApexFinancial", verified: true, url: "https://x.com/ApexFinancial" },
    { platform: "LinkedIn", handle: "apex-financial-group", verified: true, url: "https://linkedin.com/company/apex-financial-group" },
    { platform: "Instagram", handle: "@apexfinancial_official", verified: true, url: "https://instagram.com/apexfinancial_official" },
    { platform: "Telegram", handle: "@ApexFinancialNews", verified: true, url: "https://t.me/ApexFinancialNews" }
  ],
  authorizedApps: [
    { platform: "Google Play", packageId: "com.apexfinancial.mobile", name: "ApexPay Mobile Banking" },
    { platform: "Apple App Store", bundleId: "com.apexfinancial.ios", name: "Apex Wealth & Pay" }
  ],
  protectionThreshold: "High / Strict",
  updatedAt: "2026-10-23T14:30:00Z"
};

export const INITIAL_SOCIAL_THREATS = [
  {
    id: "SOC-2026-881",
    platform: "Twitter/X",
    handle: "@ApexFinanciaI_Support",
    profileName: "Apex Financial Support (Live Help)",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    profileUrl: "https://x.com/ApexFinanciaI_Support",
    similarityScore: 94,
    verificationStatus: "Fake Gold Badge / Unverified",
    riskScore: 91,
    severity: "Critical",
    reviewStatus: "Under Review",
    detectionReason: "Typosquatting letter substitution (capital 'I' instead of 'l'). Scraped official brand avatar. Bio contains phishing link redirecting to apex-support-session.net requesting seed phrase & banking PIN.",
    detectedAt: "2026-10-23T08:14:00Z",
    evidenceId: "EV-9941",
    followers: 1240,
    posts: 18,
    actionTaken: "Escalated to Twitter Trust & Safety",
    caseReference: "CAS-7710"
  },
  {
    id: "SOC-2026-882",
    platform: "Telegram",
    handle: "@ApexFinancial_VIP_Signals",
    profileName: "Apex VIP Crypto & Arbitrage Desk",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80",
    profileUrl: "https://t.me/ApexFinancial_VIP_Signals",
    similarityScore: 88,
    verificationStatus: "None",
    riskScore: 86,
    severity: "High",
    reviewStatus: "Detected",
    detectionReason: "Unauthorized commercial use of Apex Financial trademark and logo. Soliciting illicit investment funds using simulated Apex account manager credentials.",
    detectedAt: "2026-10-22T19:42:00Z",
    evidenceId: "EV-9942",
    followers: 8600,
    posts: 142,
    actionTaken: "Evidence Preserved",
    caseReference: "CAS-7711"
  },
  {
    id: "SOC-2026-883",
    platform: "Instagram",
    handle: "@apex_financial_wealth",
    profileName: "Apex Financial Career & Grants",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
    profileUrl: "https://instagram.com/apex_financial_wealth",
    similarityScore: 78,
    verificationStatus: "None",
    riskScore: 68,
    severity: "Medium",
    reviewStatus: "Under Review",
    detectionReason: "Impersonating Apex HR recruitment department. Direct messaging students with fake employment offers requesting processing fee payments.",
    detectedAt: "2026-10-21T11:20:00Z",
    evidenceId: "EV-9943",
    followers: 450,
    posts: 12,
    actionTaken: "Under Analyst Review",
    caseReference: "CAS-7712"
  },
  {
    id: "SOC-2026-884",
    platform: "LinkedIn",
    handle: "apex-apac-distribution",
    profileName: "Apex Financial Asia Pacific Partner Ltd",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    profileUrl: "https://linkedin.com/company/apex-apac-distribution",
    similarityScore: 82,
    verificationStatus: "Verified Partner",
    riskScore: 18,
    severity: "Low",
    reviewStatus: "Allowlisted",
    detectionReason: "AEGIS Guardrails matched this profile as an authorized regional affiliate distributor registered in Singapore. Flagged automatically then suppressed by policy #AG-402.",
    detectedAt: "2026-10-20T16:05:00Z",
    evidenceId: "EV-9944",
    followers: 3200,
    posts: 67,
    actionTaken: "Auto-Allowlisted by AEGIS",
    caseReference: null
  }
];

export const INITIAL_APP_THREATS = [
  {
    id: "APP-2026-401",
    store: "Google Play",
    appName: "ApexPay Mobile - Quick Wallet & Loan",
    publisher: "Apex Softworks Digital Ltd",
    packageId: "com.apex.fastpay.wallet.app",
    storeUrl: "https://play.google.com/store/apps/details?id=com.apex.fastpay.wallet.app",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    similarityScore: 92,
    riskScore: 95,
    severity: "Critical",
    status: "Takedown Submitted",
    detectionReasons: [
      "Clones the official ApexPay logo and color scheme with 92% visual match",
      "Requests high-risk permissions: READ_SMS, ACCESS_FINE_LOCATION, READ_CONTACTS",
      "Injects overlay over legitimate banking apps to steal 2FA OTP codes",
      "Publisher is not an authorized distributor in Brand Profile"
    ],
    officialAppComparison: {
      officialName: "ApexPay Mobile Banking",
      officialPublisher: "Apex Financial Group Ltd.",
      officialPackage: "com.apexfinancial.mobile",
      officialPermissionsCount: 4,
      fakePermissionsCount: 17,
      officialRating: "4.8 ★ (120k reviews)",
      fakeRating: "2.1 ★ (45 reviews)"
    },
    detectedAt: "2026-10-22T04:15:00Z",
    evidenceId: "EV-8821"
  },
  {
    id: "APP-2026-402",
    store: "Apple App Store",
    appName: "Apex Wealth Manager - Advisor Pro",
    publisher: "CloudWealth Financial Pte",
    packageId: "com.cloudwealth.apexadvisor",
    storeUrl: "https://apps.apple.com/app/apex-wealth-manager-advisor-pro/id169824102",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    similarityScore: 74,
    riskScore: 71,
    severity: "High",
    status: "Under Investigation",
    detectionReasons: [
      "Uses trademarked 'Apex Wealth' terminology in search keywords and title",
      "Promotes unvetted third-party algorithmic trading bots claiming affiliation",
      "Violates App Store Guideline 4.1 (Copycats and Trademark Infringement)"
    ],
    officialAppComparison: {
      officialName: "Apex Wealth & Pay",
      officialPublisher: "Apex Financial Group Ltd.",
      officialPackage: "com.apexfinancial.ios",
      officialPermissionsCount: 5,
      fakePermissionsCount: 8,
      officialRating: "4.9 ★ (88k reviews)",
      fakeRating: "3.4 ★ (18 reviews)"
    },
    detectedAt: "2026-10-21T14:40:00Z",
    evidenceId: "EV-8822"
  }
];

export const INITIAL_THREAT_DNA = {
  nodes: [
    { id: "node-actor", label: "TA-FINPHISH-9 (Threat Cluster)", type: "actor", severity: "critical", details: "Coordinated Eastern European credential theft syndicate targeting financial institutions." },
    { id: "node-dom-1", label: "apexpay-secure-login.com", type: "domain", severity: "critical", details: "Active phishing reverse proxy intercepting customer OTPs. IP: 185.220.101.44" },
    { id: "node-dom-2", label: "apexfinancial-verify.net", type: "domain", severity: "high", details: "Credential harvest kit disguised as identity re-verification portal." },
    { id: "node-ip-1", label: "185.220.101.44 (Bulletproof ASN 49870)", type: "ip", severity: "critical", details: "Hosting provider known for refusing abuse complaints. Subnet contains 14 phishing domains." },
    { id: "node-app-1", label: "ApexPay Clone (APK)", type: "app", severity: "critical", details: "Malicious trojanized APK with SMS stealer functionality." },
    { id: "node-soc-1", label: "@ApexFinanciaI_Support", type: "social", severity: "high", details: "Twitter bot directing frustrated bank customers to phishing domain." },
    { id: "node-tg-1", label: "Telegram C2 Channel #810", type: "telegram", severity: "high", details: "Automated exfiltration channel where harvested credentials and OTPs are dumped." },
    { id: "node-cert-1", label: "ZeroSSL Fingerprint #8E4C", type: "cert", severity: "medium", details: "Free SSL certificate issued 48 hours ago sharing identical issuer parameters." }
  ],
  links: [
    { source: "node-actor", target: "node-dom-1", label: "Deploys" },
    { source: "node-actor", target: "node-dom-2", label: "Controls" },
    { source: "node-actor", target: "node-app-1", label: "Authors" },
    { source: "node-dom-1", target: "node-ip-1", label: "Hosted On" },
    { source: "node-dom-2", target: "node-ip-1", label: "Co-Hosted On" },
    { source: "node-soc-1", target: "node-dom-1", label: "Redirects Victims To" },
    { source: "node-app-1", target: "node-tg-1", label: "Exfiltrates Data To" },
    { source: "node-dom-1", target: "node-cert-1", label: "Uses Certificate" },
    { source: "node-dom-2", target: "node-cert-1", label: "Shared Cert Thumbprint" }
  ]
};

export const INITIAL_RISK_ANALYSIS = {
  caseId: "RA-99201",
  targetSubject: "apexpay-secure-login.com",
  overallScore: 89,
  severity: "Critical",
  factors: [
    {
      name: "Visual Brand Similarity",
      weight: 25,
      score: 94,
      explanation: "Optical vector comparison shows 94% structural similarity to Apex Financial's official web portal. Logo, hex palette, and button topography are identical.",
      evidence: "DOM CSS extraction and perceptual hash pHash = 0x8f3c1a99."
    },
    {
      name: "Domain Registration & Typo Squatting",
      weight: 20,
      score: 88,
      explanation: "Domain registered 72 hours ago via Porkbun LLC with privacy protection enabled. Contains exact brand keyword 'apexpay' combined with deceptive security term 'secure-login'.",
      evidence: "WHOIS created: 2026-10-20T03:12:00Z."
    },
    {
      name: "Hosting Infrastructure & ASN Reputation",
      weight: 20,
      score: 82,
      explanation: "Resolved to ASN 49870 (Alveo Networks), classified as high-risk bulletproof hosting with 68% abusive subnet history.",
      evidence: "IP 185.220.101.44 flagged on 4 global threat feeds."
    },
    {
      name: "SSL / TLS Transport Security",
      weight: 15,
      score: 65,
      explanation: "Issued free automated certificate with zero domain validation verification. Mismatched organization name.",
      evidence: "Issuer: ZeroSSL CN=apexpay-secure-login.com"
    },
    {
      name: "Behavioral & Content NLP Analysis",
      weight: 20,
      score: 92,
      explanation: "NLP sentiment analyzer identified high-pressure coercive prompts: 'Account suspended! Verify your credentials within 2 hours or forfeit balance'.",
      evidence: "HTML body regex match against 14 known credential harvesting templates."
    }
  ],
  limitations: "Domain WHOIS details are masked by privacy proxy. Active passive DNS query yields 2 historical IP transitions in past 48 hours.",
  recommendations: [
    "Initiate urgent registrar abuse takedown notification with Porkbun LLC.",
    "Submit phishing URL to Google Safe Browsing and Microsoft SmartScreen feeds.",
    "Add domain to corporate perimeter DNS sinkhole and internal firewall blocklists.",
    "Notify affected users who clicked the simulated Twitter link via automated notification."
  ]
};

export const INITIAL_EVIDENCE_VAULT = [
  {
    caseId: "EV-9941",
    target: "@ApexFinanciaI_Support",
    type: "Social Media Impersonation",
    riskScore: 91,
    severity: "Critical",
    timestamp: "2026-10-23T08:14:22Z",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    screenshotUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    sourceUrl: "https://x.com/ApexFinanciaI_Support",
    httpStatus: 200,
    dnsRecord: "A: 104.244.42.1 (X/Twitter Edge)",
    analystNotes: "Preserved forensic screenshot and DOM state. The profile is directly replying to clients complaining about login issues and sending phishing links.",
    status: "Preserved / Active Case"
  },
  {
    caseId: "EV-9942",
    target: "apexpay-secure-login.com",
    type: "Rogue Phishing Portal",
    riskScore: 95,
    severity: "Critical",
    timestamp: "2026-10-22T21:05:11Z",
    sha256: "a4f89d38c1192e4785461c29ef824a7378d1a1005b63298a4d46cfb776f87421",
    screenshotUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    sourceUrl: "https://apexpay-secure-login.com/auth/login.php",
    httpStatus: 200,
    dnsRecord: "A: 185.220.101.44 (ASN 49870)",
    analystNotes: "Live reverse-proxy phishing framework (Modlishka / Evilginx variant) intercepting session cookies and TOTP tokens.",
    status: "Report Dispatched"
  },
  {
    caseId: "EV-8821",
    target: "com.apex.fastpay.wallet.app",
    type: "Counterfeit Android APK",
    riskScore: 95,
    severity: "Critical",
    timestamp: "2026-10-22T04:15:30Z",
    sha256: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
    screenshotUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    sourceUrl: "https://play.google.com/store/apps/details?id=com.apex.fastpay.wallet.app",
    httpStatus: 200,
    dnsRecord: "Google Play Store CDN",
    analystNotes: "Decompiled APK reveals hardcoded C2 endpoint pointing to Telegram bot token 618492048:AAHX...",
    status: "Takedown In Progress"
  }
];

export const INITIAL_AEGIS_ALLOWLIST = [
  {
    id: "AL-101",
    type: "Domain",
    identifier: "apexfinancial.com",
    category: "Primary Corporate Web",
    addedBy: "System Root",
    addedAt: "2026-01-01",
    notes: "Official apex corporate domain"
  },
  {
    id: "AL-102",
    type: "Social Handle",
    identifier: "@ApexFinancial",
    category: "Verified Twitter/X",
    addedBy: "System Root",
    addedAt: "2026-01-01",
    notes: "Official Twitter handle with corporate verification"
  },
  {
    id: "AL-103",
    type: "Affiliate Entity",
    identifier: "apex-apac-distribution",
    category: "Authorized Regional Subsidiary",
    addedBy: "Lead Analyst (B. Kavya)",
    addedAt: "2026-10-20",
    notes: "Singapore JV partner entity authorized under contract #SG-2025"
  },
  {
    id: "AL-104",
    type: "Mobile Package",
    identifier: "com.apexfinancial.mobile",
    category: "Official Google Play ID",
    addedBy: "SecOps Mobile Lead",
    addedAt: "2026-01-15",
    notes: "Signed with official SHA256 keystore"
  }
];

export const INITIAL_RESPONSE_CASES = [
  {
    caseId: "CAS-7710",
    target: "apexpay-secure-login.com",
    threatType: "Phishing Infrastructure",
    severity: "Critical",
    stage: "Submitted", // Detected -> Under Review -> Report Prepared -> Submitted -> Resolved
    owner: "B. Kavya (Lead Analyst)",
    createdAt: "2026-10-22T21:30:00Z",
    evidenceId: "EV-9942",
    registrar: "Porkbun LLC Abuse Team",
    actions: [
      { step: "Detected", time: "2026-10-22 21:05", detail: "Automated scan flagged 94% brand similarity." },
      { step: "Under Review", time: "2026-10-22 21:15", detail: "Analyst confirmed active credential harvesting." },
      { step: "Report Prepared", time: "2026-10-22 21:25", detail: "Generated Cease & Desist legal packet with SHA-256 evidence." },
      { step: "Submitted", time: "2026-10-22 21:35", detail: "Transmitted formal ticket #PB-88910 to Porkbun registrar." }
    ]
  },
  {
    caseId: "CAS-7711",
    target: "@ApexFinanciaI_Support",
    threatType: "Executive/Support Impersonation",
    severity: "Critical",
    stage: "Report Prepared",
    owner: "SecOps Response Team",
    createdAt: "2026-10-23T08:30:00Z",
    evidenceId: "EV-9941",
    registrar: "X Corp Trust & Safety",
    actions: [
      { step: "Detected", time: "2026-10-23 08:14", detail: "Flagged via social crawler typosquat stream." },
      { step: "Under Review", time: "2026-10-23 08:22", detail: "Confirmed fake gold badge spoofing." },
      { step: "Report Prepared", time: "2026-10-23 08:30", detail: "Prepared trademark infringement dossier #X-44102." }
    ]
  },
  {
    caseId: "CAS-7709",
    target: "apex-loan-instant.org",
    threatType: "Deceptive Financial Scheme",
    severity: "High",
    stage: "Resolved",
    owner: "System Automation",
    createdAt: "2026-10-18T10:00:00Z",
    evidenceId: "EV-9910",
    registrar: "Cloudflare Abuse / Namecheap",
    actions: [
      { step: "Detected", time: "2026-10-18 10:00", detail: "DNS stream monitor alert." },
      { step: "Under Review", time: "2026-10-18 10:15", detail: "Analyst approved emergency takedown." },
      { step: "Report Prepared", time: "2026-10-18 10:30", detail: "Legal packet generated." },
      { step: "Submitted", time: "2026-10-18 10:45", detail: "Dispatched to hosting provider." },
      { step: "Resolved", time: "2026-10-19 02:00", detail: "Domain suspended and placed on DNS clientHold." }
    ]
  }
];

// Rich default cybersecurity knowledge base documents for real RAG
export const DEFAULT_KNOWLEDGE_DOCUMENTS = [
  {
    id: "doc-rag-01",
    title: "Apex_Financial_Brand_Protection_Policy_v4.2.pdf",
    fileType: "application/pdf",
    category: "Brand Protection Policy",
    uploadedAt: "2026-10-20T10:00:00Z",
    fileSize: "248 KB",
    rawContent: `APEX FINANCIAL GROUP — GLOBAL DIGITAL BRAND PROTECTION DIRECTIVE
Version: 4.2 | Classification: RESTRICTED / SECOPS
Authorized by: Office of the Chief Information Security Officer (CISO)

1. PURPOSE & JURISDICTION
This policy establishes mandatory operational standards for defending Apex Financial Group's digital trademarks, domain perimeters, social media identities, and executive presence against external cyber threats including typosquatting, phishing, fraudulent mobile applications, and unauthorized affiliate branding.

2. AUTHORIZED BRAND IDENTITIES
Only assets explicitly cataloged in the Apex Brand Registry are legally authorized to transact with consumers:
- Official Corporate Web: apexfinancial.com, apexpay.com, apexwealth.io
- Authorized Mobile Application Packages: com.apexfinancial.mobile (Google Play), com.apexfinancial.ios (Apple App Store).
- Authorized Social Channels: @ApexFinancial (Twitter/X, verified gold badge), linkedin.com/company/apex-financial-group.
Any variation, including letter substitutions such as capital 'I' for lowercase 'l' (e.g. ApexFinanciaI) or hyphenated suffixes (-support, -verify, -secure), constitutes an unauthorized trademark infringement subject to immediate takedown.

3. RISK CLASSIFICATION & TAKEDOWN THRESHOLDS
Detections are scored on a 0 to 100 severity index:
- CRITICAL (Score 85-100): Immediate escalation required. Applies to sites capturing customer credentials, OTPs, or distributing rogue APK binaries. Target takedown SLA is under 4 hours.
- HIGH (Score 70-84): Deceptive branding soliciting funds or cryptocurrency, executive impersonation with >500 followers. Takedown SLA under 12 hours.
- MEDIUM (Score 50-69): Passive domain squatting without active weaponization, unauthorized recruitment postings.
- LOW / SUPPRESSED (Score 0-49): Authorized partners approved under AEGIS Guardrails protocol.

4. ESCALATION & LEGAL EVIDENCE PROTOCOL
When dispatching takedown notices to domain registrars, hosting providers, or app store operators, analysts must provide:
(a) Cryptographic SHA-256 hash of the target webpage or binary.
(b) Full HTTP response headers demonstrating live credential theft mechanisms.
(c) Timestamped visual forensic screenshot.
(d) Certificate of Trademark Registration No. 5,889,201 registered with the United States Patent and Trademark Office (USPTO) and World Intellectual Property Organization (WIPO).`,
    chunks: []
  },
  {
    id: "doc-rag-02",
    title: "Threat_Actor_FINPHISH9_Intelligence_Brief.md",
    fileType: "text/markdown",
    category: "Threat Intelligence",
    uploadedAt: "2026-10-21T15:20:00Z",
    fileSize: "182 KB",
    rawContent: `# THREAT ACTOR DOSSIER: TA-FINPHISH-9
CyberShield Threat Intelligence Center | Threat Cluster #4492
Target Sector: Tier-1 Retail Banking, Wealth Management & Fintech

## EXECUTIVE SUMMARY
TA-FINPHISH-9 is a financially motivated cybercrime syndicate active since late 2024, specializing in real-time adversary-in-the-middle (AiTM) phishing and counterfeit mobile application distribution targeting prominent wealth platforms including Apex Financial Group.

## KNOWN INFRASTRUCTURE & TTPS (Tactics, Techniques, and Procedures)
1. DOMAIN GENERATION & REGISTRATION:
- TA-FINPHISH-9 registers typosquat domains primarily through Porkbun LLC and NameSilo, utilizing privacy proxies.
- Characteristic naming conventions: [brand]-secure-login.[tld], [brand]pay-verify.[tld], [brand]-session-update.[tld].
- Favors recently registered domains (<7 days old) paired with free automated TLS certificates issued by ZeroSSL or Let's Encrypt.

2. HOSTING & ASN SIGNATURES:
- Infrastructure is overwhelmingly hosted on bulletproof Autonomous System Numbers: ASN 49870 (Alveo Networks) and ASN 206804 (EstNOC).
- Deploys reverse-proxy kits based on modified Evilginx3 and Modlishka frameworks capable of bypassing traditional SMS and software-based TOTP 2FA tokens.

3. MOBILE MALWARE VECTORS:
- Distributes trojanized Android APKs disguised as "ApexPay Wallet & Loan" through compromised third-party app repositories and direct links on Telegram.
- The APK requests excessive Android permissions (READ_SMS, RECEIVE_SMS, QUERY_ALL_PACKAGES) to intercept mobile banking OTPs and exfiltrate them to encrypted Telegram bot channels (Telegram C2 Channel #810).

4. RECOMMENDED COUNTERMEASURES:
- Enforce FIDO2 / WebAuthn hardware security keys to immunize user accounts against AiTM reverse proxies.
- Submit abuse complaints directly to upstream transit providers for ASN 49870 when downstream hosts ignore notifications.
- Maintain continuous monitoring for brand name keywords in new Certificate Transparency (CT) logs.`,
    chunks: []
  },
  {
    id: "doc-rag-03",
    title: "DRP_Standard_Operating_Procedure_SOP-801.txt",
    fileType: "text/plain",
    category: "Operational SOP",
    uploadedAt: "2026-10-22T09:00:00Z",
    fileSize: "140 KB",
    rawContent: `DIGITAL RISK PROTECTION (DRP) STANDARD OPERATING PROCEDURE: SOP-801
Standard: Forensic Evidence Collection & Incident Triage Workflow
Applicability: Level 1 / Level 2 Security Operations Center Analysts

1. INITIAL DETECTION TRIAGE (0-15 Minutes)
Upon receiving an automated alert from the CyberShield Detection Engine:
Step 1.1: Verify whether the target entity matches any entry in the AEGIS Allowlist. If present, mark status as "Allowlisted - False Positive Suppressed" and log the matching rule ID.
Step 1.2: If not allowlisted, inspect brand similarity index and verify whether official logos, fonts, or executive names are utilized without authorization.
Step 1.3: Check domain reputation against active VirusTotal, AbuseIPDB, and ASN risk metrics.

2. FORENSIC EVIDENCE PRESERVATION (15-30 Minutes)
Before initiating any takedown or public contact:
Step 2.1: In the Evidence Vault, capture a cryptographic screenshot of the active portal.
Step 2.2: Compute and record the SHA-256 hash of the complete HTML DOM and all downloaded binaries (e.g. counterfeit APK or PDF forms).
Step 2.3: Record DNS resolution records (A, MX, NS, TXT) and capture SSL certificate serial number and validity period.

3. RESPONSE & TAKEDOWN EXECUTION (30-60 Minutes)
Step 3.1: Navigate to the Response Center and create a new case linked to the Evidence Vault ID.
Step 3.2: Select appropriate takedown dispatch template (Domain Registrar Abuse, DMCA Trademark Infringement, or App Store Host).
Step 3.3: Submit automated takedown notice with attached evidence packet.
Step 3.4: Track case status through the lifecycle: Detected -> Under Review -> Report Prepared -> Submitted -> Resolved.`,
    chunks: []
  }
];
