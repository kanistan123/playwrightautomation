const { test, expect } = require("@playwright/test");

test("multiplecheckbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const checkboxes = [
    "//input[@id='sunday' and @type='checkbox']",
    "//input[@id='monday' and @type='checkbox']",
    "//input[@id='tuesday' and @type='checkbox']",
  ];
  for (const checkbox of checkboxes) {
    await page.locator(checkbox).check(); //for checking the checkboxes
  }

  for (const checkbox of checkboxes) {
    if (await page.locator(checkbox).isChecked()) {
      await page.locator(checkbox).uncheck(); //for unchecking the checkboxes
    }
  }
});
