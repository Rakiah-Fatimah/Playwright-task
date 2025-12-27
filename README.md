# Playwright Framework

This project creates a robust automated testing framework using Playwright with the Page Object Model (POM) and Fixtures.

## Project Structure

- **`tests/`:** Contains test files (specs).
  - `base.js`: Custom test fixture that extends Playwright's default test runner.
  - `example.spec.js`: Example test suite showing usage of the custom fixture.
- **`pages/`:** Contains Page Object classes.
  - `HomePage.js`: Encapsulates selectors and logic for the Home page.
- **`playwright.config.js`:** Main configuration file for global settings (baseURL, browsers, reporters).

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run tests:**
   ```bash
   npx playwright test
   ```

3. **View Report:**
   ```bash
   npx playwright show-report
   ```

## Best Practices Implemented

- **Page Object Model (POM):** Separates test logic from page details.
- **Fixtures:** Injects page objects directly into tests, reducing boilerplate.
- **Base URL:** Centralized URL configuration for easy environment switching.
