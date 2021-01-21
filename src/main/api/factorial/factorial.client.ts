import axios from "axios";
import config from "../../../@common/configuration/config";
import { logger } from "../../../@common/logger/default.logger";
import { FactorialRequest, FactorialResponse } from "../../../@common/types/factorial";

const api = axios.create({
  baseURL: config.FACTORIAL_API_DOMAIN,
});

/**
 * @returns token response or error message
 */
exports.getFactorial = async function (request: FactorialRequest): Promise<FactorialResponse> {
  try {
    const response = await api.post(`/factorial`, request);
    return response.data;
  } catch (err) {
    logger.error(`Unable to get factorial result. Error: ${err.message}`);
    throw err;
  }
};
