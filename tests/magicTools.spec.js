import { test, expect } from "@playwright/test";

test.describe("testing magic tools feature", () => {
  test("checking if text to speech works", async ({ page }) => {
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await page.getByText("Magic tools").click();
    await expect(
      page.getByText("Text to speech", { exact: true }).nth(1)
    ).toBeVisible();
  });
});
