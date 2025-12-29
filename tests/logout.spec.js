import { test, expect } from "@playwright/test";

test("user can logout", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  // TODO: Login first

  await page.locator('a[href*="logout.htm"]').click();

  // Verify session ended
  await expect(page.locator('input[value="Log In"]')).toBeVisible();
});
