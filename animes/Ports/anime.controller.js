const { get, getById, create } = require("../Infrastructure/anime.repository");

module.exports = {
  query: {
    viewAnime: (root, { id }) => {
      return getById(id);
    },

    listAnimes: get,
  },
  mutation: {
    createAnime: async (root, { input }) => {
      return create(input);
    },
  },
};
