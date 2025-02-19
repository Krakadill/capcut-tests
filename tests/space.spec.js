import { test, expect } from "@playwright/test";

test.describe("space creation test", () => {
  test.setTimeout(60000);

  test("user checks if create button works", async ({ page }) => {
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );

    await page.getByText("Create new space").click();
    await expect(
      page.getByRole("button", { name: "Create space" })
    ).toBeVisible();
  });
});
