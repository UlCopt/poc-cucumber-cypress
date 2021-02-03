import * as dotenv from 'dotenv';
dotenv.config();

export default {
    // #region logs
    NODE_ENV: process.env.ENV || process.env.NODE_ENV,
    LOG_DIR: process.env.LOG_DIR || 'logs',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    LOG_FILE: process.env.LOG_FILE || 'app.log',
    // #endregion logs

    FACTORIAL_API_DOMAIN: process.env.FACTORIAL_API_DOMAIN,
};
