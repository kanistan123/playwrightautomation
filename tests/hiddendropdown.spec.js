import { test, expect } from "@playwright/test";

test("hidden dropdown", async ({ page }) => {
  await page.goto("https://www.yatra.com/");
  const dropdown = await page.getByRole("textbox", { name: "new delhi" });
  dropdown.clear("delay: 1000");
  dropdown.pressSequentially("New", { delay: 1000 });
  dropdown.filter({ hastext: "" });
});
