import { test as baseTest } from "@playwright/test";
import { LoginPage } from "@pages/LoginPage";

type LoginFixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // Already logged in via storageState
    await use(loginPage);
  }
});

export { expect } from "@playwright/test";