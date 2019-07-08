"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const lodash_1 = require("lodash");
const schema_1 = require("./modules/publicphotos/schema");
const BaseQuery = `
	scalar DateTimeType
	type Query {
	_: Boolean
	}
	type Mutation {
	_: Boolean
	}
`;
const allTypeDefs = [
    BaseQuery,
    schema_1.typeDef
];
const allResolvers = lodash_1.merge({}, schema_1.resolvers);
exports.default = apollo_server_1.makeExecutableSchema({
    typeDefs: allTypeDefs,
    resolvers: allResolvers
});
//# sourceMappingURL=resolvers.js.map