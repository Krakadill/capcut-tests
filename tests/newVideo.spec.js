import { test, expect } from "@playwright/test";

test.describe("new video creation test", () => {
  test("video creation feature", async ({ page }) => {
    test.setTimeout(60000);

    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const page1Promise = page.waitForEvent("popup");
    await page
      .locator("div")
      .filter({ hasText: /^New video$/ })
      .first()
      .click();
    const page1 = await page1Promise;
    await page1.goto(
      "https://www.capcut.com/editor?current_page=landing_page&enter_from=project&from_page=work_space&start_tab=video&tab=all&position=my_draft&__action_from=my_draft&__from_page=work_space&scenario=custom"
    );
    await expect(page1.url()).toContain("work_space&start_tab");
  });
});
