"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var RecipeScalarFieldEnum;
(function (RecipeScalarFieldEnum) {
    RecipeScalarFieldEnum["id"] = "id";
    RecipeScalarFieldEnum["name"] = "name";
    RecipeScalarFieldEnum["stars"] = "stars";
    RecipeScalarFieldEnum["authorId"] = "authorId";
    RecipeScalarFieldEnum["createdAt"] = "createdAt";
    RecipeScalarFieldEnum["updatedAt"] = "updatedAt";
})(RecipeScalarFieldEnum = exports.RecipeScalarFieldEnum || (exports.RecipeScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined });
//# sourceMappingURL=recipe-scalar-field.enum.js.map