const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

const replacement = `
  {
    id: 'photography-videography',
    slug: 'photography-videography',
    title: 'Photography & Videography',
    eyebrow: 'PHOTOGRAPHY & VIDEOGRAPHY',
    shortDescription: 'Purposeful visual storytelling designed to build brand perception and commercial impact.',
    description: 'Make Your Brand Worth Looking At.',
    additionalDescription: 'We create purposeful photography and video content that helps businesses communicate their products, people, spaces, stories, and identity with greater clarity and impact. From creative direction and production planning to photography, videography, short-form content, and campaign assets, Oveqira creates visuals designed for the places your audience actually sees them.',
    featured: true,
    order: 7,
    heroImage: 'photography-videography',
    problem: {
      eyebrow: 'PEOPLE SEE BEFORE THEY READ',
      heading: 'Your Visuals Shape the Story Before Your Words Do.',
      description: 'A product image, website banner, social post, campaign video, or team photograph can influence how people perceive a business before they understand everything it offers. When visual content feels inconsistent, generic, outdated, or disconnected from the brand, it can weaken an otherwise strong business.',
      points: [
        { title: 'Generic Visuals', description: 'Stock imagery can make a brand feel interchangeable.' },
        { title: 'Inconsistent Identity', description: 'Different photography styles can make the brand feel fragmented.' },
        { title: 'Poor Product Presentation', description: 'Good products can lose perceived value when photographed without intention.' },
        { title: 'Content Shortage', description: 'Without a planned content library, businesses constantly struggle to find something relevant to publish.' },
        { title: 'Wrong Format', description: 'A website hero, Instagram Reel, product page, and advertisement all have different visual requirements.' },
        { title: 'No Creative Direction', description: 'A camera can capture an image. Strategy determines what the image needs to communicate.' }
      ]
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'We Don\\'t Just Capture the Shot. We Plan What It Needs to Say.',
      description: 'Strong visual content begins before the camera turns on. We consider the brand, audience, platform, message, environment, subject, composition, and intended use before production begins.',
      points: [
        { title: 'Understand', description: 'Learn the brand, audience, products, people, campaign, and intended outcomes.' },
        { title: 'Concept', description: 'Define the visual direction, mood, story, references, formats, and creative requirements.' },
        { title: 'Prepare', description: 'Plan locations, subjects, props, shot lists, production requirements, and logistics.' },
        { title: 'Produce', description: 'Capture photography and video with attention to composition, lighting, movement, detail, and brand consistency.' },
        { title: 'Deliver', description: 'Prepare organized assets according to the agreed formats and intended channels.' }
      ]
    },
    photographyCapabilities: {
      eyebrow: 'PHOTOGRAPHY',
      heading: 'Images Built to Represent the Business.',
      items: [
        { title: 'Product Photography', description: 'Purposeful imagery for products, catalogues, websites, e-commerce, campaigns, and marketing.' },
        { title: 'Brand Photography', description: 'Visuals that communicate the identity, personality, and world of a business.' },
        { title: 'Corporate Photography', description: 'Professional imagery for teams, offices, leadership, websites, and communications.' },
        { title: 'Portrait Photography', description: 'Professional portraits designed around personal or professional brand identity.' },
        { title: 'Lifestyle Photography', description: 'Natural, contextual imagery that shows products or services in use.' },
        { title: 'Event Photography', description: 'Coverage for launches, conferences, celebrations, corporate events, and other occasions.' },
        { title: 'Architectural & Interior', description: 'Spaces, buildings, interiors, and environments photographed with visual precision.' },
        { title: 'Social Media Photography', description: 'Content designed around the formats and creative requirements of social platforms.' }
      ]
    },
    videographyCapabilities: {
      eyebrow: 'VIDEOGRAPHY',
      heading: 'Motion Gives the Brand Another Dimension.',
      items: [
        { title: 'Brand Films', description: 'Visual stories designed to communicate the identity and perspective of a business.' },
        { title: 'Promotional Videos', description: 'Focused videos supporting products, services, offers, launches, or campaigns.' },
        { title: 'Social Media Videos', description: 'Short-form video designed for modern social platforms.' },
        { title: 'Reels & Short-Form', description: 'Fast, focused visual content built around hooks, ideas, products, people, or stories.' },
        { title: 'Product Videos', description: 'Demonstrate products through movement, detail, usage, and visual storytelling.' },
        { title: 'Explainer Videos', description: 'Simplify a product, service, process, or concept.' },
        { title: 'Corporate Videos', description: 'Professional business communication for teams, organizations, announcements, and presentations.' },
        { title: 'Event Videography', description: 'Capture key moments, atmosphere, activities, and experiences.' },
        { title: 'Interviews', description: 'Structured interview-based content for brands, founders, professionals, and organizations.' }
      ]
    },
    multiChannelContent: {
      eyebrow: 'ONE SHOOT. MANY USES.',
      heading: 'Create a Visual Library, Not a Single Asset.',
      description: 'A well-planned production can create a broader library of visual assets that supports multiple parts of the digital presence.',
      flowStart: 'Photoshoot / Video Shoot',
      channels: ['Website', 'Social Media', 'Google Ads', 'Meta Ads', 'Campaigns', 'Blog & Content', 'Presentations', 'Brand Assets'],
      closing: 'The exact deliverables and formats depend on the production plan and project scope.'
    },
    creativeDirection: {
      eyebrow: 'CREATIVE DIRECTION',
      heading: 'The Difference Is Often Decided Before the Camera Rolls.',
      description: 'Creative direction establishes the visual language of the production so the final assets feel intentional rather than accidental.',
      areas: ['visual references', 'moodboards', 'composition', 'lighting direction', 'color direction', 'styling', 'location', 'props', 'talent/subjects', 'shot lists', 'framing', 'camera movement', 'storytelling', 'platform formats']
    },
    socialFirstProduction: {
      eyebrow: 'BUILT FOR ATTENTION',
      heading: 'Content Designed for the Way People Consume It.',
      description: 'Modern content may need to work across multiple aspect ratios, platforms, and orientations. We plan productions around the medium.',
      formats: ['vertical video (9:16)', 'square content (1:1)', 'portrait imagery (4:5)', 'short-form video', 'stories', 'reels', 'carousels', 'website banners', 'product pages', 'advertisements']
    },
    commercialPurpose: {
      eyebrow: 'BEAUTY WITH A JOB TO DO',
      heading: 'Beautiful Content Should Still Have a Purpose.',
      purposes: [
        { title: 'Build Perception', description: 'Present the business with greater visual credibility.' },
        { title: 'Explain', description: 'Show products, processes, environments, or services clearly.' },
        { title: 'Attract', description: 'Create content capable of earning attention across digital channels.' },
        { title: 'Differentiate', description: 'Give the brand original visual material instead of relying on generic assets.' },
        { title: 'Support Conversion', description: 'Use stronger visuals to support product pages, landing pages, campaigns, and customer decisions.' }
      ],
      closing: 'Creative quality and commercial purpose don\\'t need to compete. The strongest work considers both.'
    },
    visualPortfolio: {
      eyebrow: 'THE WORK',
      heading: 'Frames That Say Something.',
      images: [
        { span: 'lg:col-span-2 lg:row-span-2', label: 'Campaign Visual' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Commercial Portrait' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Product Detail' },
        { span: 'lg:col-span-2 lg:row-span-1', label: 'Cinematic Motion Frame' },
        { span: 'lg:col-span-1 lg:row-span-2', label: 'Editorial Composition' },
        { span: 'lg:col-span-1 lg:row-span-1', label: 'Studio Lighting' },
        { span: 'lg:col-span-2 lg:row-span-1', label: 'Architectural Composition' }
      ]
    },
    productionTypes: {
      eyebrow: 'PRODUCTION TYPES',
      heading: 'Production Scaled to the Requirement.',
      types: [
        { title: 'Single-Day Shoot', description: 'Focused production around a specific campaign, product, event, or content requirement.' },
        { title: 'Recurring Content Production', description: 'Planned recurring shoots for brands that need a consistent visual pipeline.' },
        { title: 'Campaign Production', description: 'Purpose-built photography and video for launches, promotions, advertising, or major campaigns.' },
        { title: 'Product Content', description: 'Focused product photography and video for websites, e-commerce, social media, and marketing.' },
        { title: 'Brand Content', description: 'A broader visual library designed to establish a recognizable brand world.' },
        { title: 'Event Coverage', description: 'Photography and/or video coverage for important business events.' }
      ]
    },
    process: [
      { number: '01', title: 'Brief', description: 'Understand the business, objective, audience, visual requirements, and intended use.' },
      { number: '02', title: 'Concept', description: 'Develop the creative direction, mood, references, and production idea.' },
      { number: '03', title: 'Plan', description: 'Prepare locations, shot lists, schedules, subjects, props, equipment, and logistics.' },
      { number: '04', title: 'Shoot', description: 'Capture the agreed photography and video content.' },
      { number: '05', title: 'Edit', description: 'Select, edit, retouch, color-correct, cut, and prepare the agreed assets.' },
      { number: '06', title: 'Deliver', description: 'Organize and deliver final assets according to the agreed formats and requirements.' }
    ],
    deliverables: [
      'Photography: Selected high-resolution photographs',
      'Photography: Web-ready images & social-ready crops',
      'Photography: Product imagery, portraits, and campaign imagery',
      'Video: Edited video, short-form cuts, and social-ready formats',
      'Video: Campaign videos, product videos, and interview edits',
      'Creative: Visual direction and shot list',
      'Creative: Production planning and format planning',
      'Creative: Asset organization and delivery'
    ],
    deliverablesDisclaimer: 'Final deliverables are defined before production begins. Raw files and source footage are provided only when specifically included in the agreed project scope.',
    relatedServices: ['social-media', 'google-meta-ads', 'web-design-development', 'digital-marketing', 'ui-ux', 'ai-automation'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'We understand what the content needs to accomplish before production begins.' },
      { title: 'Built Around Your Brand', description: 'Visuals are created around the identity and personality of the business.' },
      { title: 'Design That Has a Purpose', description: 'Composition, format, and storytelling are considered intentionally.' },
      { title: 'One Creative + Digital Team', description: 'Photography and video can connect directly with websites, social media, advertising, and campaigns.' },
      { title: 'Built for Long-Term Growth', description: 'A good production can create a reusable visual library rather than a single moment of content.' }
    ],
    faq: [
      { id: 'faq-1', question: 'What types of photography do you offer?', answer: 'Oveqira can support product, brand, corporate, portrait, lifestyle, event, architectural, interior, and social-media photography depending on project requirements.', featured: false, order: 1 },
      { id: 'faq-2', question: 'What types of videos do you create?', answer: 'Services can include brand films, promotional videos, product videos, social videos, reels, explainers, corporate videos, interviews, and event coverage.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Do you provide both photography and videography?', answer: 'Yes. Projects can include photography, videography, or both depending on the production brief.', featured: false, order: 3 },
      { id: 'faq-4', question: 'Can you create content specifically for Instagram and social media?', answer: 'Yes. Production can be planned around vertical video, reels, stories, social imagery, and other platform-specific requirements.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Do you provide editing and retouching?', answer: 'Editing and appropriate post-production can be included according to the agreed production scope.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Can you help plan the shoot?', answer: 'Yes. Creative direction, shot lists, visual references, production planning, and format planning can be included.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Do you provide models or talent?', answer: 'Talent requirements can be discussed and scoped according to the production.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Can you shoot at our location?', answer: 'Location requirements can be planned around the project and production needs.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Do you provide raw photos or footage?', answer: 'Raw files are provided only when specifically included in the agreed project scope.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can one shoot create content for multiple platforms?', answer: 'Yes. Productions can be planned to create a broader content library across multiple formats, provided this is defined during planning.', featured: false, order: 10 },
      { id: 'faq-11', question: 'Do you also manage the social media where the content is used?', answer: 'Yes. Oveqira offers Social Media Marketing & Management as a separate service.', featured: false, order: 11 }
    ],
    cta: {
      heading: 'Let\\'s Create Visuals Your Brand Can Actually Use.',
      description: 'Tell us what you\\'re launching, promoting, documenting, or trying to communicate. We\\'ll help shape the creative direction and production approach around the job the content needs to do.',
      primaryLabel: 'Plan a Shoot',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'Photography & Videography Services | Oveqira',
      description: 'Oveqira creates professional photography and videography for brands, products, businesses, campaigns, websites, social media, and digital marketing.'
    }
  },
`;

const regex = /\{\s*id:\s*'photography-videography'[\s\S]*?seo:\s*\{[\s\S]*?\}\s*\}/;
content = content.replace(regex, replacement.trim());
fs.writeFileSync('src/data/services.ts', content);
