import { test, expect } from "@fixtures/custom-fixtures";

test.describe('@ui @positive', () => {
    // Shared setup across tests
    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.goto();
    });

    test('QA1 - User can add an item to cart', async ({ inventoryPage }) => {
        await inventoryPage.clickAddButton();

        const buttonText = await inventoryPage.getButtonText();
        expect(buttonText).toContain("Remove");

        const shoppingCartBadge = await inventoryPage.getShoppingCartBadgeNumber();
        expect(shoppingCartBadge).toContain("1");
    });

    test('QA2 - User can remove an item from the cart', async ({ inventoryPage }) => {
        await inventoryPage.clickRemoveButton();

        const buttonText = await inventoryPage.getButtonText();
        expect(buttonText).toContain("Add to cart");

        const shoppingCartBadge = await inventoryPage.getShoppingCartBadgeNumber();
        expect(shoppingCartBadge).toContain("0");
    });
});
