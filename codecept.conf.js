exports.config = {
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: false
    }
  },
  include: {
    I: './steps_file.js',
    Login: './pages/Login.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    searchPage: './pages/Search.js',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'Testcafe_BDD_Example'
}