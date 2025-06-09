
import { test, expect } from "@fixtures/login";
import { users } from "@testdata/users";

test.describe('@ui @positive', () => {
  test('C999 - User can ui with valid credentials', async ({ loginPage }) => {
    await loginPage.page.goto("/inventory.html");
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});

test.describe('@ui @negative', () => {
  test('C999 - User sees error with invalid credentials', async ({ loginPage }) => {
    await loginPage.page.goto('/');
    await loginPage.loginWith(users.invalid.username, users.invalid.password);

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
