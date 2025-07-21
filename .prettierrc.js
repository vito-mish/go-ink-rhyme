module.exports = {
  semi: false,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  overrides: [
    {
      "files": ["translation.js"],
      "options": {
        "printWidth": 1000000
      }
    }
  ],
};
