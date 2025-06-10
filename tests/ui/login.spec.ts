import { test, expect } from "@fixtures/login";
import { users } from "@testdata/users";


test.describe('@ui @positive', () => {
  test('QA1 - User can login with valid credentials', async ({ loginPage }) => {
    await loginPage.page.goto("/");
    await loginPage.page.fill("#user-name", process.env.USERNAME!);
    await loginPage.page.fill("#password", process.env.PASSWORD!);
    await loginPage.page.click("//input[@id='login-button']");

    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});

test.describe('@ui @positive', () => {
  test('QA2 - User can login and see inventory page', async ({ loginPage }) => {
    await loginPage.page.goto("/inventory.html");
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});

test.describe('@ui @negative', () => {
  test('QA3 - User sees error with invalid credentials', async ({ loginPage }) => {
    await loginPage.page.goto('/');
    await loginPage.loginWith(users.invalid.username, users.invalid.password);

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
test.describe('@ui @negative', () => {
  test('QA4 - User sees error with valid username invalid password', async ({ loginPage }) => {
    await loginPage.page.goto('/');
    await loginPage.loginWith(process.env.USERNAME!, users.invalid.password);

    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
