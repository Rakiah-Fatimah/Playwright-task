import { expect } from '@playwright/test';
// pages/AccountPage.js

export class AccountPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.openNewAccountLink = page.locator('a[href*="openaccount.htm"]');
    this.accountTypeDropdown = page.locator("#type");
    this.openAccountButton = page.locator('input[value="Open New Account"]');
    this.newAccountNumber = page.locator("#newAccountId"); // Captured after creation
  }

  async navigateToOpenNewAccount() {
    await this.openNewAccountLink.click();
  }

  async openNewAccount(accountType = "SAVINGS") {
    await this.accountTypeDropdown.selectOption(accountType);
    await this.openAccountButton.click();
  }

  // async getNewAccountNumber() {
  //   return await this.newAccountNumber.textContent();
  // }

   async getNewAccountNumber() {

 await expect(this.newAccountNumber).toBeVisible({ timeout: 10000 });
 const accountNumber = await this.newAccountNumber.textContent();
 
 if (!accountNumber || accountNumber.trim() === '') {
   throw new Error('Account number is empty - account creation may have failed');
  }
  
  return accountNumber.trim();
 }
}
