"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_template_where_input_1 = require("./meal-template-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const dish_template_list_relation_filter_input_1 = require("../dish-template/dish-template-list-relation-filter.input");
let MealTemplateWhereUniqueInput = class MealTemplateWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_input_1.MealTemplateWhereInput], { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_input_1.MealTemplateWhereInput], { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_template_where_input_1.MealTemplateWhereInput], { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "createBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_list_relation_filter_input_1.DishTemplateListRelationFilter, { nullable: true })
], MealTemplateWhereUniqueInput.prototype, "dishTemplates", void 0);
MealTemplateWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateWhereUniqueInput);
exports.MealTemplateWhereUniqueInput = MealTemplateWhereUniqueInput;
//# sourceMappingURL=meal-template-where-unique.input.js.map