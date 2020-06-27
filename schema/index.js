const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} = require("graphql");
const CapsuleType = require("./capsules");
const LaunchType = require("./launches");
const RocketType = require("./rockets");
const axios = require("axios");
const CoreType = require("./core");
const CrewType = require("./crew");

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((res) => res.data);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then((res) => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then((res) => res.data);
      },
    },
    capsules: {
      type: GraphQLList(CapsuleType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v4/capsules")
          .then((res) => res.data);
      },
    },
    cores: {
      type: GraphQLList(CoreType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v4/cores")
          .then((res) => res.data);
      },
    },
    core: {
      type: CoreType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/cores/${args.id}`)
          .then((res) => res.data);
      },
    },
    crews: {
      type: GraphQLList(CrewType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v4/crew")
          .then((res) => res.data);
      },
    },
    crew: {
      type: CrewType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/crew/${args.id}`)
          .then((res) => res.data);
      },
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
