import * as reporter from "cucumber-html-reporter";

const options = {
  // theme: 'bootstrap', hierarchy
  theme: "hierarchy",
  jsonFile: "src/reports/cucumber-report.json",
  output: "src/reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "DEV",
  },
};

reporter.generate(options);

reporter.generate(options);
