const courses = [
  {
    _id: "1",
    title: "Titulo 1",
    teacher: "Noe",
    description: "Un curso",
    topic: "Graphql",
  },
  {
    _id: "2",
    title: "Titulo 2",
    teacher: "Noe",
    description: "Un curso",
    topic: "Graphql",
  },
  {
    _id: "3",
    title: "Titulo 3",
    teacher: "Noe",
    description: "Un curso",
    topic: "Graphql",
  },
  {
    _id: "4",
    title: "Titulo 4",
    teacher: "Noe",
    description: "Un curso",
    topic: "Graphql",
  },
];

module.exports = {
  Query: {
    courses: () => courses,
    course: (root, { id }) => courses.find((element) => element._id === id),
  },
};
