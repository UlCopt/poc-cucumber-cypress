import path from 'path';
import { Builder, WebDriver } from 'selenium-webdriver';
import { ServiceBuilder as ServiceChrome } from 'selenium-webdriver/chrome';
import { ServiceBuilder as ServiceFirefox } from 'selenium-webdriver/firefox';

const chromeDriverPath = path.join(
    __dirname,
    '../../@common/configuration/browser-drivers/chrome/chromedriver'
);
const geckoDriverPath = path.join(
    __dirname,
    '../../@common/configuration/browser-drivers/firefox/geckodriver'
);

export class WebDriverManager {
    public static getDriver(driverName: string): WebDriver {
        return WebDriverManager.createDriver(driverName);
    }

    private static createDriver(driverName: string): WebDriver {
        switch (driverName) {
            case 'chrome':
                return new Builder()
                    .forBrowser('chrome')
                    .setChromeService(new ServiceChrome(chromeDriverPath))
                    .build();
            case 'firefox':
                return new Builder()
                    .forBrowser('firefox')
                    .setFirefoxService(new ServiceFirefox(geckoDriverPath))
                    .build();
            default:
                throw Error(`Fail: driver name not found: ${driverName}`);
        }
    }
}
