const { test, expect } = require("@playwright/test");

test("builtin_locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  const logo = await page.getbyalttext("company-branding");
  await expect(logo).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { type: "submit" }).click();
  await expect(await page.getByText("hello1 Test12name")).toBeVisible();
});
