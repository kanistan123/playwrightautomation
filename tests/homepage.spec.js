const { test, expect } = require("@playwright/test");

test("Homepage", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  const title = await page.title();
  console.log("page title is: ", title);
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://demoblaze.com/");
  await page.close();
});
