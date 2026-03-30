const { test, expect } = require("@playwright/test");

test("page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "Homepage.png",
  });
});

test("full page screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/");
  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "fullpage.png",
    fullPage: true,
  });
});

test.only("element screenshot", async ({ page }) => {
  await page.goto("https://www.opencart.com/");
  await page.locator("//div[text()='Open-Source and Free']").screenshot({
    path: "tests/screenshots/" + Date.now() + "element.png",
  });
});
