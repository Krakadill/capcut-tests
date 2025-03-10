import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for workspace feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User tries to create Work Space", async () => {
    test.setTimeout(60000);
    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const createSpaceBtn = await homePage.createNewSpace();
    expect(await createSpaceBtn.isVisible()).to.be.true;
  });
});
