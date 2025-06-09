# Scalable Automation Framework

A Playwright-based scalable UI test automation framework with environment config, fixtures, and modular structure.

## 🔧 Common Scripts

| Command                         | Description                                |
|--------------------------------|--------------------------------------------|
| `npm run test`                 | Runs all Playwright tests                  |
| `npm run allure:report`        | Generates and opens the Allure report      |
| `npx playwright test --grep @tag` | Runs tests with a specific tag            |

## Writing New Tests

Follow this structure to keep all tests readable, modular, and scalable.

---

### Basic UI Test Example

import { test, expect } from '@playwright/test';
import { users } from '@testdata/users';

test.describe('@login @smoke', () => {
  test('C001 - Standard user can log in and view inventory', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.loginWith(users.standard.username, users.standard.password);
    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  });
});

---

### Negative Login Test

test.describe('@login @negative', () => {
  test('C999 - User sees error with invalid credentials', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.loginWith(users.invalid.username, users.invalid.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  });
});

---

### API Test Example

test.describe('@api', () => {
  test('C200 - Get response from status endpoint', async ({ request }) => {
    const response = await request.get('https://api.example.com/status');
    expect(response.status()).toBe(200);
  });
});

---

###  Tips

✅ Use page objects (e.g., `loginPage`) for all interactions.
✅ Use test tags like `@login`, `@smoke`, `@api`, etc.
✅ Reference test data from `@testdata/users.ts` (instead of hardcoding).
✅ Stick to the `test.describe()` structure to organize tests logically.
✅ Keep one logical scenario per `test(...)` block.


## 📊 Test Reporting (Allure)

This framework supports **Allure reports** for beautiful, interactive test result dashboards.

---

### 📥 Install Dependencies (first time only)

```bash
npm install
````

---

### ▶️ Run All Tests and View the Report

```bash
npm run test && npm run allure:report
```

This will:

* Run all tests
* Generate an HTML report
* Open it automatically in your browser

---

### 🎯 Run and Report on Specific Tests

#### By Tag

```bash
npx playwright test --grep @ui && npm run allure:report
```

#### By Test File

```bash
npx playwright test tests/ui/inventory.spec.ts && npm run allure:report
```

---

### 📂 Output Locations

| Folder            | Description                   |
| ----------------- | ----------------------------- |
| `allure-results/` | Raw test data used for report |
| `allure-report/`  | Generated HTML report to view |

---
