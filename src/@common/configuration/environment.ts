import config from "./config";

export const environment = {
  nodeEnv: config.NODE_ENV,
  logDir: config.LOG_DIR,
  logLevel: config.LOG_LEVEL,
  logFile: config.LOG_FILE,
};
