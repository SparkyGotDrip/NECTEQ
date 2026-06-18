import { Network, Server, Code2, HeadphonesIcon, Briefcase, Users, ShieldCheck, Zap, Activity, Clock, Layers, Globe } from 'lucide-react';
import React from 'react';

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ReactNode;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  benefits: { title: string; desc: string; icon: React.ReactNode }[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  useCases: string[];
  whyChooseUs: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  'dedicated-engineers': {
    id: 'dedicated-engineers',
    title: 'Dedicated Engineers',
    shortDescription: 'Highly skilled L1, L2, and L3 engineers integrated directly into your existing MSP team.',
    icon: <Users size={32} className="text-[#0D6EFD]" />,
    heroHeadline: 'Scale Your Team With Dedicated Engineering Talent',
    heroSubheadline: 'Access top-tier L1, L2, and L3 engineers who seamlessly integrate into your MSP operations, working exactly like your internal staff.',
    overview: 'Finding and retaining skilled IT talent is one of the biggest challenges for growing MSPs. Our Dedicated Engineers service provides you with highly qualified, fully vetted technicians who work exclusively for your business. Whether you need Level 1 support to handle ticket volume, or specialized Level 3 architects to design complex solutions, we provide the exact talent you need to scale profitably.',
    benefits: [
      { title: 'Zero Recruiting Overhead', desc: 'We handle the sourcing, vetting, and technical screening. You simply interview our top candidates.', icon: <Users className="text-[#00E5FF]" /> },
      { title: 'Seamless Integration', desc: 'Our engineers use your tools, follow your SOPs, and adopt your company culture.', icon: <Layers className="text-[#0D6EFD]" /> },
      { title: 'Scalable Growth', desc: 'Add or remove resources dynamically based on your client load and contract requirements.', icon: <Activity className="text-[#00E5FF]" /> },
    ],
    features: [
      'L1, L2, and L3 Engineering Talent',
      'System Administration & Network Support',
      'Direct communication channel integration (Teams/Slack)',
      'Time zone aligned shifts',
      'White-labeled representation',
      'Continuous training and certification programs'
    ],
    process: [
      { step: '01', title: 'Needs Analysis', desc: 'We discuss your technical requirements, toolset, and cultural fit.' },
      { step: '02', title: 'Candidate Selection', desc: 'Review resumes and interview our pre-vetted engineers.' },
      { step: '03', title: 'Onboarding & Training', desc: 'Engineers are trained on your specific SOPs and PSA/RMM tools.' },
      { step: '04', title: 'Integration', desc: 'Your new dedicated engineer begins taking tickets as a seamless extension of your team.' },
    ],
    useCases: [
      'MSPs experiencing rapid client growth',
      'IT departments needing specialized skills (e.g., Azure or AWS architects)',
      'Companies struggling with high local turnover rates'
    ],
    whyChooseUs: [
      'Rigorous 4-stage technical vetting process',
      'Only top 5% of applicants are hired',
      'Cultural alignment and communication skills training',
      'Dedicated account manager to ensure consistent performance'
    ],
    faqs: [
      { q: 'Will the engineer work in our time zone?', a: 'Yes, we provide engineers tailored to your specific business hours and time zone requirements.' },
      { q: 'What tools are they familiar with?', a: 'Our engineers are experienced with industry-standard PSAs (ConnectWise, Autotask) and RMMs (Datto, NinjaOne, Kaseya), and quickly adapt to your specific stack.' }
    ]
  },
  'noc': {
    id: 'noc',
    title: '24/7 NOC Services',
    shortDescription: 'Proactive network monitoring and remediation to ensure zero downtime for your clients.',
    icon: <Network size={32} className="text-[#00E5FF]" />,
    heroHeadline: '24/7 Proactive Network Operations Center',
    heroSubheadline: 'Ensure maximum uptime and performance for your clients with our round-the-clock monitoring, remediation, and infrastructure management.',
    overview: 'Stop reacting to outages and start preventing them. Our 24/7 fully-managed NOC service monitors your clients\' servers, networks, and endpoints continuously. We do not just alert you when things go wrong; our certified engineers actively investigate, troubleshoot, and remediate issues in real-time, often before the end-user is even aware of a problem.',
    benefits: [
      { title: 'True 24/7/365 Coverage', desc: 'Never miss a critical alert. We monitor your infrastructure day and night, holidays included.', icon: <Clock className="text-[#00E5FF]" /> },
      { title: 'Reduced Ticket Noise', desc: 'We filter out false positives and automate routine fixes, so your local team focuses on high-value tasks.', icon: <ShieldCheck className="text-[#0D6EFD]" /> },
      { title: 'Improved SLAs', desc: 'Drastically reduce your Mean Time to Resolution (MTTR) with proactive incident management.', icon: <Zap className="text-[#00E5FF]" /> },
    ],
    features: [
      'Server & Network Device Monitoring',
      'Automated Script Remediation',
      'Patch Management & Deployment',
      'Backup Monitoring & Verification',
      'Anti-Virus / EDR Alert Management',
      'Detailed Performance Reporting'
    ],
    process: [
      { step: '01', title: 'Audit & Discovery', desc: 'We audit your RMM configuration and establish alerting baselines.' },
      { step: '02', title: 'Runbook Creation', desc: 'Collaborative development of standard operating procedures and escalation paths.' },
      { step: '03', title: 'Monitoring Handover', desc: 'Our NOC team assumes 24/7 monitoring capabilities.' },
      { step: '04', title: 'Continuous Optimization', desc: 'Ongoing tuning of alerts to reduce noise and enhance automated remediation.' },
    ],
    useCases: [
      'MSPs looking to offer 24/7 coverage without hiring night-shift staff',
      'IT teams overwhelmed by alert noise from multiple management tools',
      'Organizations requiring strict compliance and uptime guarantees'
    ],
    whyChooseUs: [
      'Platform agnostic (we work with your existing RMM tools)',
      'Focus on first-touch remediation, not just ticket escalation',
      'Enterprise-grade security and SOC2 compliance'
    ],
    faqs: [
      { q: 'Do we need to switch our RMM tool?', a: 'No, our NOC seamlessly integrates with all major RMM platforms deployed in your environment.' },
      { q: 'How do you handle escalations?', a: 'We follow a customized runbook developed with you, detailing exactly when and how to escalate critical issues to your senior staff.' }
    ]
  },
  'service-desk': {
    id: 'service-desk',
    title: '24/7 Service Desk',
    shortDescription: 'White-labeled end-user support resolving tickets efficiently around the clock.',
    icon: <HeadphonesIcon size={32} className="text-[#0D6EFD]" />,
    heroHeadline: 'White-Labeled 24/7 Help Desk Support',
    heroSubheadline: 'Deliver exceptional, round-the-clock technical support to your end-users without the overhead of staffing an internal 24/7 team.',
    overview: 'Your clients expect immediate resolution to their technical issues, regardless of the time of day. Our white-labeled Service Desk acts as a transparent extension of your MSP, answering calls, emails, and chats as your company. From password resets to complex application troubleshooting, our communicators are trained to provide a superior customer experience.',
    benefits: [
      { title: 'Brand Consistency', desc: 'We answer the phone using your company name and follow your specific customer service guidelines.', icon: <Users className="text-[#00E5FF]" /> },
      { title: 'High First-Contact Resolution', desc: 'Our trained technicians aim to resolve issues on the very first call, minimizing escalations.', icon: <Zap className="text-[#0D6EFD]" /> },
      { title: 'Cost Efficiency', desc: 'Offer 24/7 support without the immense cost of hiring and managing a local night shift.', icon: <Activity className="text-[#00E5FF]" /> },
    ],
    features: [
      'Omnichannel Support (Phone, Email, Chat, Portal)',
      'Active Directory / M365 User Management',
      'Software Installation & Troubleshooting',
      'Printer & Peripheral Support',
      'VIP Executive Handling Protocols',
      'CSAT Collection and Reporting'
    ],
    process: [
      { step: '01', title: 'Knowledge Transfer', desc: 'We document your clients, specific environments, and support policies.' },
      { step: '02', title: 'System Integration', desc: 'We integrate with your PSA ticking system and set up phone routing.' },
      { step: '03', title: 'Soft Launch', desc: 'We begin handling select ticket queues to ensure quality and alignment.' },
      { step: '04', title: 'Full Deployment', desc: 'We take over 24/7 first-line support for your client base.' },
    ],
    useCases: [
      'Growing MSPs needing to mature their service offerings',
      'Firms wanting to protect their senior engineers from basic L1 tickets',
      'Companies expanding into new geographical time zones'
    ],
    whyChooseUs: [
      'Rigorous communication and empathy training for all agents',
      'Strict adherence to SLA metrics and response times',
      'Seamless PSA integration ensures you maintain complete ticket visibility'
    ],
    faqs: [
      { q: 'How do my clients know they are talking to you?', a: 'They do not. We operate 100% white-labeled under your brand name.' },
      { q: 'What happens if a ticket is too complex?', a: 'If a ticket exceeds our L1/L2 scope or requires on-site presence, we properly document the troubleshooting steps taken and escalate it to your internal team.' }
    ]
  },
  'software': {
    id: 'software',
    title: 'Software Development',
    shortDescription: 'Custom applications, API integrations, and automation scripts to optimize your operations.',
    icon: <Code2 size={32} className="text-[#00E5FF]" />,
    heroHeadline: 'Custom Software & API Integration',
    heroSubheadline: 'Automate manual processes, build custom client portals, and integrate disparate systems with our expert software development team.',
    overview: 'Standard out-of-the-box tools rarely fit your exact business workflows perfectly. Our Software Development division helps MSPs build custom integrations, automate repetitive tasks via scripting, and develop unique applications that differentiate you from competitors. We bridge the gap between your PSA, RMM, billing platforms, and external vendor APIs.',
    benefits: [
      { title: 'Eliminate Tedious Tasks', desc: 'Custom automation scripts reduce human error and save hundreds of hours monthly.', icon: <Zap className="text-[#0D6EFD]" /> },
      { title: 'Unified Data Workflows', desc: 'Connect disconnected platforms to ensure seamless data flow across your toolstack.', icon: <Network className="text-[#00E5FF]" /> },
      { title: 'Competitive Advantage', desc: 'Offer your clients custom portals and tools that other MSPs cannot provide.', icon: <ShieldCheck className="text-[#00E5FF]" /> },
    ],
    features: [
      'API Integrations (REST/GraphQL)',
      'Custom Web Application Development',
      'PowerShell & Python Automation Scripting',
      'Database Architecture & Migration',
      'Power Platform & CI/CD Pipelines',
      'Legacy Application Modernization'
    ],
    process: [
      { step: '01', title: 'Discovery & Scoping', desc: 'We analyze your workflows and identify automation opportunities.' },
      { step: '02', title: 'Architecture Design', desc: 'Our architects draft a secure, scalable solution blueprint.' },
      { step: '03', title: 'Agile Development', desc: 'We build the solution with regular check-ins and iterative feedback.' },
      { step: '04', title: 'Testing & Deployment', desc: 'Rigorous QA testing before smooth deployment into your production environment.' },
    ],
    useCases: [
      'MSPs needing custom billing integrations between their PSA and accounting software',
      'Building bespoke client reporting dashboards',
      'Creating complex onboarding/offboarding automation scripts'
    ],
    whyChooseUs: [
      'Deep understanding of the MSP software ecosystem (ConnectWise, Kaseya, HaloPSA)',
      'Security-first development methodologies',
      'Full intellectual property transfer upon project completion'
    ],
    faqs: [
      { q: 'Do you only develop for internal MSP use?', a: 'No, we can also build custom software solutions that you can resell or offer directly to your end clients.' },
      { q: 'What technologies do you use?', a: 'We specialize in modern stacks including React, Node.js, Python, .NET, and various cloud-native architectures on Azure and AWS.' }
    ]
  },
  'projects': {
    id: 'projects',
    title: 'Projects & Infrastructure',
    shortDescription: 'Specialized project engineers for cloud migrations, deployments, and infrastructure upgrades.',
    icon: <Server size={32} className="text-[#0D6EFD]" />,
    heroHeadline: 'Advanced Project & Infrastructure Solutions',
    heroSubheadline: 'Leverage our specialized engineers to execute complex cloud migrations, network overhauls, and infrastructure deployments flawlessly.',
    overview: 'Executing complex IT projects requires specialized skills that your daily support team may not possess, or may not have the capacity to handle. Our Projects & Infrastructure team provides you with senior architects and subject matter experts to plan, manage, and execute critical deployments. Gain the capability to say "yes" to complex client requests without burning out your core team.',
    benefits: [
      { title: 'Expand Service Capabilities', desc: 'Offer enterprise-grade cloud architecture and security solutions to your clients.', icon: <Globe className="text-[#00E5FF]" /> },
      { title: 'On-Time Project Delivery', desc: 'Dedicated project managers ensure scopes, timelines, and budgets stay on track.', icon: <Clock className="text-[#0D6EFD]" /> },
      { title: 'Risk Mitigation', desc: 'Expert architects design highly available, secure environments that prevent future issues.', icon: <ShieldCheck className="text-[#00E5FF]" /> },
    ],
    features: [
      'Azure, AWS & Google Cloud Migrations',
      'M365 Tenant Migrations & Consolidations',
      'Network Architecture & Redesign (Cisco, Meraki, Fortinet)',
      'Server Virtualization (VMware/Hyper-V)',
      'Security Compliance Audits & Remediation',
      'Disaster Recovery Planning & Implementation'
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Comprehensive review of the existing infrastructure and project goals.' },
      { step: '02', title: 'Statement of Work', desc: 'Detailed scoping, timeline estimation, and resource allocation.' },
      { step: '03', title: 'Execution', desc: 'Our engineers execute the deployment systematically alongside a Project Manager.' },
      { step: '04', title: 'Handover & Documentation', desc: 'Complete "as-built" documentation and handover to your support team.' },
    ],
    useCases: [
      'Migrating large on-premise environments to Microsoft Azure',
      'Executing company-wide network hardware refreshes',
      'Implementing Zero Trust security frameworks across an organization'
    ],
    whyChooseUs: [
      'Certified professionals (CCNP, Azure Solutions Architects, AWS Certified)',
      'White-labeled project execution',
      'Strict adherence to ITIL project methodologies'
    ],
    faqs: [
      { q: 'Can you work alongside our engineers?', a: 'Absolutely. We can take full ownership of a project or provide specialized SME staff augmentation for your internal project team.' },
      { q: 'How do you handle project billing?', a: 'Projects can be structured on a Time & Materials (T&M) basis or as a fixed-fee milestone-based Statement of Work (SOW).' }
    ]
  },
  'administrative': {
    id: 'administrative',
    title: 'Administrative Services',
    shortDescription: 'Back-office support for dispatching, billing, and general MSP administrative tasks.',
    icon: <Briefcase size={32} className="text-[#00E5FF]" />,
    heroHeadline: 'MSP Back-Office & Administrative Support',
    heroSubheadline: 'Streamline your operations with dedicated back-office professionals managing dispatch, billing, procurement, and administrative workflows.',
    overview: 'As an MSP grows, the operational overhead grows with it. Dispatching tickets correctly, ensuring billing accuracy, managing vendor procurement, and handling daily administration can bog down your leadership team. Our Administrative Services provide you with trained MSP back-office professionals who seamlessly integrate into your PSA to keep your business running smoothly behind the scenes.',
    benefits: [
      { title: 'Reclaim Leadership Time', desc: 'Free your directors and managers from daily billing and administrative fires.', icon: <Clock className="text-[#0D6EFD]" /> },
      { title: 'Improved Ticket Flow', desc: 'Dedicated dispatchers ensure tickets are routed rapidly to the correct technical resources.', icon: <Activity className="text-[#00E5FF]" /> },
      { title: 'revenue Leakage Prevention', desc: 'Meticulous time entry auditing and agreement reconciliation ensures you bill for everything you do.', icon: <ShieldCheck className="text-[#0D6EFD]" /> },
    ],
    features: [
      'Ticket Triage & Dispatching',
      'Service Board Management & Escalation Tracking',
      'Quoting & Procurement assistance',
      'Billing Reconciliation & Invoicing',
      'Customer Onboarding Documentation',
      'Time Entry Auditing & QA'
    ],
    process: [
      { step: '01', title: 'Process Mapping', desc: 'We document your current operational workflows and dispatch rules.' },
      { step: '02', title: 'Resource Assignment', desc: 'You are matched with administrative staff experienced in your specific PSA.' },
      { step: '03', title: 'Shadowing', desc: 'Our team shadows your current operations to master the nuances of your business.' },
      { step: '04', title: 'Full Optimization', desc: 'We take over daily operations, implementing best practices to increase efficiency.' },
    ],
    useCases: [
      'MSPs where the owner is still acting as the primary dispatcher',
      'Firms struggling with inaccurate billing or missed revenue',
      'Organizations needing dedicated project coordinators'
    ],
    whyChooseUs: [
      'Deep expertise in standard MSP PSAs (ConnectWise Manage, Autotask, HaloPSA)',
      'Highly organized professionals with strong English communication skills',
      'A focus on data hygiene and process standardization'
    ],
    faqs: [
      { q: 'What hours do your dispatchers work?', a: 'They work the hours you dictate, typically aligning with your core business hours for maximum ticket flow efficiency.' },
      { q: 'Can they help with customer quotes?', a: 'Yes, they can assist with building quotes in tools like Quosal/Sell or QuoteWerks based on your technical team\'s specifications.' }
    ]
  }
};
