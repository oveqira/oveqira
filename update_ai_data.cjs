const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

const replacement = `
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Automation',
    eyebrow: 'AI & AUTOMATION',
    shortDescription: 'Practical AI and automation systems designed to connect tools and improve operational efficiency.',
    description: 'Make Your Business Run Smarter.',
    additionalDescription: 'We design practical AI and automation systems that reduce repetitive work, connect tools, improve customer journeys, and help businesses operate more efficiently. From AI assistants and chatbots to WhatsApp workflows, email automation, lead routing, API integrations, and internal processes, Oveqira builds systems around the way your business actually works.',
    featured: true,
    order: 8,
    heroImage: 'ai-automation',
    problem: {
      eyebrow: 'REPETITION HAS A COST',
      heading: 'Your Team Shouldn\\'t Have to Do the Same Digital Task Every Day.',
      description: 'Many businesses lose time moving information between tools, replying to repetitive questions, following up with leads, copying data, sending routine emails, or manually managing processes that could be structured more efficiently. Automation doesn\\'t mean removing people from the process. It means allowing technology to handle predictable work so people can spend more time on work that requires judgment, creativity, and relationships.',
      points: [
        { title: 'Repetitive Tasks', description: 'The same actions happen repeatedly without adding much strategic value.' },
        { title: 'Manual Data Entry', description: 'Information is copied between forms, spreadsheets, CRMs, emails, and other tools.' },
        { title: 'Slow Lead Follow-Up', description: 'Important enquiries can become harder to convert when responses and routing depend entirely on manual work.' },
        { title: 'Too Many Tools', description: 'Disconnected systems create unnecessary operational friction.' },
        { title: 'Repetitive Customer Questions', description: 'Teams repeatedly answer the same common questions.' },
        { title: 'No Workflow Visibility', description: 'When processes live in people\\'s heads, it becomes harder to manage, measure, and improve them.' }
      ]
    },
    aiVsAutomation: {
      eyebrow: 'USE THE RIGHT TOOL',
      heading: 'Not Everything Needs AI.',
      description: 'Some workflows need predictable automation. Others benefit from AI\\'s ability to interpret language, classify information, generate responses, or handle less structured inputs. We determine which approach fits the problem.',
      automation: {
        title: 'AUTOMATION',
        points: ['Predictable processes', 'Scheduled tasks', 'Notifications', 'Data movement', 'Rule-based decisions', 'Repetitive actions', 'System integrations'],
        example: 'Form Submission → CRM → Email Notification → Task Creation'
      },
      ai: {
        title: 'AI',
        points: ['Natural-language conversations', 'Classification & summarization', 'Content generation', 'Document understanding', 'Intelligent routing', 'Contextual assistance', 'Handling less structured information'],
        example: 'Customer Message → AI Understanding → Intent Detection → Appropriate Response / Human Handoff'
      },
      closing: 'The goal is not to add AI everywhere. The goal is to build the simplest system that solves the actual problem.'
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'Start With the Workflow, Not the Technology.',
      description: 'We first understand how work currently moves through the business. Then we identify repetitive steps, bottlenecks, decisions, handoffs, and opportunities for improvement before selecting the technology.',
      points: [
        { title: 'Map', description: 'Understand the current workflow.' },
        { title: 'Identify', description: 'Find repetitive work, bottlenecks, delays, and unnecessary manual steps.' },
        { title: 'Simplify', description: 'Improve the process before automating it.' },
        { title: 'Connect', description: 'Integrate the tools and systems involved.' },
        { title: 'Automate', description: 'Introduce rules, workflows, AI, or a combination where appropriate.' },
        { title: 'Monitor', description: 'Review how the system behaves and improve it over time.' }
      ]
    },
    capabilities: [
      { title: 'Workflow Automation', description: 'Connect business steps so information moves automatically between processes.' },
      { title: 'Lead Automation', description: 'Capture, classify, route, notify, and follow up with new enquiries.' },
      { title: 'Email Automation', description: 'Create triggered notifications, follow-ups, sequences, and internal workflows.' },
      { title: 'WhatsApp Automation', description: 'Build appropriate automated communication and workflow experiences through supported WhatsApp integrations.' },
      { title: 'AI Chatbots', description: 'Create conversational assistants for common questions, information retrieval, lead qualification, and support workflows.' },
      { title: 'AI Assistants', description: 'Build specialized AI workflows for internal or customer-facing tasks.' },
      { title: 'API Integrations', description: 'Connect platforms and systems through APIs where appropriate.' },
      { title: 'CRM Automation', description: 'Move and organize lead/customer information across systems.' },
      { title: 'Data Workflows', description: 'Automate structured information movement between tools.' },
      { title: 'Notifications & Alerts', description: 'Trigger internal notifications when defined events occur.' },
      { title: 'Document Workflows', description: 'Use automation or AI for appropriate document processing, extraction, classification, or routing.' },
      { title: 'Reporting Automation', description: 'Automate recurring data collection or reporting workflows where technically appropriate.' }
    ],
    useCases: {
      eyebrow: 'WHERE AUTOMATION HELPS',
      heading: 'Turn Repetitive Steps Into Connected Workflows.',
      cases: [
        { title: 'Lead Capture', flow: ['Website Form', 'Lead Database', 'Internal Notification', 'Follow-Up'] },
        { title: 'Customer Enquiries', flow: ['Message', 'AI Classification', 'Relevant Information', 'Human Handoff'] },
        { title: 'Appointment Requests', flow: ['Request', 'Availability/Workflow', 'Confirmation', 'Reminder'] },
        { title: 'Internal Notifications', flow: ['Business Event', 'Rule', 'Relevant Team', 'Notification'] },
        { title: 'Email Follow-Up', flow: ['Trigger', 'Personalized Message', 'Delay', 'Follow-Up', 'Escalation'] },
        { title: 'Content Workflow', flow: ['Idea', 'Draft', 'Review', 'Approval', 'Publishing'] },
        { title: 'Data Synchronization', flow: ['System A', 'API/Integration', 'System B'] },
        { title: 'Customer Support', flow: ['Question', 'Knowledge Source', 'AI/Automation', 'Response or Escalation'] }
      ]
    },
    aiChatbots: {
      eyebrow: 'AI CONVERSATIONAL SYSTEMS',
      heading: 'Give Customers a Faster Way to Get Answers.',
      description: 'AI assistants can help handle common questions, guide visitors through information, qualify enquiries, and route conversations when human attention is needed.',
      workflows: ['FAQ responses', 'Service information', 'Product information', 'Lead qualification', 'Guided conversations', 'Knowledge retrieval', 'Basic customer support', 'Enquiry collection', 'Human handoff', 'Multilingual experiences'],
      limitations: ['Avoids inventing information (hallucinations)', 'Escalates uncertain or sensitive questions', 'Protects private information', 'Uses approved knowledge sources', 'Provides human handoff when appropriate']
    },
    whatsappAutomation: {
      eyebrow: 'WHATSAPP WORKFLOWS',
      heading: 'Turn Conversations Into Structured Workflows.',
      description: 'For businesses that communicate heavily through WhatsApp, appropriate automation can help structure repetitive communication and connect conversations with internal systems.',
      workflows: ['Enquiry capture', 'FAQs', 'Lead qualification', 'Notifications', 'Appointment reminders', 'Follow-ups', 'Order/status updates', 'Internal routing'],
      limitations: ['Depends on WhatsApp Business requirements', 'Requires available APIs', 'Must adhere to platform policies', 'Requires business verification', 'Uses approved message templates', 'Subject to technical access constraints']
    },
    integrations: {
      eyebrow: 'CONNECTED SYSTEMS',
      heading: 'Your Tools Should Talk to Each Other.',
      description: 'Integrations can reduce manual data movement and create more connected workflows between the tools a business already uses.',
      categories: ['Website', 'CRM', 'Email', 'WhatsApp', 'Analytics', 'Payments', 'Databases', 'Internal Tools', 'APIs'],
      closing: 'Available integrations depend on the platform\\'s APIs, permissions, technical constraints, and project requirements.'
    },
    humanInTheLoop: {
      eyebrow: 'AUTOMATION WITH OVERSIGHT',
      heading: 'Smart Systems Know When to Hand the Work Back.',
      description: 'Not every decision should be automated. For sensitive, uncertain, complex, or high-value situations, the workflow should allow a person to review or take over.',
      flowStart: 'Automation',
      check: 'Confidence / Rule Check',
      paths: [
        { label: 'Clear & Safe', outcome: 'Continue automatically' },
        { label: 'Uncertain / Sensitive', outcome: 'Escalate to Human' },
        { label: 'High-Value Decision', outcome: 'Human Review' }
      ]
    },
    security: {
      eyebrow: 'BUILT RESPONSIBLY',
      heading: 'Automation Should Reduce Risk, Not Create New Problems.',
      points: [
        'Access control',
        'Permissions',
        'Data minimization',
        'Secure API credentials',
        'Logging where appropriate',
        'Human review',
        'Privacy considerations',
        'Failure handling',
        'Fallback workflows',
        'Third-party platform limitations'
      ],
      closing: 'The appropriate security and privacy architecture depends on the systems, data, industry, and use case involved.'
    },
    transformation: {
      eyebrow: 'WORKFLOW TRANSFORMATION',
      heading: 'From Manual Chain to Connected System.',
      before: {
        title: 'BEFORE (Manual)',
        flow: ['Customer Enquiry', 'Manual Reading', 'Copy Information', 'Find Team Member', 'Send Email', 'Update Spreadsheet', 'Follow Up Manually']
      },
      after: {
        title: 'AFTER (Automated)',
        flow: ['Customer Enquiry', 'Automated Capture', 'Classification', 'CRM Update', 'Team Notification', 'Follow-Up Workflow', 'Human Handoff When Needed']
      }
    },
    process: [
      { number: '01', title: 'Discover', description: 'Understand how the business currently works.' },
      { number: '02', title: 'Map', description: 'Document the workflow, tools, decisions, inputs, outputs, and handoffs.' },
      { number: '03', title: 'Simplify', description: 'Remove unnecessary steps before introducing automation.' },
      { number: '04', title: 'Build', description: 'Configure workflows, integrations, AI systems, and supporting interfaces.' },
      { number: '05', title: 'Test', description: 'Test normal conditions, edge cases, errors, fallbacks, permissions, and human handoffs.' },
      { number: '06', title: 'Launch & Improve', description: 'Deploy the system and refine it based on real-world usage.' }
    ],
    deliverables: [
      'Workflow discovery and process mapping',
      'Automation strategy and workflow architecture',
      'Automation setup',
      'AI assistant/chatbot',
      'WhatsApp workflows',
      'Email automation and lead routing',
      'API integrations and CRM workflows',
      'Notifications and data synchronization',
      'Documentation, testing, and launch support',
      'Optimization recommendations'
    ],
    deliverablesDisclaimer: 'Exact deliverables depend on the workflow, platforms, integrations, technical complexity, and project scope.',
    relatedServices: ['web-design-development', 'ui-ux', 'digital-marketing', 'google-meta-ads', 'social-media', 'custom-digital-products'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'Understand the workflow before choosing the technology.' },
      { title: 'Built Around Your Business', description: 'Systems should fit the way the business actually operates.' },
      { title: 'Design That Has a Purpose', description: 'Customer-facing automation should still feel clear and human.' },
      { title: 'Performance Matters', description: 'Systems should be reliable, testable, and observable.' },
      { title: 'One Creative + Digital Team', description: 'Automation can connect with websites, marketing, design, content, and digital products.' },
      { title: 'Built for Long-Term Growth', description: 'Systems should be maintainable and adaptable as the business changes.' }
    ],
    faq: [
      { id: 'faq-1', question: 'What kind of business processes can you automate?', answer: 'Common examples include lead capture, notifications, email workflows, data synchronization, customer enquiries, reporting, repetitive internal tasks, and other structured processes.', featured: false, order: 1 },
      { id: 'faq-2', question: 'Do you only build AI solutions?', answer: 'No. Traditional automation can often be the better solution for predictable workflows. AI is used where it provides meaningful value.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Can you build an AI chatbot for our website?', answer: 'Yes. AI chatbots can be designed for appropriate use cases such as FAQs, lead qualification, information retrieval, and customer guidance.', featured: false, order: 3 },
      { id: 'faq-4', question: 'Can you automate WhatsApp?', answer: 'Yes, where the required WhatsApp Business/API infrastructure and platform requirements are available.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Can AI answer every customer question?', answer: 'No. AI systems should operate within defined knowledge and business boundaries and provide human escalation when appropriate.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Can you connect our CRM with our website?', answer: 'Potentially, depending on the CRM, available APIs, permissions, and technical requirements.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Can you connect multiple tools?', answer: 'Yes, where appropriate integrations or APIs are available.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Will automation remove the need for employees?', answer: 'The goal is not necessarily to replace people. Automation can handle repetitive or predictable work while people remain responsible for judgment, relationships, and complex decisions.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Can you automate lead follow-up?', answer: 'Yes. Lead workflows can capture, route, notify, and follow up with prospects according to the defined process.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can you integrate AI with existing systems?', answer: 'Potentially. Integration depends on the systems, APIs, access, data structure, and use case.', featured: false, order: 10 },
      { id: 'faq-11', question: 'How secure is an AI automation system?', answer: 'Security depends on the architecture, platforms, data involved, permissions, credentials, and implementation. Security and privacy requirements should be considered during system design.', featured: false, order: 11 },
      { id: 'faq-12', question: 'Can you maintain the automation after launch?', answer: 'Ongoing maintenance and optimization can be scoped depending on the system and engagement model.', featured: false, order: 12 }
    ],
    cta: {
      heading: 'Let\\'s Find the Work Your Business Shouldn\\'t Have to Do Manually.',
      description: 'Tell us about the process that keeps consuming time, the tools involved, and what you wish happened automatically. We\\'ll help determine whether automation, AI, integration, or a simpler process is the right answer.',
      primaryLabel: 'Automate a Workflow',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'AI & Automation Services | Oveqira',
      description: 'Oveqira builds practical AI and automation systems including chatbots, WhatsApp workflows, email automation, API integrations, lead workflows, and business process automation.'
    }
  }
];
`;

const regex = /\{\s*id:\s*'ai-automation'[\s\S]*?seo:\s*\{[\s\S]*?\}\s*\}\s*\];/;
content = content.replace(regex, replacement.trim());
fs.writeFileSync('src/data/services.ts', content);
