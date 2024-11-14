"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateNestedManyWithoutUsedMealPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_used_meal_plan_input_1 = require("./dish-plan-create-without-used-meal-plan.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_used_meal_plan_input_1 = require("./dish-plan-create-or-connect-without-used-meal-plan.input");
const dish_plan_create_many_used_meal_plan_input_envelope_input_1 = require("./dish-plan-create-many-used-meal-plan-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
let DishPlanCreateNestedManyWithoutUsedMealPlanInput = class DishPlanCreateNestedManyWithoutUsedMealPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_used_meal_plan_input_1.DishPlanCreateWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_used_meal_plan_input_1.DishPlanCreateWithoutUsedMealPlanInput)
], DishPlanCreateNestedManyWithoutUsedMealPlanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_used_meal_plan_input_1.DishPlanCreateOrConnectWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_used_meal_plan_input_1.DishPlanCreateOrConnectWithoutUsedMealPlanInput)
], DishPlanCreateNestedManyWithoutUsedMealPlanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_used_meal_plan_input_envelope_input_1.DishPlanCreateManyUsedMealPlanInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_used_meal_plan_input_envelope_input_1.DishPlanCreateManyUsedMealPlanInputEnvelope)
], DishPlanCreateNestedManyWithoutUsedMealPlanInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanCreateNestedManyWithoutUsedMealPlanInput.prototype, "connect", void 0);
DishPlanCreateNestedManyWithoutUsedMealPlanInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateNestedManyWithoutUsedMealPlanInput);
exports.DishPlanCreateNestedManyWithoutUsedMealPlanInput = DishPlanCreateNestedManyWithoutUsedMealPlanInput;
//# sourceMappingURL=dish-plan-create-nested-many-without-used-meal-plan.input.js.map