"use strict";

const assert = require("assert");
const { CLIEngine } = require("eslint");
const { rules } = require("./../");

const cli = new CLIEngine({
  "useEslintrc": false,
  "envs": [ "node", "es6" ],
  "parserOptions": { "ecmaVersion": 2017 },
  rules
});

const report = cli.executeOnFiles(["index.js", "test/"]);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

["index.js", "test/index.js"].forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});

