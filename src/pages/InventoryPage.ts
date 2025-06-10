import { expect, Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly addOrRemoveButton: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addOrRemoveButton = page.locator("//button[contains(@data-test, 'backpack')]");
        this.shoppingCartBadge = page.locator("//span[@class='shopping_cart_badge']");
    }

    async goto(): Promise<void> {
        await this.page.goto("/inventory.html");
    }

    async getButtonText(): Promise<string> {
        return await this.addOrRemoveButton.innerText();
    }

    async getShoppingCartBadgeNumber(): Promise<string> {
        return await this.shoppingCartBadge.innerText();
    }

    async clickAddButton(): Promise<void> {
        const text = await this.getButtonText();
        expect(text).toContain("Add");
        await this.addOrRemoveButton.click();
    }

    async clickRemoveButton(): Promise<void> {
        const text = await this.getButtonText();
        expect(text).toContain("Remove");
        await this.addOrRemoveButton.click();
    }
}
