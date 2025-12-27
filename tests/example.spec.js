const { test, expect } = require('./base');

test('should use Page Object Model via Fixture', async ({ homePage, page }) => {
    await homePage.goto();
    await homePage.getStarted();
    await expect(page).toHaveTitle(/Installation/);
});
