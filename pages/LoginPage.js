export default class LoginPage {
  constructor(Page) {
    this.page = Page;
    this.url = "https://demoblaze.com/";
    this.login_bn = "#login2";
    this.username_input = "#loginusername";
    this.password_input = "#loginpassword";
    this.login_btn = "//button[text()='Log in']";
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async loginmethod(username, password) {
    await this.page.click(this.login_bn);
    await this.page.fill(this.username_input, username);
    await this.page.fill(this.password_input, password);
    await this.page.click(this.login_btn);
  }
}
