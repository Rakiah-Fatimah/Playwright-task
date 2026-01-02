// tests/auth/transferFunds.spec.js

import { test, expect } from "@playwright/test";
import { TransferPage } from "../../pages/TransferPage";

test("user can transfer funds", async ({ page }) => {
  const transferPage = new TransferPage(page);

  await page.goto("/");

  // TODO: Login first
  // Use previously registered username

  // await transferPage.navigateToTransferFunds();
  // await transferPage.transferFunds("12345", "67890", 1000); // Replace with real account numbers

  // await expect(transferPage.successMessage).toBeVisible();

    
 // Verify balances changed
  const overviewPage = new AccountOverviewPage(page);
  await overviewPage.navigateToAccountsOverview();
  
  // Add methods to AccountOverviewPage to get specific account balance by ID
  // Then assert the from account decreased and to account increased by 1000
});
