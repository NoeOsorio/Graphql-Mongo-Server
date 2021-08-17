const animeSchema = require("../../domain/schemas/anime.schema");

async function getAnimes() {
  return animeSchema.find();
}

module.exports = {
  getAnimes,
};
