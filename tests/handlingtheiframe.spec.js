import { test, expect } from "@playwright/test";

test("hidden dropdown", async ({ page }) => {
  await page.goto("https://practice-automation.com/iframes/");

  const frame = page.frameLocator("#iframe-1");

  await frame.getByRole("link", { name: "Get started" }).click();
});
