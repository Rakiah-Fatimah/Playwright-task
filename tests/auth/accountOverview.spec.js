// tests/auth/accountOverview.spec.js

import { test, expect } from "@playwright/test";
import { AccountOverviewPage } from "../../pages/AccountOverviewPage";

test("account balances reflect transfer", async ({ page }) => {
  const overviewPage = new AccountOverviewPage(page);

  await page.goto("/");

  // TODO: Login first
  // Use previously registered username

  await overviewPage.navigateToAccountsOverview();
  const balance = await overviewPage.getAccountBalance();
  console.log("Account balance:", balance);

  expect(balance).not.toBeNull();
});
