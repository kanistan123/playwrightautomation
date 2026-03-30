const { test, expect } = require("@playwright/test");

test.beforeAll(async () => {
  console.log("this is beforeall hooks........");
});

test.afterAll(async () => {
  console.log("this is afterall hooks........");
});

test.beforeEach(async () => {
  console.log("this is beforeeach hooks........");
});

test.afterEach(async () => {
  console.log("this is aftereach hooks........");
});

test.describe.only("group1", () => {
  test("test1", async ({ page }) => {
    console.log("test1 is running");
  });

  test("test2", async ({ page }) => {
    console.log("test2 is running");
  });
});

test.describe.skip("group2", () => {
  test("test3", async ({ page }) => {
    console.log("test3 is running");
  });

  test("test4", async ({ page }) => {
    console.log("test4 is running");
  });
});

test("test5", async ({ page }) => {
  console.log("test5 is running");
});
