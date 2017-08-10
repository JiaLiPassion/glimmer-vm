'use strict';


let config = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_dev": [
    "PhantomJS"
  ],
  "launch_in_ci": [
    "PhantomJS"
  ]
};

module.exports = config;
