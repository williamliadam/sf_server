"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_type_enum_1 = require("../prisma/meal-type.enum");
const dish_plan_unchecked_create_nested_many_without_used_meal_plan_input_1 = require("../dish-plan/dish-plan-unchecked-create-nested-many-without-used-meal-plan.input");
let MealPlanUncheckedCreateInput = class MealPlanUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MealPlanUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_unchecked_create_nested_many_without_used_meal_plan_input_1.DishPlanUncheckedCreateNestedManyWithoutUsedMealPlanInput, { nullable: true })
], MealPlanUncheckedCreateInput.prototype, "dishPlans", void 0);
MealPlanUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUncheckedCreateInput);
exports.MealPlanUncheckedCreateInput = MealPlanUncheckedCreateInput;
//# sourceMappingURL=meal-plan-unchecked-create.input.js.map