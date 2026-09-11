import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/ServicesSection.tsx', 'utf-8');

// Replace the complex visual mapping and the bento grid with a simple, editorial grid
const serviceGridReplacement = `          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
            {services.slice(0, 4).map((service, index) => {
              // We only want to show 4 main services on the homepage for clarity
              // If there are more, we just take the first 4.
              return (
                <Link
                  key={service.id}
                  to={\`/services/\${service.slug}\`}
                  className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  <div className="flex flex-col space-y-6">
                    <span className="font-mono text-xs text-[var(--foreground-muted)] tracking-widest border-b border-[var(--border)] pb-4 block w-full">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-4">
                      <Heading level="h3" className="uppercase tracking-tight text-xl md:text-2xl group-hover:text-[var(--accent)] transition-colors duration-200">
                        {service.title.replace('&', '\\n&')}
                      </Heading>
                      <Text muted className="whitespace-pre-line leading-relaxed text-[var(--foreground-muted)]">
                        {service.shortDescription}
                      </Text>
                    </div>
                  </div>
                  
                  <div className="pt-8 mt-auto flex items-center">
                    <span className="text-sm font-semibold tracking-wide text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      Explore service <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>`;

// Strip out lucide imports
content = content.replace(/import \{ LayoutTemplate[\s\S]*?\} from 'lucide-react';/, '');
// Strip out SERVICE_VISUALS
content = content.replace(/const SERVICE_VISUALS[\s\S]*?\};\n\n/, '');

const oldGridStart = '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">';
const oldGridEnd = '</div>\n\n          {/* Section Footer / CTA */}';

if (content.includes(oldGridStart)) {
  const parts = content.split(oldGridStart);
  const subParts = parts[1].split('          {/* Section Footer / CTA */}');
  
  content = parts[0] + serviceGridReplacement + '\n\n          {/* Section Footer / CTA */}' + subParts[1];
}

// Update Header
content = content.replace(
  'Everything You Need to Build and Grow Digitally.',
  'Everything a modern business needs to grow digitally.'
);
content = content.replace(
  'From your first website to ongoing digital growth, Oveqira helps you create, launch, optimize, and scale.',
  'We focus on the foundations of digital growth: clear communication, strong design, search visibility, and intelligent automation.'
);

fs.writeFileSync('src/components/home/ServicesSection.tsx', content);
