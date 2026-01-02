// tests/auth/login.spec.js

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login Scenarios", () => {
  test("login fails with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");

    await loginPage.login("wronguser", "wrongpass");

    // Verify error message
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test("login succeeds with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");

    // TODO: Replace with username registered in Scenario 1
    const validUsername = "REPLACE_WITH_REGISTERED_USERNAME";
    const validPassword = "Password123";

    await loginPage.login(validUsername, validPassword);

    // Verify successful login
    await expect(loginPage.welcomeMessage).toBeVisible();
  });
});
