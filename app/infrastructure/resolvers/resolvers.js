const AnimeController = require("../../../animes/Ports/anime.controller");

module.exports = {
  Query: {
    ...AnimeController.query,
  },
  Mutation: {
    ...AnimeController.mutation,
  },
  // AnimeController,
  // AnimeMutation: {
  //   createAnime: AnimeController.createAnime,
  // },
};
