import LoginPage from "../pages/LoginPage";
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const LP = new LoginPage(page);
  await LP.navigate();
  await LP.loginmethod("pavanol", "test@123");
});
