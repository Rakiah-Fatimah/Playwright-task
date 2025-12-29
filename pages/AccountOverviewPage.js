// pages/AccountOverviewPage.js

export class AccountOverviewPage {
  constructor(page) {
    this.page = page;
    this.accountBalance = page.locator(".balance"); // Adjust locator as needed
  }

  async navigateToAccountsOverview() {
    await this.page.locator('a[href*="overview.htm"]').click();
  }

  async getAccountBalance() {
    return await this.accountBalance.textContent();
  }
}
