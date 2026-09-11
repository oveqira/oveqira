import * as fs from 'fs';

const socialContent = `import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/oveqira',
    label: 'Instagram',
    order: 1,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/oveqira/',
    label: 'LinkedIn',
    order: 2,
  },
  {
    platform: 'X',
    url: 'https://x.com/OVEQIRA',
    label: 'X (Twitter)',
    order: 3,
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/share/19oNMFa6Xy/',
    label: 'Facebook',
    order: 4,
  },
];
`;

fs.writeFileSync('src/data/social.ts', socialContent);
