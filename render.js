const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1300,
      height: 500
    }
  });

  await page.goto("file://" + process.cwd() + "/profile.html");

  await page.screenshot({
    path: "profile.png"
  });

  await browser.close();
})();
