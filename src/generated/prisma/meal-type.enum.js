"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealType = void 0;
const graphql_1 = require("@nestjs/graphql");
var MealType;
(function (MealType) {
    MealType["BREAKFAST"] = "BREAKFAST";
    MealType["LUNCH"] = "LUNCH";
    MealType["DINNER"] = "DINNER";
    MealType["MEAL"] = "MEAL";
})(MealType = exports.MealType || (exports.MealType = {}));
(0, graphql_1.registerEnumType)(MealType, { name: 'MealType', description: undefined });
//# sourceMappingURL=meal-type.enum.js.map