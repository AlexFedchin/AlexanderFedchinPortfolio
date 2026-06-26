import { chromium } from "playwright-core";
import fs from "fs";
const OUT =
  "C:/Users/ALEXAN~1/AppData/Local/Temp/claude/d--AlexanderFedchinPortfolio-AlexanderFedchinPortfolio/2c49ad90-ac87-4274-89ec-91d08f8174b9/scratchpad";
const exe = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const browser = await chromium.launch({
  executablePath: exe,
  headless: true,
  args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader"],
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);
const sw = await page.evaluate(() => document.documentElement.scrollWidth);
const cw = await page.evaluate(() => document.documentElement.clientWidth);
console.log("scrollWidth", sw, "clientWidth", cw, "overflow", sw > cw + 1);
await page.screenshot({ path: `${OUT}/m-hero.png` });
await page.evaluate(() => document.getElementById("about")?.scrollIntoView());
await page.waitForTimeout(1000);
await page.screenshot({ path: `${OUT}/m-about.png` });
// close-up of liquid glass card
await page.evaluate(() => window.scrollTo(0, 0));
await browser.close();
