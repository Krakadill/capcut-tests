import { test, expect } from "@playwright/test";

test.skip(false, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("testing login functionality", () => {
  test("user logs-in with valid credentials", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.capcut.com/login");
    await page.getByRole("textbox", { name: "Enter email" }).click();
    await page
      .getByRole("textbox", { name: "Enter email" })
      .fill("orvelatester@gmail.com");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("textbox", { name: "Enter password" }).click();
    await page
      .getByRole("textbox", { name: "Enter password" })
      .fill("orvela123!!!");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForURL(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );

    await expect(page).toHaveURL(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
  });
});
