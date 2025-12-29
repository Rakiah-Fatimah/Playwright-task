// pages/RegisterPage.js

export class RegisterPage {
  constructor(page) {
    this.page = page;

    // --- Navigation ---
    this.registerLink = page.locator('a[href*="register.htm"]');

    // --- User Information ---
    this.firstNameInput = page.locator('input[name="customer.firstName"]');
    this.lastNameInput = page.locator('input[name="customer.lastName"]');
    this.addressInput = page.locator('input[name="customer.address.street"]');
    this.cityInput = page.locator('input[name="customer.address.city"]');
    this.stateInput = page.locator('input[name="customer.address.state"]');
    this.zipCodeInput = page.locator('input[name="customer.address.zipCode"]');
    this.phoneInput = page.locator('input[name="customer.phoneNumber"]');
    this.ssnInput = page.locator('input[name="customer.ssn"]');

    // --- Account Credentials ---
    this.usernameInput = page.locator('input[name="customer.username"]');
    this.passwordInput = page.locator('input[name="customer.password"]');
    this.confirmPasswordInput = page.locator('input[name="repeatedPassword"]');

    // --- Actions ---
    this.registerButton = page.locator('input[value="Register"]');

    // --- Result ---
    this.successMessage = page.locator(
      "text=Your account was created successfully"
    );
  }

  async navigateToRegister() {
    await this.registerLink.click();
  }

  async registerUser(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address);
    await this.cityInput.fill(user.city);
    await this.stateInput.fill(user.state);
    await this.zipCodeInput.fill(user.zipCode);
    await this.phoneInput.fill(user.phone);
    await this.ssnInput.fill(user.ssn);

    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);

    await this.registerButton.click();
  }
}
