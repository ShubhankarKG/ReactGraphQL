const { GraphQLObjectType, GraphQLString } = require("graphql");

const CrewType = new GraphQLObjectType({
  name: "Crew",
  fields: () => ({
    name: { type: GraphQLString },
    agency: { type: GraphQLString },
    image: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    // "launches": [
    //     "5eb87d2bffd86e000604b375",
    //     "5eb87d31ffd86e000604b379",
    //     "5eb87d3fffd86e000604b382",
    //     "5eb87d44ffd86e000604b386"
    // ],
    status: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

module.exports = CrewType;
