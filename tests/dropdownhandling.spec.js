const { test, expect } = require("@playwright/test");

test("dropdownhandling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#country").selectOption({ label: "India" }); //selecting the dropdown value by label
  await page.locator("#country").selectOption("india"); //selecting the dropdown value by visible text
  await page.locator("#country").selectOption({ value: "uk" }); //selecting the dropdown value by value
  await page.locator("#country").selectOption({ index: 2 }); //selecting the dropdown value by index
  await page.selectOption("#country", "india"); //selecting the dropdown value by visible text
});
