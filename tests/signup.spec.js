import { test, expect } from "@playwright/test";

test.skip(false, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("testing sign-up functionality", () => {
  test("User should get error message for entering invalid Email", async ({
    page,
  }) => {
    await page.goto("https://www.capcut.com/signup");
    await page.getByRole("textbox", { name: "Enter email" }).click();
    await page
      .getByRole("textbox", { name: "Enter email" })
      .fill("Wrong credential");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page.getByText("Enter a valid email address")).toBeVisible();
  });
});
