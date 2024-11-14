"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var MealTemplateScalarFieldEnum;
(function (MealTemplateScalarFieldEnum) {
    MealTemplateScalarFieldEnum["id"] = "id";
    MealTemplateScalarFieldEnum["name"] = "name";
    MealTemplateScalarFieldEnum["userId"] = "userId";
    MealTemplateScalarFieldEnum["createdAt"] = "createdAt";
    MealTemplateScalarFieldEnum["updatedAt"] = "updatedAt";
})(MealTemplateScalarFieldEnum = exports.MealTemplateScalarFieldEnum || (exports.MealTemplateScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(MealTemplateScalarFieldEnum, { name: 'MealTemplateScalarFieldEnum', description: undefined });
//# sourceMappingURL=meal-template-scalar-field.enum.js.map