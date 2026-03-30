const { test, expect } = require("@playwright/test");

test("handling inputbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const inputbox = await page.getByPlaceholder("Enter Name");
  await expect(inputbox).toBeVisible();
  await expect(inputbox).toBeEmpty();
  await expect(inputbox).toBeEditable();

  await page.waitForTimeout(5000); //pausing the execution for 5 seconds to see the input box before filling it

  await page.locator("//input[@id='male']").check();
  await expect(page.locator("//input[@id='male']")).toBeChecked();
  await expect(page.locator("//input[@id='male']")).ischecked().toBetruthy(); //positive scenario
  await expect(page.locator("//input[@id='male']")).ischecked().toBefalsy(); //negative scenario
});
