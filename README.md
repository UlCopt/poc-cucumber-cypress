<h3 align="center">POC-Cucumber-Selenium</h3>

---

## 📝 Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)

## 🧐 About <a name = "about"></a>

POC project: cucumber js - typescript - nodejs - selenium js

### Prerequisites

What things you need to install the software and how to install them.

Webdrivers: chrome and firefox only for macos, if you want runner on another OS, make sure download the webdriver required for that system

```
node@12
```

### Installing

```
git clone https://github.com/UlCopt/poc-cucumber-selenium.git
cd poc-cucumber-selenium
npm i 
```

### Env vars

```
#domain
FACTORIAL_API_DOMAIN = endpoint web site
```
### 🔧 Running the tests <a name = "tests"></a>

Run all tests

```
npm test
```

Run only web test

```
npm run testingWeb
```

Run only api test

```
npm run testingApi
```

### 🔧 Generate report <a name = "reports"></a>

Generate a html report after tests was executed

```
npm run report
```

### 🔧 Generate steps definitions snippets from new features <a name = "snippets"></a>

Generate a html report after tests was executed

```
npm run snippets
```


### 🔧 Troubleshooting <a name = "troubleshotting"></a>

Error: "“chromedriver” cannot be opened because the developer cannot be verified"
Open terminal and run 

```
xattr -d com.apple.quarantine chromedriver 
```
on location folder webdrivers
