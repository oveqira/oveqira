import * as fs from 'fs';
let content = fs.readFileSync('src/pages/CookiePolicyPage.tsx', 'utf-8');

const targetStr = `<h2>11. Managing Cookies</h2>
        <p>
          Visitors may manage cookies through their browser settings and device settings. Disabling certain cookies may affect website functionality and your experience.
        </p>`;

const newStr = `<h2>11. Managing Cookies</h2>
        <p>
          Visitors may manage cookies through their browser settings and device settings. Disabling certain cookies may affect website functionality and your experience.
        </p>
        <p>
          You can also manage your consent preferences for this website at any time:
        </p>
        <button 
          onClick={() => document.dispatchEvent(new CustomEvent('open-cookie-preferences'))}
          className="px-4 py-2 mt-2 border border-[var(--border-strong)] bg-[#11141A] text-[var(--foreground)] rounded-md hover:bg-[#161B26] hover:border-[var(--accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          Manage Cookie Preferences
        </button>`;

if (content.includes('<h2>11. Managing Cookies</h2>') && !content.includes('open-cookie-preferences')) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('src/pages/CookiePolicyPage.tsx', content);
}
