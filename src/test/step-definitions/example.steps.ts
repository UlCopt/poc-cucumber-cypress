import { Given, Then, When } from "cucumber";
import { WebDriverManager } from "../../main/managers/web.driver.manager";
import { assert } from "chai";

import FactorialPage from "../../main/pages-objects/factorial.page";
import { getFactorial, getPrivacy, getTermsAndConditions } from "../../main/api/factorial/factorial.controller";
Given("A {string} and a {string}", { timeout: 60 * 1000 }, async function (url, browser) {
  this.driver = await new WebDriverManager().getDriver(browser);
  this.driver.get(url);
  this.factorialPage = await new FactorialPage(this.driver);
});

Given("A {int} to calculate on api", async function (factorial) {
  this.factorialPage = factorial;
  this.resultActual = await getFactorial(factorial);
});

When("Put the {int} value on page", { timeout: 60 * 1000 }, async function (value) {
  this.value = value;
  await this.factorialPage.enterFactorial(value);
});

Then("Verify the value on page", { timeout: 60 * 1000 }, async function () {
  await this.factorialPage.calculate();
  const valueExpected = await getFactorial(this.value);
  if (!valueExpected) {
    assert.fail("Fail. Factorial number not calculated");
  }
  const messageExpected = await this.factorialPage.getMessageResult();
  assert.equal(`The factorial of ${this.value} is: ${valueExpected}`, messageExpected);
});

Then("Verify the {int}", async function (valueExpected) {
  assert.equal(this.resultActual, valueExpected, "Fail. Error on value expected on api factorial");
});

Then("Try to calculate factorial with a {int} on page", async function (invalidValue) {
  await this.factorialPage.enterFactorial(invalidValue);
  await this.factorialPage.calculate();
  const messageActual = await this.factorialPage.getMessageResult();
  assert.equal(messageActual, "Please enter an integer", "Fail. Error message expected not found");
});

Then("Try to calculate factorial with a {string} on page", async function (invalidValue) {
  await this.factorialPage.enterFactorial(invalidValue);
  await this.factorialPage.calculate();
  const messageActual = await this.factorialPage.getMessageResult();
  assert.equal(messageActual, "Please enter an integer", "Fail. Error message expected not found");
});

Then("Verify the visual elements on web", async function () {
  const titleActual = await this.factorialPage.getTitlePage();
  const titleBrowserActual = await this.factorialPage.getTitleBrowser();
  assert.equal(titleActual, "The greatest factorial calculator!", "Fail. Error title expected not found");
  assert.equal(titleBrowserActual, "Factorial", "Fail. Error title browser expected not found");
});

Then("Verify terms and conditions", async function () {
  await this.factorialPage.openTerms();
  const termsAndConditionsActual = await this.factorialPage.getTermsAndConditions();
  const termsAndConditionsExpected = await getTermsAndConditions();
  assert.equal(termsAndConditionsActual, termsAndConditionsExpected, "Fail. Error message terms and conditions expected not found");
});

Then("Verify privacy", async function () {
  await this.factorialPage.openPrivacy();
  const privacyActual = await this.factorialPage.getPrivacy();
  const privacyExpected = await getPrivacy();
  assert.equal(privacyActual, privacyExpected, "Fail. Error message privacy expected not found");
});
