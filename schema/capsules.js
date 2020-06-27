const { GraphQLInt, GraphQLString, GraphQLObjectType } = require("graphql");

// Capsule Type
const CapsuleType = new GraphQLObjectType({
  name: "Capsule",
  fields: () => ({
    reuse_count: { type: GraphQLInt },
    water_landings: { type: GraphQLInt },
    land_landings: { type: GraphQLInt },
    last_update: { type: GraphQLString },
    // launches:
    serial: { type: GraphQLString },
    status: { type: GraphQLString },
    id: { type: GraphQLString },
  }),
});

module.exports = CapsuleType;
