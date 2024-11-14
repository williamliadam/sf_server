"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var DishTemplateScalarFieldEnum;
(function (DishTemplateScalarFieldEnum) {
    DishTemplateScalarFieldEnum["id"] = "id";
    DishTemplateScalarFieldEnum["recipeId"] = "recipeId";
    DishTemplateScalarFieldEnum["amount"] = "amount";
    DishTemplateScalarFieldEnum["createdAt"] = "createdAt";
    DishTemplateScalarFieldEnum["updatedAt"] = "updatedAt";
    DishTemplateScalarFieldEnum["mealTemplateId"] = "mealTemplateId";
})(DishTemplateScalarFieldEnum = exports.DishTemplateScalarFieldEnum || (exports.DishTemplateScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(DishTemplateScalarFieldEnum, { name: 'DishTemplateScalarFieldEnum', description: undefined });
//# sourceMappingURL=dish-template-scalar-field.enum.js.map