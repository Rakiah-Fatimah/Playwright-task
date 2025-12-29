// tests/auth/transferFunds.spec.js

import { test, expect } from "@playwright/test";
import { TransferPage } from "../../pages/TransferPage";

test("user can transfer funds", async ({ page }) => {
  const transferPage = new TransferPage(page);

  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  // TODO: Login first
  // Use previously registered username

  await transferPage.navigateToTransferFunds();
  await transferPage.transferFunds("12345", "67890", 1000); // Replace with real account numbers

  await expect(transferPage.successMessage).toBeVisible();
});
