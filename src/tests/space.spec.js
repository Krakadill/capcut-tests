import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for workspace feature", () => {
  test("User tries to create Work Space", async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await homePage.aside.space.waitFor({ state: "visible" });
    await homePage.aside.space.click();

    const createSpaceBtn = await page.locator("#create-bottom");
    expect(await createSpaceBtn.isVisible()).to.be.true;
  });
});
