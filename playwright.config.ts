import { defineConfig } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  globalSetup: require.resolve("./global-setup"),
  testDir: "./tests",
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  reporter: [
    ["allure-playwright"],
    ["junit", { outputFile: "results.xml" }],
    ["html", { open: "never" }]
  ],
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium', storageState: 'storageState-chromium.json' } },
    { name: 'Firefox', use: { browserName: 'firefox', storageState: 'storageState-firefox.json' } },
    { name: 'WebKit', use: { browserName: 'webkit', storageState: 'storageState-webkit.json' } }
  ]
});