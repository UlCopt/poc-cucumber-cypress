import { By, WebDriver, Locator } from "selenium-webdriver";
import PageObject from "./page.object";

class FactorialPage extends PageObject {
  //ATTRIBUTES
  private inputFactorial: Locator = By.id("number");
  private submitCalculate: Locator = By.id("getFactorial");
  private messageResult: Locator = By.xpath("/html/body/div[1]/div[2]/div/p");
  private tittle: Locator = By.className("margin-base-vertical text-center");
  private termsLink: Locator = By.linkText("Terms and Conditions");
  private privacyLink: Locator = By.linkText("Privacy");
  private terms: Locator = By.css("body");
  private privacy: Locator = By.css("body");

  //CONSTRUCTOR
  constructor(browser: WebDriver) {
    super(browser);
  }

  public async enterFactorial(value: string) {
    await this.browser.findElement(this.inputFactorial).sendKeys(value);
  }

  public async getMessageResult(): Promise<string> {
    await this.browser.sleep(750);
    const element = await this.browser.findElement(this.messageResult);
    return await element.getText();
  }

  public async calculate() {
    await this.browser.findElement(this.submitCalculate).click();
  }

  //Factoriall
  public async getTitleBrowser(): Promise<string> {
    await this.browser.sleep(200);
    return await this.browser.getTitle();
  }

  //The greatest factorial calculator!
  public async getTitlePage(): Promise<string> {
    await this.browser.sleep(200);
    return this.browser.findElement(this.tittle).getText();
  }

  public async openTerms(): Promise<void> {
    await this.browser.sleep(200);
    await this.browser.findElement(this.termsLink).click();
    await this.browser.sleep(3000);
  }

  public async openPrivacy(): Promise<void> {
    await this.browser.sleep(200);
    await this.browser.findElement(this.privacyLink).click();
    await this.browser.sleep(3000);
  }

  public async getPrivacy(): Promise<string> {
    await this.browser.sleep(200);
    return this.browser.findElement(this.privacy).getText();
  }

  public async getTermsAndConditions(): Promise<string> {
    await this.browser.sleep(200);
    return this.browser.findElement(this.terms).getText();
  }
}

export default FactorialPage;
