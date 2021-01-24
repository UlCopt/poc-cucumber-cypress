import path from "path";
import { Builder, WebDriver } from "selenium-webdriver";
import { ServiceBuilder as serviceChrome } from "selenium-webdriver/chrome";
import { ServiceBuilder as firefox } from "selenium-webdriver/firefox";

const chromeDriverPath = path.join(__dirname, "../../@common/configuration/browser-drivers/chrome/chromedriver");
const geckoDriverPath = path.join(__dirname, "../../@common/configuration/browser-drivers/firefox/geckodriver");

export class WebDriverManager {
  public async getDriver(driverName: string): Promise<WebDriver> {
    return await WebDriverManager.createDriver(driverName);
  }

  private static async createDriver(driverName: string): Promise<WebDriver> {
    switch (driverName) {
      case "chrome":
        const serviceBuilderChrome = new serviceChrome(chromeDriverPath);
        return new Builder().forBrowser("chrome").setChromeService(serviceBuilderChrome).build();
      case "firefox":
        const serviceBuilderFirefox = new firefox(geckoDriverPath);
        return new Builder().forBrowser("firefox").setFirefoxService(serviceBuilderFirefox).build();
      default:
        throw Error(`Fail: driver name not found: ${driverName}`);
    }
  }
}
