const animeSchema = require("../../Domain/schemas/anime.schema");

async function getAnimes() {
  return animeSchema.find();
}

module.exports = {
  getAnimes,
};
