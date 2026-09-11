import * as fs from 'fs';
let content = fs.readFileSync('src/components/services/ServiceDetailBlocks.tsx', 'utf-8');

// I will now add rendering blocks for all the new digital product sections

const newBlocks = `
// Digital Products Custom Blocks
const ServiceWebsiteVsProductBlock = ({ data }: { data: NonNullable<Service['websiteVsProduct']> }) => {
  return (
    <div className="space-y-12 my-24 relative overflow-hidden bg-white dark:bg-[var(--surface-color)] p-8 md:p-16 border border-black/5 dark:border-white/5 rounded-3xl">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        {data.eyebrow && <Eyebrow className="justify-center">{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-[var(--text-primary)]">Website</h3>
            <p className="text-[var(--text-secondary)]">Usually focused on:</p>
          </div>
          <ul className="space-y-4">
            {data.website.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">{point}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-black/10 dark:border-white/10">
            <p className="text-sm font-medium mb-3">Examples:</p>
            <div className="flex flex-wrap gap-2">
              {data.website.examples.map((example, i) => (
                <span key={i} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs text-[var(--text-secondary)]">{example}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8 bg-[var(--accent)]/5 p-8 rounded-2xl border border-[var(--accent)]/10">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-[var(--accent)]">Digital Product</h3>
            <p className="text-[var(--text-secondary)]">Usually focused on:</p>
          </div>
          <ul className="space-y-4">
            {data.product.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--text-secondary)]">{point}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-[var(--accent)]/10">
            <p className="text-sm font-medium mb-3">Examples:</p>
            <div className="flex flex-wrap gap-2">
              {data.product.examples.map((example, i) => (
                <span key={i} className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs">{example}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-black/10 dark:border-white/10">
        <p className="text-lg font-medium">{data.closing}</p>
      </div>
    </div>
  );
};

const ServiceProductTypesBlock = ({ data }: { data: NonNullable<Service['productTypes']> }) => {
  return (
    <div className="space-y-12 my-24">
      <div className="space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, i) => (
          <div key={i} className="p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-[var(--surface-color)] hover:border-[var(--accent)] transition-colors">
            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
            <p className="text-[var(--text-secondary)]">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--text-secondary)] italic">{data.note}</p>
    </div>
  );
};

const ServiceProductStrategyBlock = ({ data }: { data: NonNullable<Service['productStrategy']> }) => {
  return (
    <div className="space-y-12 my-24 bg-[var(--surface-color)] p-8 md:p-16 rounded-3xl border border-black/10 dark:border-white/10">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
        <p className="text-lg text-[var(--text-secondary)]">{data.description}</p>
      </div>
      <div className="grid md:grid-cols-5 gap-6">
        {data.questions.map((q, i) => (
          <div key={i} className="space-y-3">
            <div className="text-[var(--accent)] text-lg font-medium">{q.question}</div>
            <div className="text-sm text-[var(--text-secondary)] border-l-2 border-black/10 dark:border-white/10 pl-4 py-1">{q.answer}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-black/5 dark:bg-white/5 p-6 rounded-2xl text-center font-medium tracking-wide border border-black/5 dark:border-white/5">
        {data.visualSequence}
      </div>
    </div>
  );
};

const ServiceMVPBlock = ({ data }: { data: NonNullable<Service['mvp']> }) => {
  return (
    <div className="space-y-12 my-24">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
        <p className="text-lg text-[var(--text-secondary)]">{data.description}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {data.stages.map((stage, i) => (
          <div key={i} className="relative p-8 border border-[var(--accent)]/20 bg-[var(--accent)]/5 rounded-2xl">
            <div className="text-[var(--accent)] text-sm font-bold mb-4 tracking-widest uppercase">Stage 0{i + 1}</div>
            <h3 className="text-xl font-medium mb-3">{stage.title}</h3>
            <p className="text-[var(--text-secondary)]">{stage.description}</p>
            {i < data.stages.length - 1 && (
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-[var(--accent)] bg-[var(--background-color)] rounded-full">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 p-4 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
        <AlertCircle className="w-5 h-5 text-[var(--text-secondary)]" />
        <p className="font-medium text-[var(--text-secondary)]">{data.closing}</p>
      </div>
    </div>
  );
};

const ServiceProductUXBlock = ({ data }: { data: NonNullable<Service['productUX']> }) => {
  return (
    <div className="space-y-12 my-24 p-8 md:p-12 rounded-3xl bg-black dark:bg-white text-white dark:text-black">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <div className="text-xs tracking-[0.2em] uppercase opacity-60 font-medium">{data.eyebrow}</div>}
        <h2 className="text-3xl md:text-5xl font-serif leading-tight">{data.heading}</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {data.points.map((point, i) => (
          <span key={i} className="px-4 py-2 border border-white/20 dark:border-black/20 rounded-full text-sm font-medium">{point}</span>
        ))}
      </div>
      <div className="pt-8">
        <Link to={data.link.url} className="inline-flex items-center gap-2 group font-medium text-[var(--accent)] dark:text-blue-600">
          {data.link.text} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const ServiceProductDevelopmentBlock = ({ data }: { data: NonNullable<Service['productDevelopment']> }) => {
  return (
    <div className="space-y-12 my-24">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
        <p className="text-lg text-[var(--text-secondary)]">{data.description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.areas.map((area, i) => (
          <div key={i} className="p-4 bg-[var(--surface-color)] border border-black/10 dark:border-white/10 rounded-xl text-sm font-medium">
            {area}
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--text-secondary)] italic border-l-2 border-[var(--accent)] pl-4">{data.note}</p>
    </div>
  );
};

const ServiceProductAIBlock = ({ data }: { data: NonNullable<Service['productAI']> }) => {
  return (
    <div className="space-y-12 my-24 relative overflow-hidden p-8 md:p-16 rounded-3xl border border-black/10 dark:border-white/10 group">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      <div className="relative z-10 grid sm:grid-cols-2 gap-8">
        {data.applications.map((app, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-lg font-medium text-[var(--accent)] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> {app.title}
            </h3>
            <p className="text-[var(--text-secondary)] pl-3.5 border-l border-black/5 dark:border-white/5">{app.description}</p>
          </div>
        ))}
      </div>
      <div className="relative z-10 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <p className="text-sm font-medium">{data.closing}</p>
        <Link to={data.link.url} className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-medium hover:bg-black transition-colors whitespace-nowrap">
          {data.link.text}
        </Link>
      </div>
    </div>
  );
};

const ServiceScalabilityBlock = ({ data }: { data: NonNullable<Service['scalability']> }) => {
  return (
    <div className="space-y-12 my-24">
      <div className="max-w-3xl space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      <div className="flex flex-wrap gap-4">
        {data.considerations.map((item, i) => (
          <div key={i} className="px-5 py-3 border border-black/10 dark:border-white/10 rounded-full bg-[var(--surface-color)] text-[var(--text-secondary)] font-medium">
            {item}
          </div>
        ))}
      </div>
      <p className="text-[var(--text-secondary)] max-w-3xl">{data.closing}</p>
    </div>
  );
};

const ServiceProcessSectionBlock = ({ data }: { data: NonNullable<Service['processSection']> }) => {
  return (
    <div className="space-y-16 my-24">
      <div className="space-y-6">
        {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-[var(--surface-color)] flex flex-col h-full hover:border-[var(--accent)] transition-colors"
          >
            <div className="text-3xl font-serif text-[var(--accent)]/30 mb-6 font-light">{step.number}</div>
            <h3 className="text-xl font-medium mb-3">{step.title}</h3>
            <p className="text-[var(--text-secondary)] flex-grow">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ServiceProductRoadmapBlock = ({ data }: { data: NonNullable<Service['productRoadmap']> }) => {
  return (
    <div className="space-y-16 my-24">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        {data.eyebrow && <Eyebrow className="justify-center">{data.eyebrow}</Eyebrow>}
        <Heading level="h2">{data.heading}</Heading>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 -translate-x-1/2" />
        
        <div className="space-y-12 relative z-10">
          {data.phases.map((phase, i) => (
            <div key={i} className={\`flex flex-col md:flex-row gap-8 \${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}\`}>
              <div className="hidden lg:block lg:w-1/2" />
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background-color)] -translate-x-1/2 mt-6 lg:mt-6" />
              
              <div className="md:pl-16 lg:pl-0 lg:w-1/2">
                <div className={\`p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-[var(--surface-color)] shadow-sm \${i % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}\`}>
                  <div className="text-[var(--accent)] text-sm font-bold tracking-widest mb-2">{phase.phase}</div>
                  <h3 className="text-xl font-medium mb-3">{phase.title}</h3>
                  <p className="text-[var(--text-secondary)]">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-[var(--text-secondary)] italic">{data.note}</p>
      </div>
    </div>
  );
};
\n`;

