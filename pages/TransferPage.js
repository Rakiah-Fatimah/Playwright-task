// pages/TransferPage.js

export class TransferPage {
  constructor(page) {
    this.page = page;

    this.transferFundsLink = page.locator('a[href*="transfer.htm"]');
    this.fromAccountDropdown = page.locator("#fromAccountId");
    this.toAccountDropdown = page.locator("#toAccountId");
    this.amountInput = page.locator("#amount");
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator("text=Transfer Complete!");
  }

  async navigateToTransferFunds() {
    await this.transferFundsLink.click();
  }

  async transferFunds(fromAccount, toAccount, amount) {
    await this.fromAccountDropdown.selectOption(fromAccount);
    await this.toAccountDropdown.selectOption(toAccount);
    await this.amountInput.fill(amount.toString());
    await this.transferButton.click();
  }
}
