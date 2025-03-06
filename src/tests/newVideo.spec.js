import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for video creation and editing feature", () => {
  let homePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });
  test("User tries to create a video", async () => {
    test.setTimeout(60000);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const { videoEditorPage, redirectUrl } = await homePage.openVideoEditor();
    expect(redirectUrl).to.include("work_space&start_tab");
  });
});
