"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateNullableRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_where_input_1 = require("./meal-template-where.input");
let MealTemplateNullableRelationFilter = class MealTemplateNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true })
], MealTemplateNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true })
], MealTemplateNullableRelationFilter.prototype, "isNot", void 0);
MealTemplateNullableRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateNullableRelationFilter);
exports.MealTemplateNullableRelationFilter = MealTemplateNullableRelationFilter;
//# sourceMappingURL=meal-template-nullable-relation-filter.input.js.map