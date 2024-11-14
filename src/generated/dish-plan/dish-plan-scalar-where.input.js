"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DishPlanScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let DishPlanScalarWhereInput = DishPlanScalarWhereInput_1 = class DishPlanScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DishPlanScalarWhereInput_1], { nullable: true })
], DishPlanScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishPlanScalarWhereInput_1], { nullable: true })
], DishPlanScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishPlanScalarWhereInput_1], { nullable: true })
], DishPlanScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishPlanScalarWhereInput.prototype, "updatedAt", void 0);
DishPlanScalarWhereInput = DishPlanScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DishPlanScalarWhereInput);
exports.DishPlanScalarWhereInput = DishPlanScalarWhereInput;
//# sourceMappingURL=dish-plan-scalar-where.input.js.map