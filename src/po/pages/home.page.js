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
    return await page1Promise;
  }

  async openImageEditor() {
    await this.startImageEditing.click();
    const page2Promise = this.page.waitForEvent("popup");
    await this.page.locator(".image-LwB0PG > img").first().click();
    const page2 = await page2Promise;
    return page2;
  }
}

export default HomePage;
