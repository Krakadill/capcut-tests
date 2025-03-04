import BasePage from "./basePage";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Enter email" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.passwordInput = page.getByRole("textbox", { name: "Enter password" });
    this.signInButton = page.getByRole("button", { name: "Sign in" });
  }
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async waitForLoginSuccess() {
    await this.page.waitForURL(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
  }
}

export default LoginPage;
