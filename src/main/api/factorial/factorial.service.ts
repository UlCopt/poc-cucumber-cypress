import { FactorialRequest, FactorialResponse } from "../../../@common/types/factorial";

const FactorialClient = require("factorial.client");

exports.getFactorial = async function (request: FactorialRequest): Promise<FactorialResponse> {
  return await FactorialClient.getFactorial(request);
};
