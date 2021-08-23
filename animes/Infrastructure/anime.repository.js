const AnimeSchema = require("../../Domain/schemas/anime.schema");

async function get() {
  return AnimeSchema.find();
}

async function getById(id) {
  return AnimeSchema.findOne({ _id: id });
}

async function create(data) {
  const anime = new AnimeSchema(data);
  await anime.save();
  return anime;
}

module.exports = {
  create,
  getById,
  get,
};
