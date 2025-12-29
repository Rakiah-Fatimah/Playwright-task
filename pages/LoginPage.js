// pages/LoginPage.js

export class LoginPage {
  constructor(page) {
    this.page = page;

    // --- Locators ---
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.errorMessage = page.locator(".error"); // Invalid login message
    this.welcomeMessage = page.locator("text=Accounts Overview"); // Visible after valid login
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
