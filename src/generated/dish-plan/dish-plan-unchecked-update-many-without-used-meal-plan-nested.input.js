"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_used_meal_plan_input_1 = require("./dish-plan-create-without-used-meal-plan.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_used_meal_plan_input_1 = require("./dish-plan-create-or-connect-without-used-meal-plan.input");
const dish_plan_upsert_with_where_unique_without_used_meal_plan_input_1 = require("./dish-plan-upsert-with-where-unique-without-used-meal-plan.input");
const dish_plan_create_many_used_meal_plan_input_envelope_input_1 = require("./dish-plan-create-many-used-meal-plan-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
const dish_plan_update_with_where_unique_without_used_meal_plan_input_1 = require("./dish-plan-update-with-where-unique-without-used-meal-plan.input");
const dish_plan_update_many_with_where_without_used_meal_plan_input_1 = require("./dish-plan-update-many-with-where-without-used-meal-plan.input");
const dish_plan_scalar_where_input_1 = require("./dish-plan-scalar-where.input");
let DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput = class DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_used_meal_plan_input_1.DishPlanCreateWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_used_meal_plan_input_1.DishPlanCreateWithoutUsedMealPlanInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_used_meal_plan_input_1.DishPlanCreateOrConnectWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_used_meal_plan_input_1.DishPlanCreateOrConnectWithoutUsedMealPlanInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_upsert_with_where_unique_without_used_meal_plan_input_1.DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_upsert_with_where_unique_without_used_meal_plan_input_1.DishPlanUpsertWithWhereUniqueWithoutUsedMealPlanInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_used_meal_plan_input_envelope_input_1.DishPlanCreateManyUsedMealPlanInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_used_meal_plan_input_envelope_input_1.DishPlanCreateManyUsedMealPlanInputEnvelope)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_with_where_unique_without_used_meal_plan_input_1.DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_with_where_unique_without_used_meal_plan_input_1.DishPlanUpdateWithWhereUniqueWithoutUsedMealPlanInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_many_with_where_without_used_meal_plan_input_1.DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_many_with_where_without_used_meal_plan_input_1.DishPlanUpdateManyWithWhereWithoutUsedMealPlanInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_scalar_where_input_1.DishPlanScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_scalar_where_input_1.DishPlanScalarWhereInput)
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput.prototype, "deleteMany", void 0);
DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput);
exports.DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput = DishPlanUncheckedUpdateManyWithoutUsedMealPlanNestedInput;
//# sourceMappingURL=dish-plan-unchecked-update-many-without-used-meal-plan-nested.input.js.map