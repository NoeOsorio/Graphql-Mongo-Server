const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

function loadGraphql() {
  const load = loadFilesSync(join(__dirname, "../../../"), {
    extensions: ["graphql"],
    recursive: true,
  });
  return mergeTypeDefs(load);
}

module.exports = loadGraphql;
