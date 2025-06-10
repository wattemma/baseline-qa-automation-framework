import { test as baseTest } from "@playwright/test";
import { LoginPage } from "@pages/LoginPage";
import { InventoryPage } from "@pages/InventoryPage"; // <-- Add more as needed

type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
};

export const test = baseTest.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(); // Already logged in via storageState
        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }
});

export { expect } from "@playwright/test";
