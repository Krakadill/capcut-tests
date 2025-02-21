import { test, expect } from "@playwright/test";

test.describe("testing sharing feature", () => {
  test("checking if share button opens share pannel", async ({ page }) => {
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await page.getByText("Share and schedule").click();
    await page.getByRole("button", { name: "Share files" }).click();
    await page.getByRole("menuitem", { name: "From space" }).click();
    await expect(page.getByText("Share", { exact: true })).toBeVisible();
  });
});
