module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  globals: {
    TNS_APP_MODE: true,
    TNS_APP_PLATFORM: true
  }
};
