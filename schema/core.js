const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const CoreType = new GraphQLObjectType({
  name: "Core",
  fields: () => ({
    block: { type: GraphQLInt },
    reuse_count: { type: GraphQLInt },
    rtls_attempts: { type: GraphQLInt },
    rtls_landings: { type: GraphQLInt },
    asds_attempts: { type: GraphQLInt },
    asds_landings: { type: GraphQLInt },
    last_update: { type: GraphQLString },
    // "launches": [
    //     "5eb87d2bffd86e000604b375",
    //     "5eb87d31ffd86e000604b379",
    //     "5eb87d3fffd86e000604b382",
    //     "5eb87d44ffd86e000604b386"
    // ],
    serial: { type: GraphQLString },
    status: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

module.exports = CoreType;
