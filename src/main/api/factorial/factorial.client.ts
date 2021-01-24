import { logger } from "../../../@common/logger/default.logger";
import { FactorialResponse } from "../../../@common/types/factorial";
import axios from "axios";
import config from "../../../@common/configuration/config";
const FormData = require("form-data");
const baseURL = config.FACTORIAL_API_DOMAIN;
/**
 * @returns token response or error message
 */
exports.getFactorial = async function (value: number): Promise<number> {
  try {
    const bodyData = new FormData();
    bodyData.append("number", value);
    const response = await axios({
      method: "post",
      url: `${baseURL}` + "/factorial",
      headers: bodyData.getHeaders(),
      data: bodyData,
    });
    const data: FactorialResponse = response.data;
    return data.answer;
  } catch (err) {
    logger.error(`Unable to get factorial result. Error: ${err.message}`);
    throw err;
  }
};

exports.getPrivacy = async function (): Promise<string> {
  try {
    const response = await axios({
      method: "get",
      url: `${baseURL}` + "/privacy",
    });
    return response.data;
  } catch (err) {
    logger.error(`Unable to get privacy. Error: ${err.message}`);
    throw err;
  }
};

exports.getTermsAndConditions = async function (): Promise<string> {
  try {
    const response = await axios({
      method: "get",
      url: `${baseURL}` + "/terms",
    });
    return response.data;
  } catch (err) {
    logger.error(`Unable to get terms and conditions. Error: ${err.message}`);
    throw err;
  }
};
