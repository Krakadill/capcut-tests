import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for video creation and editing feature", () => {
  test("User tries to create a video", async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );

    const videoEditorPage = await homePage.openVideoEditor();
    await videoEditorPage.goto(
      "https://www.capcut.com/editor?current_page=landing_page&enter_from=project&from_page=work_space&start_tab=video&tab=all&position=my_draft&__action_from=my_draft&__from_page=work_space&scenario=custom"
    );
    const redirectUrl = await videoEditorPage.url();
    expect(redirectUrl).to.include("work_space&start_tab");
  });
});
