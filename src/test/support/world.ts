import { setWorldConstructor } from 'cucumber';
import { WebDriverManager } from '../../main/managers/web.driver.manager';

// @ts-ignore
function CustomWorld({ attach, parameters }) {
    // @ts-ignore
    this.attach = attach;
    // @ts-ignore
    this.parameters = parameters;
    // @ts-ignore
    this.baseUrl = 'http://qainterview.pythonanywhere.com';
    // @ts-ignore
    const browser: string = this.parameters.browser;
    // @ts-ignore
    this.driver = WebDriverManager.getDriver(browser);
}

setWorldConstructor(CustomWorld);
