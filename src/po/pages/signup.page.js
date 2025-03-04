import BasePage from "./basePage";

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Enter email" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.errorMessage = page.getByText("Enter a valid email address");
  }
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }
  async clickContinue() {
    await this.continueButton.click();
  }
  async getErrorMessage() {
    return await this.errorMessage.innerText();
  }
}
export default SignupPage;
