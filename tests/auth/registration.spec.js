// tests/auth/registration.spec.js

import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/RegisterPage";

test("user can register successfully", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await registerPage.navigateToRegister();

  // Create unique username
  const uniqueUsername = `user_${Date.now()}`;

  // User data
  const userData = {
    firstName: "Test",
    lastName: "User",
    address: "123 Test Street",
    city: "TestCity",
    state: "TestState",
    zipCode: "12345",
    phone: "1234567890",
    ssn: "111-22-3333",
    username: uniqueUsername,
    password: "Password123",
  };

  await registerPage.registerUser(userData);

  // Verify registration success
  await expect(registerPage.successMessage).toBeVisible();

  // Log username for later tests
  console.log("Registered username:", uniqueUsername);
});
