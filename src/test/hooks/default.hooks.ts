import { AfterAll, BeforeAll, Before, After } from "cucumber";
import { logger } from "../../@common/logger/default.logger";

BeforeAll({ timeout: 60 * 1000 }, function () {
  logger.info("Start test scenarios");
});

AfterAll(function () {
  logger.info("End test scenarios");
});

Before({ tags: "@testing" }, async function () {});

After({ tags: "@testingWeb" }, async function () {
  return this.driver.quit();
});
