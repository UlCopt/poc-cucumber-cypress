import { FactorialRequest } from "../../../@common/types/factorial";
import { logger } from "../../../@common/logger/default.logger";

const FactorialService = require("factorial.service");

export async function getFactorial(request: FactorialRequest): Promise<string | null> {
  try {
    const response = await FactorialService.getFactorial(request);
    if (response) {
      return response;
    }
    logger.error(`Unable to get factorial for the data: ${request.data.number}`);
    return null;
  } catch (err) {
    logger.error(`Error when try to get a factorial: ${request.data}. Error: ${err.message}`);
    return null;
  }
}
