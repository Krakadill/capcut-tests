import BasePage from "./basePage";

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Enter email" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.errorMessage = page.getByText("Enter a valid email address");
  }
  async enterWrongEmail(email) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }
  async isErrorMessageVisible() {
    return await this.getErrorMsg(this.errorMessage);
  }
}
export default SignupPage;
