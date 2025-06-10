import { test, expect } from "@fixtures/custom-fixtures";
import { users } from "@testdata/users";

test.describe('@ui @positive', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('QA1 - User can login with valid credentials', async ({ loginPage }) => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });

  test('QA2 - User can login and see inventory page', async ({ loginPage }) => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await loginPage.page.waitForURL('/inventory.html');
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});

test.describe('@ui @negative', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('QA3 - User sees error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });

  test('QA4 - User sees error with valid username and invalid password', async ({ loginPage }) => {
    await loginPage.login(process.env.USERNAME!, users.invalid.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
