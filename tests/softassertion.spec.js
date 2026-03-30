const { test, expect } = require("@playwright/test");

test("softassertion", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await expect(page).toHaveTitle("STORE"); //hard assertion
  await expect.soft(page).toHaveURL("https://demoblaze.com/"); //soft assertion
});
