import { WebDriver } from "selenium-webdriver";

class PageObject {
   protected browser: WebDriver;

   constructor(driver: WebDriver) {
        this.browser = driver;
    }

}

export default PageObject;
