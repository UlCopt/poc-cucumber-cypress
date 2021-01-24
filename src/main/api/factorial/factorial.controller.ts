import { logger } from "../../../@common/logger/default.logger";

const FactorialService = require("./factorial.service");

export async function getFactorial(factorialNumberToCalculate: number): Promise<string | null> {
  try {
    const response = await FactorialService.getFactorial(factorialNumberToCalculate);
    if (response) {
      return response;
    }
    logger.error(`Unable to get factorial for the number: ${factorialNumberToCalculate}`);
    return null;
  } catch (err) {
    logger.error(`Error when try to send a request. Error: ${err.message}`);
    return null;
  }
}

export async function getPrivacy(): Promise<string | null> {
  try {
    const response = await FactorialService.getPrivacy();
    if (response) {
      return response;
    }
    logger.error(`Unable to get privacy`);
    return null;
  } catch (err) {
    logger.error(`Error when try to send a request. Error: ${err.message}`);
    return null;
  }
}

export async function getTermsAndConditions(): Promise<string | null> {
  try {
    const response = await FactorialService.getTermsAndConditions();
    if (response) {
      return response;
    }
    logger.error(`Unable to get terms and conditions`);
    return null;
  } catch (err) {
    logger.error(`Error when try to send a request. Error: ${err.message}`);
    return null;
  }
}