// Insert the new blocks before the main ServiceDetailBlocks export
content = content.replace('export const ServiceDetailBlocks =', newBlocks + 'export const ServiceDetailBlocks =');

// Now add the rendering of these blocks inside ServiceDetailBlocks

const renderLogic = `
      {service.websiteVsProduct && <ServiceWebsiteVsProductBlock data={service.websiteVsProduct} />}
      
      {service.approach && service.approach.visualSequence && (
        <div className="my-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium tracking-wide">
          {service.approach.visualSequence.map((item, i) => (
            <React.Fragment key={i}>
              <span className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full">{item}</span>
              {i < (service.approach!.visualSequence!.length - 1) && <ArrowRight className="w-4 h-4 text-[var(--accent)]" />}
            </React.Fragment>
          ))}
        </div>
      )}

      {service.productTypes && <ServiceProductTypesBlock data={service.productTypes} />}
      {service.productStrategy && <ServiceProductStrategyBlock data={service.productStrategy} />}
      {service.mvp && <ServiceMVPBlock data={service.mvp} />}
      {service.productUX && <ServiceProductUXBlock data={service.productUX} />}
      {service.productDevelopment && <ServiceProductDevelopmentBlock data={service.productDevelopment} />}
      {service.productAI && <ServiceProductAIBlock data={service.productAI} />}
      {service.scalability && <ServiceScalabilityBlock data={service.scalability} />}
      {service.processSection && <ServiceProcessSectionBlock data={service.processSection} />}
      {service.productRoadmap && <ServiceProductRoadmapBlock data={service.productRoadmap} />}
`;

// we need to insert the render logic into the main component. 
// We can find `{service.uxUiExplainer && ...` and inject the renderLogic around it.

content = content.replace(
  '{service.uxUiExplainer && (',
  renderLogic + '\n      {service.uxUiExplainer && ('
);

fs.writeFileSync('src/components/services/ServiceDetailBlocks.tsx', content);
