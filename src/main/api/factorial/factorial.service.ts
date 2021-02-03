const FactorialClient = require('./factorial.client');

exports.getFactorial = async function (value: number): Promise<number> {
    return await FactorialClient.getFactorial(value);
};

exports.getPrivacy = async function (): Promise<string> {
    return await FactorialClient.getPrivacy();
};

exports.getTermsAndConditions = async function (): Promise<string> {
    return await FactorialClient.getTermsAndConditions();
};
