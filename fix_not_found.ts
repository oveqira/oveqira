import * as fs from 'fs';
let content = fs.readFileSync('src/pages/NotFoundPage.tsx', 'utf-8');
content = content.replace(
  '<Eyebrow prefix="404 //" hasIndicator indicatorColor="accent">System Error</Eyebrow>',
  '<Eyebrow prefix="404">ERROR</Eyebrow>'
);
content = content.replace(
  '<Heading level="display">Route Not Found</Heading>',
  '<Heading level="display">This page couldn\'t be found.</Heading>'
);
content = content.replace(
  'The requested page could not be located in the current architecture.',
  'The page may have moved or no longer exists.'
);
content = content.replace(
  '<Button as="span" variant="primary" size="lg" iconType="arrow-right">\n              Back to Oveqira\n            </Button>',
  '<div className="flex gap-4 justify-center">\n              <Button as="span" variant="primary" size="lg" iconType="arrow-right">\n                Back Home\n              </Button>\n            </Link>\n            <Link to="/work" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] sm:rounded-[6px]">\n              <Button as="span" variant="secondary" size="lg" iconType="arrow-up-right">\n                View Our Work\n              </Button>\n            </div>'
);
fs.writeFileSync('src/pages/NotFoundPage.tsx', content);
