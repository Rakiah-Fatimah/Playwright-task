const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    }

    async goto() {
        await this.page.goto('/');
    }

    async getStarted() {
        await this.getStartedLink.first().click();
        await this.gettingStartedHeader.waitFor();
    }
};
