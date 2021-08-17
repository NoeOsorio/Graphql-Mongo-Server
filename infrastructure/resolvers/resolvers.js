const { getAnimes } = require("../repositories/anime.repository");

module.exports = {
  Query: {
    animes: getAnimes,
    course: (root, { id }) => courses.find((element) => element._id === id),
  },
};
