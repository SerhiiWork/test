import { test, expect } from "@playwright/test";
test("Test Login", async ({ page }) => {
  await page.goto("https://npshopping.com/");
  await page.locator(".header-right__login").click();
  await page.locator("#email").fill("sweethouse.sergey@gmail.com");
  await page.locator("#password").fill("Muravey168");
  await page.locator("button[type='submit']").click();
  await expect(page.locator(".header-right__name")).toHaveText("Сергей");
});
