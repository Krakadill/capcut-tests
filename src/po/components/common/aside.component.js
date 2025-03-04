class Aside {
  constructor(page) {
    this.page = page;
    this.magicTools = page.getByText("Magic tools");
    this.share = page.getByText("Share and schedule");
    this.space = page.getByText("Create new space");
    this.templates = page.getByText("Templates", { exact: true });
  }
}

export default Aside;
