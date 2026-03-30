const { test, expect } = require("@playwright/test");

test("assertiontest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await expect(page).toHaveURL("https://demo.nopcommerce.com/login");
  await expect(page).toHaveTitle("nopCommerce demo store. Login");

  const searchbox = await page.locator("#small-searchterms");
  await expect(searchbox).toBeEnabled();

  const male_radio_button = await page.locator();
  await expect(male_radio_button).toBeChecked();

  await expect(page.locator("//button[text()='Register']")).toHaveAttribute(
    "type",
    "button",
  );

  await expect(page.locator(".page-title h1")).toHaveText("Register");

  await expect(page.locator(".page-title h1")).toContainText("Reg"); //partial text

  const options = await page.locator(""); //dropdown options
  await expect(options).toHaveCount(13);
  await expect(options).not.toHaveCount(0);
});
