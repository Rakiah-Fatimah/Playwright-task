// tests/auth/openAccount.spec.js

import { test, expect } from "@playwright/test";
import { AccountPage } from "../../pages/AccountPage";

test("user can open new account", async ({ page }) => {
  const accountPage = new AccountPage(page);

  await page.goto("/");

  // TODO: Login first if needed
  // Use previously registered username

  // await accountPage.navigateToOpenNewAccount();
  // await accountPage.openNewAccount("SAVINGS");

  // const accountNumber = await accountPage.getNewAccountNumber();
  // console.log("New account number:", accountNumber);

  // expect(accountNumber).not.toBeNull();

  const accountNumber = await accountPage.getNewAccountNumber();

  // Verify account number is valid (typically numeric)
  expect(accountNumber).toMatch(/^\d+$/);
  expect(parseInt(accountNumber)).toBeGreaterThan(0);
});
