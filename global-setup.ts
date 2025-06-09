import { chromium, firefox, webkit, FullConfig } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

async function globalSetup(config: FullConfig) {
  for (const browserType of [chromium, firefox, webkit]) {
    const browser = await browserType.launch();
    const page = await browser.newPage();

    await page.goto(process.env.BASE_URL!);
    await page.fill("#user-name", process.env.USERNAME!);
    await page.fill("#password", process.env.PASSWORD!);
    await page.click("//input[@id='login-button']");

    await page.context().storageState({ path: `storageState-${browserType.name()}.json` });
    await browser.close();
  }
}
export default globalSetup;