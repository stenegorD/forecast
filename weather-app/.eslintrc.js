module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-mixed-spaces-and-tabs': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'default-param-last': 0,
    'react/jsx-props-no-spreading': 0,
    'quotes': [2, 'single', { "avoidEscape": true }],
    'react/jsx-filename-extension': [1, { 'extensions': [".js", ".jsx"] }],
    'no-tabs': 0,
    'no-useless-concat': 0,
    'camelcase': [0, { "properties": "never" }],
    'react/jsx-no-bind': [2, {"allowFunctions": true, "allowArrowFunctions": true }],
    'consistent-return': 0,
    'max-len': [2, { "code": 110, "ignoreUrls": true, "ignoreTrailingComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }]
  },
};
