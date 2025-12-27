const { test: base } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

exports.test = base.extend({
    homePage: async ({ page }, use) => {
        // Set up the fixture
        const homePage = new HomePage(page);

        // Use the fixture value in the test
        await use(homePage);

        // Clean up code could go here if needed
    },
});

exports.expect = base.expect;
