import { STANDARD_USER, STANDARD_PASS } from "../../utils/env";
import { Page } from "@playwright/test";

export class LoginPage {
async loginWith(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('//input[@id=\'login-button\']');
  }

  async getErrorMessage() {
    return this.page.locator('[data-test="error"]').innerText();
  }
  readonly page: Page;
  readonly usernameInput = "#user-name";
  readonly passwordInput = "#password";
  readonly loginButton = "//input[@id='login-button']";
  readonly inventoryContainer = ".inventory_list";

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.page.isVisible(this.inventoryContainer);
  }
}