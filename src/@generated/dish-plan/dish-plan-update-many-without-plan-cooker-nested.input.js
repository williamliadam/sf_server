"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUpdateManyWithoutPlanCookerNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_plan_cooker_input_1 = require("./dish-plan-create-without-plan-cooker.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_plan_cooker_input_1 = require("./dish-plan-create-or-connect-without-plan-cooker.input");
const dish_plan_upsert_with_where_unique_without_plan_cooker_input_1 = require("./dish-plan-upsert-with-where-unique-without-plan-cooker.input");
const dish_plan_create_many_plan_cooker_input_envelope_input_1 = require("./dish-plan-create-many-plan-cooker-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
const dish_plan_update_with_where_unique_without_plan_cooker_input_1 = require("./dish-plan-update-with-where-unique-without-plan-cooker.input");
const dish_plan_update_many_with_where_without_plan_cooker_input_1 = require("./dish-plan-update-many-with-where-without-plan-cooker.input");
const dish_plan_scalar_where_input_1 = require("./dish-plan-scalar-where.input");
let DishPlanUpdateManyWithoutPlanCookerNestedInput = class DishPlanUpdateManyWithoutPlanCookerNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_plan_cooker_input_1.DishPlanCreateOrConnectWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_plan_cooker_input_1.DishPlanCreateOrConnectWithoutPlanCookerInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_upsert_with_where_unique_without_plan_cooker_input_1.DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_upsert_with_where_unique_without_plan_cooker_input_1.DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_plan_cooker_input_envelope_input_1.DishPlanCreateManyPlanCookerInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_plan_cooker_input_envelope_input_1.DishPlanCreateManyPlanCookerInputEnvelope)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_with_where_unique_without_plan_cooker_input_1.DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_with_where_unique_without_plan_cooker_input_1.DishPlanUpdateWithWhereUniqueWithoutPlanCookerInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_many_with_where_without_plan_cooker_input_1.DishPlanUpdateManyWithWhereWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_many_with_where_without_plan_cooker_input_1.DishPlanUpdateManyWithWhereWithoutPlanCookerInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_scalar_where_input_1.DishPlanScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_scalar_where_input_1.DishPlanScalarWhereInput)
], DishPlanUpdateManyWithoutPlanCookerNestedInput.prototype, "deleteMany", void 0);
DishPlanUpdateManyWithoutPlanCookerNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUpdateManyWithoutPlanCookerNestedInput);
exports.DishPlanUpdateManyWithoutPlanCookerNestedInput = DishPlanUpdateManyWithoutPlanCookerNestedInput;
//# sourceMappingURL=dish-plan-update-many-without-plan-cooker-nested.input.js.map