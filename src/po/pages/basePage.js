class BasePage {
  constructor(page) {
    this.page = page;
  }
  async open(url) {
    await this.page.goto(url);
  }
  async waitForUrl(expectedUrl, options = { timeout: 60000 }) {
    await this.page.waitForURL(expectedUrl, options);
  }
  async getErrorMsg(locator) {
    return await locator.isVisible();
  }
}

export default BasePage;
