import { test, expect } from "@playwright/test";

test.describe("testing templates feature", () => {
  test("checking if templates search-bar is displayed", async ({ page }) => {
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await page.getByText("Templates", { exact: true }).click();
    await expect(page.locator(".lv-template__search__bg")).toBeVisible();
  });
});
