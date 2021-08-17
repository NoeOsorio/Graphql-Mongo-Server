const {
  getAnimes,
} = require("../../../animes/Infrastructure/anime.repository");

module.exports = {
  Query: {
    animes: getAnimes,
    course: (root, { id }) => courses.find((element) => element._id === id),
  },
};
