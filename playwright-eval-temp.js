const { chromium } = require('C:/Users/shubh/.agents/skills/playwright/node_modules/playwright');

const TARGET_URL = 'http://localhost:3000';
const routes = ['/', '/courses', '/projects', '/about', '/contact'];
const viewports = [
  ['desktop', 1440, 1000],
  ['tablet', 768, 1024],
  ['mobile', 375, 812],
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const route of routes) {
    for (const [label, width, height] of viewports) {
      const page = await browser.newPage({ viewport: { width, height } });
      await page.goto(TARGET_URL + route, { waitUntil: 'networkidle' });
      const hero = page.locator('main > section').first();
      await hero.screenshot({ path: `/tmp/galaxia-${route === '/' ? 'home' : route.slice(1)}-${label}.png` });
      const text = (await hero.innerText()).replace(/\s+/g, ' ').slice(0, 500);
      console.log(JSON.stringify({ route, label, hero: await hero.boundingBox(), text }));
      await page.close();
    }
  }
  await browser.close();
})().catch((error) => { console.error(error); process.exit(1); });
