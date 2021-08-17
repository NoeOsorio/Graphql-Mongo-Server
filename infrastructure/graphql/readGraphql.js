const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");

function loadGraphs() {
  const load = loadFilesSync(join(__dirname, "../../"), {
    extensions: ["graphql"],
    recursive: true,
  });
  return mergeTypeDefs(load);
}

module.exports = loadGraphs;
