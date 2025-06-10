
##  Setting Up Allure Reporting in the Playwright Automation Framework

This project supports **Allure reports** for clean, visual test results. Here's how to fully set up the reporting flow — even if your system is missing Java or Homebrew.

---
##  On Mac:

---

###  Step 1: Install Node.js Dependencies

In the project root folder, run:

```bash
npm install
```

This installs all required dependencies, including:

* Playwright
* Allure CLI tools
* TypeScript types and utilities

---

###  Step 2: Install Java (Allure Dependency)

Allure requires **Java Runtime** to generate reports.

#### ⛔ If Java is not installed

Run this in your terminal to check:

```bash
java -version
```

If you get `command not found`, you need to install Java.

####  Recommended Way (Install via Homebrew)

1. **Install Homebrew (macOS package manager)**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **Add Homebrew to your terminal path:**

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

3. **Install Java (Temurin JDK):**

```bash
brew install --cask temurin
```

Temurin is a safe, modern OpenJDK distribution maintained by the Eclipse Foundation.

---

###  Step 3: Run Java Check (Optional Safety Step)

We’ve included a helper script to check for Java and remind users if it's missing.

```bash
npm run setup
```

This runs `scripts/setup.js` and:

* Verifies Java is installed
* Logs a helpful message if it’s not

---

###  Step 4: Run Tests + Generate Allure Report

To run all tests and automatically generate the Allure report:

```bash
npm run test
```

This:

* Clears previous `allure-results`
* Runs Playwright tests
* Generates the report
* Opens the report in your browser

---

###  To View or Regenerate the Report Manually

* **Generate + open report:**

  ```bash
  npm run allure:report
  ```

* **Open most recent report only:**

  ```bash
  npx allure open ./allure-report
  ```

---

###  Notes

* Java must be available **before** running `allure:report`
* If you skip Java setup, you'll see an error like:

  ```
  Unable to locate a Java Runtime.
  ```

---

##  On Windows:

##  Allure Report Setup on Windows (Full Guide)

This framework uses **Allure** to generate clean, interactive reports for Playwright test runs. Here’s how to get fully set up on **Windows**.

---

###  Step 1: Install Node.js & npm

If you haven’t already:

1. Go to: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (recommended for stability)
3. Run the installer and follow the prompts

To verify:

```powershell
node -v
npm -v
```

---

###  Step 2: Install Project Dependencies

In the root folder of the project:

```powershell
npm install
```

This installs:

* Playwright
* Allure CLI
* TypeScript support
* Other dev dependencies

---

###  Step 3: Install Java Runtime (Required for Allure)

Allure requires **Java** to run.

####  Check if Java is installed:

```powershell
java -version
```

If you see something like:

```
'java' is not recognized...
```

Then Java is **not installed**.

####  Install Java (Temurin JDK)

1. Go to: [https://adoptium.net/en-GB/temurin/releases/](https://adoptium.net/en-GB/temurin/releases/)
2. Select:

    * **Windows**
    * **x64 or x86** based on your system
    * **JDK 17 or higher**
3. Download and install the `.msi` installer
4. Reboot or open a new terminal window after install

To confirm:

```powershell
java -version
```

---

###  Step 4: Run the Setup Script (Optional Safety Check)

To double-check that Java is installed, run:

```powershell
npm run setup
```

This runs a script that verifies Java is available and gives instructions if not.

---

###  Step 5: Run Tests & Generate Allure Report

To run all tests and automatically generate the report:

```powershell
npm run test
```

This script:

* Cleans `allure-results`
* Runs Playwright tests
* Generates and opens the Allure report

---

###  Alternate Commands

* **Generate + open report manually:**

  ```powershell
  npm run allure:report
  ```

* **Open the latest report only:**

  ```powershell
  npx allure open ./allure-report
  ```

---

###  Common Errors & Fixes

| Issue                      | Fix                                             |
| -------------------------- | ----------------------------------------------- |
| `'java' is not recognized` | Install Temurin JDK and restart terminal        |
| `Allure not installed yet` | Run `npm install` and ensure Java is working    |
| Report doesn’t open        | Try: `npx allure open ./allure-report` manually |

---
