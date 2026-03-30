//const{test,expect}=require("@playwright/test");

import { test, expect } from "@playwright/test";

test("locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  //property locators
  //await page.locator("id=login2").click();
  await page.locator("id=login2").click();
  //css locators
  //await page.locator.fill("#loginusername", "pavanol");
  await page.locator("#loginusername").fill("pavanol");
  //await page.type("#loginpassword", "pavanol");
  await page.locator("input[id='loginpassword']").type("test@123");

  await page.click("//button[text()='Log in']");

  //verify logout button is visible
  const logoutButton = await page.locator("//a[text()='Log out']");
  await expect(logoutButton).toBeVisible();

  page.close();
});
