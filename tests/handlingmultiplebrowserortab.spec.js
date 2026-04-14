import { test, expect } from "@playwright/test";

test("handling multiple browser or tab", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://training.rcvacademy.com/");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("(//img)[3]").click(),
  ]);
  newPage.close();
  page.getByRole("textbox", { name: "name" }).fill("suman");
  await page.close();
});
