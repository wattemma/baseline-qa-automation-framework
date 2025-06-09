# Jira & Xray Integration Prep

This framework is ready for future integration with Jira and Xray.


## Already Set Up
- `results.xml` JUnit report generated after each test run.
- Sample test includes a `C123` test ID format for mapping to Xray test cases.

---

## When You're Ready to Integrate

### 1. Enable GitHub Actions
Add `.github/workflows/playwright.yml`:

name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test
      - name: Upload JUnit Results to Xray
        if: success() || failure()
        env:
          XRAY_TOKEN: ${{ secrets.XRAY_TOKEN }}
        run: |
          curl -H "Authorization: Bearer $XRAY_TOKEN" \
               -F "file=@results.xml" \
               https://xray.cloud.xpand-it.com/api/v2/import/execution/junit

### 2. Add secrets
In GitHub:
- Go to Settings > Secrets and variables > Actions**
- Add `XRAY_TOKEN` as a secret

### 3. Use Xray test case IDs
Format your test titles like:
test("C456 - user can add item to cart", async () => { ... });
