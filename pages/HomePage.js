export default class HomePage {
  constructor(page) {
    this.page = page;
    this.productlist = "//div[@id='tbodyid']//div//div//div//a";
    this.addtocart = "//a[text()='Add to cart']";
    this.cart = "//a[text()='Cart']";
  }

  //actions
  async addtocartmethod() {
    const products = await this.page.$$(this.productlist);
    for (product of products) {
      if (productname == (await product.textcontent())) {
        await product.click();
        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }

      await this.page.locator(this.addtocart).click();
    });
  }

  async clickcart() {
    await this.page.locator(this.cart).click();
  }
}
