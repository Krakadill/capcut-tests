import { test } from "@playwright/test";
import { expect } from "chai";
import HomePage from "../po/pages/home.page";

test.describe("Test suite for Image editing feature", () => {
  test("User tries to create new image", async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);

    await homePage.open(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const imageEditorPage = await homePage.openImageEditor();
    await imageEditorPage.getByRole("dialog").getByText("Create").click();

    const redirectUrl = await imageEditorPage.url();
    expect(redirectUrl).to.include("editor-graphic");
  });
});
