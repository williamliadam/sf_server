"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MealTemplateWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const dish_template_list_relation_filter_input_1 = require("../dish-template/dish-template-list-relation-filter.input");
let MealTemplateWhereInput = MealTemplateWhereInput_1 = class MealTemplateWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MealTemplateWhereInput_1], { nullable: true })
], MealTemplateWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealTemplateWhereInput_1], { nullable: true })
], MealTemplateWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MealTemplateWhereInput_1], { nullable: true })
], MealTemplateWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "createBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_list_relation_filter_input_1.DishTemplateListRelationFilter, { nullable: true })
], MealTemplateWhereInput.prototype, "dishTemplates", void 0);
MealTemplateWhereInput = MealTemplateWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateWhereInput);
exports.MealTemplateWhereInput = MealTemplateWhereInput;
//# sourceMappingURL=meal-template-where.input.js.map