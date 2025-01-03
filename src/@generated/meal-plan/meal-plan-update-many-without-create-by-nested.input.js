"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateManyWithoutCreateByNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_create_without_create_by_input_1 = require("./meal-plan-create-without-create-by.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_create_or_connect_without_create_by_input_1 = require("./meal-plan-create-or-connect-without-create-by.input");
const meal_plan_upsert_with_where_unique_without_create_by_input_1 = require("./meal-plan-upsert-with-where-unique-without-create-by.input");
const meal_plan_create_many_create_by_input_envelope_input_1 = require("./meal-plan-create-many-create-by-input-envelope.input");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const meal_plan_update_with_where_unique_without_create_by_input_1 = require("./meal-plan-update-with-where-unique-without-create-by.input");
const meal_plan_update_many_with_where_without_create_by_input_1 = require("./meal-plan-update-many-with-where-without-create-by.input");
const meal_plan_scalar_where_input_1 = require("./meal-plan-scalar-where.input");
let MealPlanUpdateManyWithoutCreateByNestedInput = class MealPlanUpdateManyWithoutCreateByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_create_without_create_by_input_1.MealPlanCreateWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_create_without_create_by_input_1.MealPlanCreateWithoutCreateByInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_create_or_connect_without_create_by_input_1.MealPlanCreateOrConnectWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_create_or_connect_without_create_by_input_1.MealPlanCreateOrConnectWithoutCreateByInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_upsert_with_where_unique_without_create_by_input_1.MealPlanUpsertWithWhereUniqueWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_upsert_with_where_unique_without_create_by_input_1.MealPlanUpsertWithWhereUniqueWithoutCreateByInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_create_many_create_by_input_envelope_input_1.MealPlanCreateManyCreateByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_create_many_create_by_input_envelope_input_1.MealPlanCreateManyCreateByInputEnvelope)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_unique_input_1.MealPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_unique_input_1.MealPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_unique_input_1.MealPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_where_unique_input_1.MealPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_update_with_where_unique_without_create_by_input_1.MealPlanUpdateWithWhereUniqueWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_update_with_where_unique_without_create_by_input_1.MealPlanUpdateWithWhereUniqueWithoutCreateByInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_update_many_with_where_without_create_by_input_1.MealPlanUpdateManyWithWhereWithoutCreateByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_update_many_with_where_without_create_by_input_1.MealPlanUpdateManyWithWhereWithoutCreateByInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [meal_plan_scalar_where_input_1.MealPlanScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_plan_scalar_where_input_1.MealPlanScalarWhereInput)
], MealPlanUpdateManyWithoutCreateByNestedInput.prototype, "deleteMany", void 0);
MealPlanUpdateManyWithoutCreateByNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateManyWithoutCreateByNestedInput);
exports.MealPlanUpdateManyWithoutCreateByNestedInput = MealPlanUpdateManyWithoutCreateByNestedInput;
//# sourceMappingURL=meal-plan-update-many-without-create-by-nested.input.js.map