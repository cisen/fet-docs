module.exports = {
  apps : [{
    name        : "yycomponent",
    script      : "./YYComponentApp.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }, {
    name        : "yymobile",
    script      : "./YYMobileApp.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}
