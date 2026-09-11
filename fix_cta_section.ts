import * as fs from 'fs';
let content = fs.readFileSync('src/components/home/CtaSection.tsx', 'utf-8');

const newBg = `        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface-hover)]"
        >
          {/* Technical Abstract Background */}
          <div className="absolute inset-0 z-0">
            {/* Fine Grid */}
            <div className="absolute inset-0 bg-tech-grid-light opacity-30 mix-blend-overlay" />
          </div>`;

content = content.replace(/<motion\.div [\s\S]*?<\/div>\s*<div className="relative z-10 px-6 py-20/, newBg + '\n          <div className="relative z-10 px-6 py-20');

// Fix Buttons and text
content = content.replace('Start Your Project', 'Start a Project');
content = content.replace('Talk to Oveqira', 'Explore Our Work');
// Second button goes to /work instead of /contact
content = content.replace(/<Link to="\/contact"(.*?)>\s*<Button as="span" variant="secondary"/, '<Link to="/work"$1>\n                <Button as="span" variant="secondary"');
content = content.replace(
  '<Eyebrow prefix="LET\'S BUILD //" hasIndicator indicatorColor="accent">\n                Action\n              </Eyebrow>',
  '<Eyebrow>\n                START A PROJECT\n              </Eyebrow>'
);
content = content.replace(
  'Have an Idea?<br />Let\'s Build It.',
  'Ready to start your project?'
);

fs.writeFileSync('src/components/home/CtaSection.tsx', content);
