// import { test, expect } from "@playwright/test";

// test("user can logout", async ({ page }) => {
//   await page.goto("/");

//   // TODO: Login first

//   await page.locator('a[href*="logout.htm"]').click();

//   // Verify session ended
//   await expect(page.locator('input[value="Log In"]')).toBeVisible();
// });

import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("user can logout", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto("/");

  // TODO: Login first (reuse valid credentials when ready)

  await loginPage.logout();
});
