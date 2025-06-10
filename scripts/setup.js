const { execSync } = require("child_process");

try {
    execSync("java -version", { stdio: "ignore" });
    console.log("✅ Java is already installed.");
} catch (err) {
    console.log(`
🚨 Java Runtime Environment (JRE) is required to generate Allure reports.
Please install Java from: https://www.java.com/en/download/
Or, if you're on macOS and have Homebrew:
  brew install --cask temurin
`);
}