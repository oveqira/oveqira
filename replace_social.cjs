const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf-8');

const replacement = `
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Marketing & Management',
    eyebrow: 'SOCIAL MEDIA MARKETING & MANAGEMENT',
    shortDescription: 'Build a strategic social presence with intentional content, community management, and consistent branding.',
    description: 'Give Your Brand Something Worth Following.',
    additionalDescription: 'We build social media strategies that combine positioning, content, creative, publishing, audience understanding, and continuous improvement to create a stronger digital presence. From content planning and creative production to publishing, management, community interaction, and performance analysis, Oveqira helps businesses turn social media into an intentional brand and growth channel.',
    featured: true,
    order: 6,
    heroImage: 'social-media',
    problem: {
      eyebrow: 'POSTING IS NOT THE STRATEGY',
      heading: 'A Busy Feed Doesn\\'t Necessarily Mean a Strong Brand.',
      description: 'A business can post every day and still struggle to build recognition, trust, or meaningful engagement. Without a clear purpose, social media quickly becomes a cycle of creating content simply because something needs to be posted.',
      points: [
        { title: 'No Clear Direction', description: 'Content needs a reason to exist beyond filling the calendar.' },
        { title: 'Inconsistent Brand', description: 'Different styles, messages, and visuals can make a brand difficult to recognize.' },
        { title: 'Repetitive Content', description: 'Audiences need useful, interesting, entertaining, educational, or meaningful reasons to pay attention.' },
        { title: 'Weak Creative', description: 'Good ideas can disappear when the execution doesn\\'t earn attention.' },
        { title: 'No Content System', description: 'Without planning, content production becomes reactive and difficult to sustain.' },
        { title: 'No Learning Loop', description: 'Performance should inform future content rather than simply becoming a monthly report.' }
      ]
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      heading: 'Build the Brand. Don\\'t Just Fill the Feed.',
      description: 'We treat social media as an extension of the brand. That means understanding what the business should be known for, who it wants to reach, what those people care about, and what kind of content can earn attention consistently.',
      points: [
        { title: 'Position', description: 'Define what the brand should communicate and be known for.' },
        { title: 'Plan', description: 'Create content pillars, themes, formats, campaigns, and publishing direction.' },
        { title: 'Create', description: 'Turn ideas into useful, visually strong, platform-appropriate content.' },
        { title: 'Engage', description: 'Maintain an active presence and support meaningful audience interaction where included.' },
        { title: 'Learn', description: 'Use content and audience signals to improve future decisions.' }
      ]
    },
    capabilities: [
      { title: 'Social Media Strategy', description: 'Define objectives, audiences, positioning, content direction, platforms, and priorities.' },
      { title: 'Content Strategy', description: 'Build content pillars, themes, formats, campaigns, and recurring content concepts.' },
      { title: 'Content Planning', description: 'Develop structured content calendars and publishing plans.' },
      { title: 'Social Media Management', description: 'Manage publishing, organization, scheduling, and channel activity according to scope.' },
      { title: 'Creative Development', description: 'Create visual directions for posts, carousels, stories, reels, campaigns, and other formats.' },
      { title: 'Short-Form Video', description: 'Develop concepts and content directions for short-form video where relevant.' },
      { title: 'Copywriting', description: 'Create captions, hooks, calls to action, educational copy, promotional messaging, and other social copy.' },
      { title: 'Community Management', description: 'Support audience interaction, comments, messages, and community activity where included in scope.' },
      { title: 'Content Production', description: 'Support photography, videography, graphics, and other creative production where required.' },
      { title: 'Analytics', description: 'Review relevant social performance indicators and audience signals.' },
      { title: 'Optimization', description: 'Refine content themes, formats, creative, and publishing direction based on evidence.' }
    ],
    contentPillars: {
      eyebrow: 'CONTENT WITH A PURPOSE',
      heading: 'Every Post Should Have a Job.',
      pillars: [
        { title: 'Educate', description: 'Teach something useful and demonstrate expertise.' },
        { title: 'Build Trust', description: 'Show the people, process, thinking, experience, and values behind the business.' },
        { title: 'Engage', description: 'Create content that invites conversation, participation, or curiosity.' },
        { title: 'Demonstrate', description: 'Show products, services, work, processes, transformations, or capabilities.' },
        { title: 'Convert', description: 'Present relevant offers, services, products, or next steps.' },
        { title: 'Humanize', description: 'Give the audience a reason to connect with the brand beyond the transaction.' }
      ],
      closing: 'Note: Not every brand needs every pillar. The final content mix should depend on the business and audience.'
    },
    platformStrategy: {
      eyebrow: 'THE PLATFORM CHANGES THE PLAY',
      heading: 'One Idea Doesn\\'t Have to Mean One Identical Post Everywhere.',
      platforms: [
        { name: 'Instagram', description: 'Visual storytelling, short-form video, carousels, brand presence, community, and discovery.' },
        { name: 'Facebook', description: 'Community, local audiences, content distribution, advertising support, and broader reach where relevant.' },
        { name: 'LinkedIn', description: 'Professional expertise, company perspective, thought leadership, and B2B communication.' },
        { name: 'YouTube', description: 'Long-form education, short-form video, demonstrations, explainers, and deeper content.' },
        { name: 'Other Platforms', description: 'Consider only where the audience and business objective justify the investment.' }
      ],
      closing: 'The strategy should adapt to the platform rather than copying the same content everywhere without context.'
    },
    contentProduction: {
      eyebrow: 'FROM IDEA TO ASSET',
      heading: 'Strategy Becomes Real When Something Gets Made.',
      description: 'Oveqira supports content production through graphic design, carousels, stories, short-form video, photography, and campaign creatives scoped specifically to the project.',
      areas: [
        'graphic design', 'carousels', 'static posts', 'stories', 'short-form video', 'reels', 'photography', 'videography', 'product visuals', 'campaign creatives', 'educational content', 'promotional content'
      ],
      link: { text: 'Explore Photography & Videography', url: '/services/photography-videography' }
    },
    contentSystem: {
      eyebrow: 'CONSISTENCY WITHOUT REPETITION',
      heading: 'A Strong Content System Makes Consistency Easier.',
      stages: [
        { title: 'Monthly Direction', description: 'Define the major themes and priorities.' },
        { title: 'Content Pillars', description: 'Assign content ideas to strategic categories.' },
        { title: 'Formats', description: 'Choose the most appropriate formats.' },
        { title: 'Production', description: 'Create and review the assets.' },
        { title: 'Publishing', description: 'Schedule and publish according to the agreed plan.' },
        { title: 'Analysis', description: 'Review what audiences responded to.' },
        { title: 'Improvement', description: 'Use the learning to shape the next cycle.' }
      ]
    },
    brandConsistency: {
      eyebrow: 'RECOGNITION MATTERS',
      heading: 'Your Feed Should Look Like One Brand, Not Fifty Different Ideas.',
      description: 'Consistency does not mean making every post identical. It means creating recognizable visual and verbal patterns that help people understand who the brand is.',
      areas: [
        'typography', 'color', 'imagery', 'layouts', 'tone of voice', 'illustration style', 'photography direction', 'video treatment', 'CTA language', 'content structure'
      ]
    },
    businessJourney: {
      eyebrow: 'SOCIAL SHOULD CONNECT SOMEWHERE',
      heading: 'The Best Social Strategy Doesn\\'t End at the Post.',
      path: ['Social Discovery', 'Profile', 'Website', 'Offer', 'Trust', 'Action'],
      description: 'Different businesses prioritize different outcomes. Depending on the objective, a strategic presence can support multiple parts of the customer journey.',
      outcomes: [
        'website traffic', 'brand awareness', 'enquiries', 'product discovery', 'event promotion', 'content distribution', 'community building', 'customer education', 'remarketing', 'campaign support'
      ]
    },
    socialAnalytics: {
      eyebrow: 'LEARN FROM THE AUDIENCE',
      heading: 'The Feed Gives You Feedback. Pay Attention.',
      metrics: [
        'reach', 'impressions', 'engagement', 'saves', 'shares', 'comments', 'profile visits', 'link clicks', 'video views', 'watch time', 'audience growth', 'website actions'
      ],
      description: 'Metrics should be interpreted according to the content format and business objective. A high-view video and a high-converting service post may play very different roles.'
    },
    deliverables: [
      'social media strategy', 'audience research', 'platform strategy', 'content pillars', 'content calendar', 'content concepts', 'social copy', 'creative direction', 'graphic content', 'short-form video concepts', 'photography/videography support', 'publishing', 'social media management', 'community management', 'analytics', 'reporting', 'optimization recommendations'
    ],
    deliverablesDisclaimer: 'Exact deliverables depend on platforms, posting frequency, content volume, production requirements, management scope, and engagement model.',
    process: [
      { number: '01', title: 'Discover', description: 'Understand the business, audience, brand, market, competitors, and goals.' },
      { number: '02', title: 'Strategize', description: 'Define positioning, platforms, content pillars, formats, themes, and priorities.' },
      { number: '03', title: 'Plan', description: 'Build content calendars, campaigns, production requirements, and publishing schedules.' },
      { number: '04', title: 'Create', description: 'Develop visual assets, videos, copy, photography, and supporting content.' },
      { number: '05', title: 'Publish & Engage', description: 'Publish according to the agreed schedule and support audience interaction where included.' },
      { number: '06', title: 'Analyze & Improve', description: 'Review meaningful signals and use them to shape future content.' }
    ],
    contentFormats: {
      eyebrow: 'FORMAT LIBRARY',
      heading: 'Adapting to the Medium.',
      formats: [
        { title: 'Carousels', description: 'Educational, narrative, comparison, checklist, and insight-led content.' },
        { title: 'Reels & Short Videos', description: 'Hooks, explainers, demonstrations, stories, behind-the-scenes, and trend-aware formats.' },
        { title: 'Static Posts', description: 'Announcements, insights, offers, quotes, visual explanations, and brand communication.' },
        { title: 'Stories', description: 'Quick updates, interaction, behind-the-scenes, reminders, and supporting content.' },
        { title: 'Photography', description: 'Products, people, spaces, processes, events, and brand storytelling.' },
        { title: 'Video', description: 'Brand films, explainers, demonstrations, interviews, campaigns, and short-form content.' },
        { title: 'Long-Form', description: 'Thought leadership, educational content, articles, and deeper brand communication.' }
      ]
    },
    relatedServices: ['digital-marketing', 'google-meta-ads', 'photography-videography', 'web-design-development', 'seo', 'ai-automation', 'ui-ux'],
    whyOveqira: [
      { title: 'Strategy Before Execution', description: 'We decide what the content needs to achieve before deciding what to publish.' },
      { title: 'Built Around Your Brand', description: 'Your content should build recognition rather than imitate whatever is trending.' },
      { title: 'Design That Has a Purpose', description: 'Every visual should communicate something meaningful.' },
      { title: 'Performance Matters', description: 'Audience signals should inform future content decisions.' },
      { title: 'One Creative + Digital Team', description: 'Strategy, design, content, websites, advertising, SEO, photography, and technology can work together.' },
      { title: 'Built for Long-Term Growth', description: 'The goal is a sustainable content system, not a short burst of activity.' }
    ],
    faq: [
      { id: 'faq-1', question: 'Which social media platforms do you manage?', answer: 'Platform selection depends on the audience and business objectives. Oveqira can scope management around the platforms that make strategic sense.', featured: false, order: 1 },
      { id: 'faq-2', question: 'Do you create the content?', answer: 'Yes. Content strategy, copy, graphic content, short-form video, photography, and videography can be included depending on scope.', featured: false, order: 2 },
      { id: 'faq-3', question: 'Do you provide a content calendar?', answer: 'Yes. Content planning and calendars can be part of a social media engagement.', featured: false, order: 3 },
      { id: 'faq-4', question: 'How often should a business post?', answer: 'There is no universal ideal frequency. It depends on the platform, audience, content quality, production capacity, and business objectives.', featured: false, order: 4 },
      { id: 'faq-5', question: 'Do you guarantee follower growth?', answer: 'No. Audience growth depends on content quality, consistency, audience fit, platform dynamics, market conditions, and many other factors.', featured: false, order: 5 },
      { id: 'faq-6', question: 'Do you respond to comments and messages?', answer: 'Community management can be included when specifically scoped.', featured: false, order: 6 },
      { id: 'faq-7', question: 'Can you manage an existing social media account?', answer: 'Yes. Existing accounts can be audited, restructured, refreshed, and managed.', featured: false, order: 7 },
      { id: 'faq-8', question: 'Can you create reels and short-form videos?', answer: 'Yes. Short-form video concepts and production can be included depending on scope.', featured: false, order: 8 },
      { id: 'faq-9', question: 'Do you provide photography and videography?', answer: 'Yes. Oveqira offers photography and videography as part of its broader creative services.', featured: false, order: 9 },
      { id: 'faq-10', question: 'Can social media help generate leads?', answer: 'It can support awareness, discovery, trust, traffic, and enquiries, but outcomes depend on the business, offer, audience, content, conversion journey, and broader marketing system.', featured: false, order: 10 },
      { id: 'faq-11', question: 'Can you run paid ads alongside social media management?', answer: 'Yes. Paid advertising can be integrated where appropriate through the Google & Meta Ads service.', featured: false, order: 11 }
    ],
    cta: {
      heading: 'Let\\'s Give Your Brand Something Worth Saying.',
      description: 'Tell us about your business, audience, current social presence, and what you want your content to accomplish. We\\'ll help shape a strategy that fits the brand and the business.',
      primaryLabel: 'Build My Social Strategy',
      secondaryLabel: 'Talk to Oveqira'
    },
    seo: {
      title: 'Social Media Marketing & Management | Oveqira',
      description: 'Oveqira provides social media strategy, content planning, creative production, publishing, management, community support, analytics, and optimization.'
    }
  },
`;

const regex = /\{\s*id:\s*'social-media'[\s\S]*?seo:\s*\{[\s\S]*?\}\s*\}/;
content = content.replace(regex, replacement.trim());
fs.writeFileSync('src/data/services.ts', content);
