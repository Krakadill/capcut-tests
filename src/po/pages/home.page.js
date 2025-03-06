import BasePage from "./basePage";
import Aside from "../components/common/aside.component";

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.aside = new Aside(page);
    this.startImageEditing = page.locator("#start-page-tab-image");
    this.newVideoButton = page
      .locator("div")
      .filter({ hasText: /^New video$/ })
      .first();
  }

  async openVideoEditor() {
    const page1Promise = this.page.waitForEvent("popup");
    await this.newVideoButton.click();
    const videoEditorPage = await page1Promise;
    await videoEditorPage.goto(
      "https://www.capcut.com/editor?current_page=landing_page&enter_from=project&from_page=work_space&start_tab=video&tab=all&position=my_draft&__action_from=my_draft&__from_page=work_space&scenario=custom"
    );
    const redirectUrl = await videoEditorPage.url();
    return { videoEditorPage, redirectUrl };
  }

  async openImageEditor() {
    await this.startImageEditing.click();
    const page2Promise = this.page.waitForEvent("popup");
    await this.page.locator(".image-LwB0PG > img").first().click();
    const imageEditorPage = await page2Promise;
    await imageEditorPage.getByRole("dialog").getByText("Create").click();
    const redirectUrl = await imageEditorPage.url();
    return { imageEditorPage, redirectUrl };
  }

  async openTextToSpeech() {
    await this.aside.magicTools.waitFor({ state: "visible" });
    await this.aside.magicTools.click();
    return await this.page.getByText("Text to speech", { exact: true }).nth(1);
  }

  async openShareWindow() {
    await this.aside.share.waitFor({ state: "visible" });
    await this.aside.share.click();
    await this.page.getByRole("button", { name: "Share files" }).click();
    await this.page.getByRole("menuitem", { name: "From space" }).click();
    const shareWindow = await this.page.getByText("Share", { exact: true });
    await shareWindow.waitFor({ state: "visible", timeout: 5000 });
    return shareWindow;
  }
  async createNewSpace() {
    await this.aside.space.waitFor({ state: "visible" });
    await this.aside.space.click();
    const createSpaceBtn = await this.page.locator("#create-bottom");
    return createSpaceBtn;
  }
  async searchTemplates() {
    await this.aside.templates.waitFor({ state: "visible" });
    await this.aside.templates.click();
    const templateSearchInput = await this.page.locator(
      ".lv-template__search__bg"
    );
    return templateSearchInput;
  }
}

export default HomePage;
