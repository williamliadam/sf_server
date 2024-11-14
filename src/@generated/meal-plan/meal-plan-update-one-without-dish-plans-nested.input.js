"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateOneWithoutDishPlansNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_create_without_dish_plans_input_1 = require("./meal-plan-create-without-dish-plans.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_create_or_connect_without_dish_plans_input_1 = require("./meal-plan-create-or-connect-without-dish-plans.input");
const meal_plan_upsert_without_dish_plans_input_1 = require("./meal-plan-upsert-without-dish-plans.input");
const meal_plan_where_input_1 = require("./meal-plan-where.input");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const meal_plan_update_to_one_with_where_without_dish_plans_input_1 = require("./meal-plan-update-to-one-with-where-without-dish-plans.input");
let MealPlanUpdateOneWithoutDishPlansNestedInput = class MealPlanUpdateOneWithoutDishPlansNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_without_dish_plans_input_1.MealPlanCreateWithoutDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_create_without_dish_plans_input_1.MealPlanCreateWithoutDishPlansInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_or_connect_without_dish_plans_input_1.MealPlanCreateOrConnectWithoutDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_create_or_connect_without_dish_plans_input_1.MealPlanCreateOrConnectWithoutDishPlansInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_upsert_without_dish_plans_input_1.MealPlanUpsertWithoutDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_upsert_without_dish_plans_input_1.MealPlanUpsertWithoutDishPlansInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_input_1.MealPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_input_1.MealPlanWhereInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_to_one_with_where_without_dish_plans_input_1.MealPlanUpdateToOneWithWhereWithoutDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_update_to_one_with_where_without_dish_plans_input_1.MealPlanUpdateToOneWithWhereWithoutDishPlansInput)
], MealPlanUpdateOneWithoutDishPlansNestedInput.prototype, "update", void 0);
MealPlanUpdateOneWithoutDishPlansNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateOneWithoutDishPlansNestedInput);
exports.MealPlanUpdateOneWithoutDishPlansNestedInput = MealPlanUpdateOneWithoutDishPlansNestedInput;
//# sourceMappingURL=meal-plan-update-one-without-dish-plans-nested.input.js.map