import { test, expect } from "@playwright/test";

test("fixture and browser context", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("");
});
