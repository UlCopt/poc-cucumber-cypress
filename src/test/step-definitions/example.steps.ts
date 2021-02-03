import { Before, Given, Then, When } from 'cucumber';
import { assert } from 'chai';

import FactorialPage from '../../main/pages-objects/factorial.page';
import {
    getFactorial,
    getPrivacy,
    getTermsAndConditions,
} from '../../main/api/factorial/factorial.controller';

let factorialPage: FactorialPage;

Before({ timeout: 24 * 1000 }, async function () {
    this.driver.get(this.baseUrl);
    factorialPage = new FactorialPage(this.driver);
});

// todo: refactor step
Given('Open the {string} page', async function (url) {
    console.log(url);
});

Given(
    'A {int} to calculate on api',
    { timeout: 60 * 1000 },
    async function (factorial) {
        factorialPage = factorial;
        this.resultActual = await getFactorial(factorial);
    }
);

When(
    'Put the {int} value on page',
    { timeout: 60 * 1000 },
    async function (value) {
        this.value = value;
        await factorialPage.enterFactorial(value);
    }
);

Then('Verify the value on page', { timeout: 60 * 1000 }, async function () {
    await factorialPage.calculate();
    const valueExpected = await getFactorial(this.value);
    if (!valueExpected) {
        assert.fail('Fail. Factorial number not calculated');
    }
    const messageExpected = await factorialPage.getMessageResult();
    assert.equal(
        `The factorial of ${this.value} is: ${valueExpected}`,
        messageExpected
    );
});

Then(
    'Verify the {int}',
    { timeout: 60 * 1000 },
    async function (valueExpected) {
        assert.equal(
            this.resultActual,
            valueExpected,
            'Fail. Error on value expected on api factorial'
        );
    }
);

Then(
    'Try to calculate factorial with a {int} on page',
    { timeout: 60 * 1000 },
    async function (invalidValue) {
        await factorialPage.enterFactorial(invalidValue);
        await factorialPage.calculate();
        const messageActual = await factorialPage.getMessageResult();
        assert.equal(
            messageActual,
            'Please enter an integer',
            'Fail. Error message expected not found'
        );
    }
);

Then(
    'Try to calculate factorial with a {string} on page',
    { timeout: 60 * 1000 },
    async function (invalidValue) {
        await factorialPage.enterFactorial(invalidValue);
        await factorialPage.calculate();
        const messageActual = await factorialPage.getMessageResult();
        assert.equal(
            messageActual,
            'Please enter an integer',
            'Fail. Error message expected not found'
        );
    }
);

Then(
    'Verify the visual elements on web',
    { timeout: 60 * 1000 },
    async function () {
        const titleActual = await factorialPage.getTitlePage();
        const titleBrowserActual = await factorialPage.getTitleBrowser();
        assert.equal(
            titleActual,
            'The greatest factorial calculator!',
            'Fail. Error title expected not found'
        );
        assert.equal(
            titleBrowserActual,
            'Factorial',
            'Fail. Error title browser expected not found'
        );
    }
);

Then('Verify terms and conditions', { timeout: 60 * 1000 }, async function () {
    await factorialPage.openTerms();
    const termsAndConditionsActual = await factorialPage.getTermsAndConditions();
    const termsAndConditionsExpected = await getTermsAndConditions();
    assert.equal(
        termsAndConditionsActual,
        termsAndConditionsExpected,
        'Fail. Error message terms and conditions expected not found'
    );
});

Then('Verify privacy', { timeout: 60 * 1000 }, async function () {
    await factorialPage.openPrivacy();
    const privacyActual = await factorialPage.getPrivacy();
    const privacyExpected = await getPrivacy();
    assert.equal(
        privacyActual,
        privacyExpected,
        'Fail. Error message privacy expected not found'
    );
});
