import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/ProcessSection.tsx', 'utf-8');

const processDataReplacement = `const processSteps = [
  { number: '01', title: 'Understand', description: 'We learn about your business, audience, goals, and challenges.' },
  { number: '02', title: 'Plan', description: 'We define the right strategy, scope, and direction.' },
  { number: '03', title: 'Build', description: 'We design and develop the solution.' },
  { number: '04', title: 'Launch', description: 'We test, refine, and launch.' },
  { number: '05', title: 'Grow', description: 'We improve the digital experience as your business evolves.' }
];`;

content = content.replace(/const processSteps = processData\.sort[^;]+;/, processDataReplacement);

const processGridReplacement = `<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4 relative">
              {/* Horizontal line for desktop timeline */}
              <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-[var(--border)] z-0" />
              
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex flex-col flex-1"
                >
                  {/* Timeline Node */}
                  <div className="flex items-center gap-4 md:mb-6">
                    <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center font-mono text-sm tracking-widest text-[var(--foreground-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                      {step.number}
                    </div>
                    {/* Vertical line for mobile */}
                    {index !== processSteps.length - 1 && (
                       <div className="md:hidden absolute left-[27px] top-14 bottom-[-32px] w-px bg-[var(--border)] z-0" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pl-18 md:pl-0 mt-[-36px] md:mt-0 pb-8 md:pb-0">
                     <Heading level="h4" className="mb-2 text-lg">
                       {step.title}
                     </Heading>
                     <Text muted className="text-sm md:text-base leading-relaxed">
                       {step.description}
                     </Text>
                  </div>
                </div>
              ))}
            </div>`;

// Replace the grid container
content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">[\s\S]*?<\/div>\s*<div className="pt-12 border-t border-\[var\(--border\)\] mt-12 lg:hidden">/, processGridReplacement + '\n            <div className="pt-12 border-t border-[var(--border)] mt-12 lg:hidden">');

// We also need to change the section header structure so it spans full width since the timeline is horizontal.
const headerReplacement = `          {/* Section Header */}
          <div className="col-span-full space-y-6 text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Process</Eyebrow>
            <Heading level="h2">How We Work</Heading>
            <Text variant="large" muted>
              A clear process keeps strategy, design, technology, and execution moving in the same direction.
            </Text>
          </div>
          
          {/* Process Grid */}
          <div className="col-span-full">`;

content = content.replace(/<div className="lg:col-span-4 space-y-8 lg:pr-8">[\s\S]*?<\!-- Process Grid -->\s*<div className="lg:col-span-8">/, headerReplacement);

fs.writeFileSync('src/components/home/ProcessSection.tsx', content);
