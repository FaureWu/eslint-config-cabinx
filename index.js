module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/component-definition-name-casing': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  },
  globals: {
    XPage: true,
    XComponent: true,
    SysComponent: true,
    $: true,
    kayak: true,
    moment: true,
    CabinX: true,
    Vue: true,
    galleon: true,
    DmallTracker: true
  }
  
}