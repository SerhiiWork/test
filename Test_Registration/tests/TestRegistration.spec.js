import { test, expect } from "@playwright/test";

test("Test Registration", async ({ page }) => {
  await page.goto("https://npshopping.com/");
  await page.locator(".header-right__register").click();
  await page.locator("#email").fill("sweethffouse.sergey@gmail.com");
  await page.locator("button[type='submit']").click();
  await expect(page.locator(".email-verification-modal__title")).toHaveText(
    "Перевірте свою пошту"
  );
});
