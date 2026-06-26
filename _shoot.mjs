import { chromium } from "playwright-core";
import fs from "fs";

const OUT =
  "C:/Users/ALEXAN~1/AppData/Local/Temp/claude/d--AlexanderFedchinPortfolio-AlexanderFedchinPortfolio/2c49ad90-ac87-4274-89ec-91d08f8174b9/scratchpad";

const chromePaths = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = chromePaths.find((p) => fs.existsSync(p));

const errors = [];
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

page.on("console", (m) => {
  if (m.type() === "error") errors.push("CONSOLE ERROR: " + m.text());
});
page.on("pageerror", (e) => errors.push("PAGE ERROR: " + e.message));

await page.goto("http://localhost:8080/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500); // let Grainient + liquid glass settle

// full hero
await page.screenshot({ path: `${OUT}/01-hero.png` });

// scroll through sections
const sections = ["about", "projects", "contact"];
for (const id of sections) {
  await page.evaluate((i) => {
    document.getElementById(i)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${OUT}/section-${id}.png` });
}

// full page tall screenshot
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/00-fullpage.png`, fullPage: true });

console.log("BROWSER:", executablePath);
console.log("ERRORS_FOUND:", errors.length);
errors.forEach((e) => console.log(e));
await browser.close();
