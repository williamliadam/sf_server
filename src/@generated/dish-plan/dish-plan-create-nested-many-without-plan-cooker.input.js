"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateNestedManyWithoutPlanCookerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_plan_cooker_input_1 = require("./dish-plan-create-without-plan-cooker.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_plan_cooker_input_1 = require("./dish-plan-create-or-connect-without-plan-cooker.input");
const dish_plan_create_many_plan_cooker_input_envelope_input_1 = require("./dish-plan-create-many-plan-cooker-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
let DishPlanCreateNestedManyWithoutPlanCookerInput = class DishPlanCreateNestedManyWithoutPlanCookerInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput)
], DishPlanCreateNestedManyWithoutPlanCookerInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_plan_cooker_input_1.DishPlanCreateOrConnectWithoutPlanCookerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_plan_cooker_input_1.DishPlanCreateOrConnectWithoutPlanCookerInput)
], DishPlanCreateNestedManyWithoutPlanCookerInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_plan_cooker_input_envelope_input_1.DishPlanCreateManyPlanCookerInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_plan_cooker_input_envelope_input_1.DishPlanCreateManyPlanCookerInputEnvelope)
], DishPlanCreateNestedManyWithoutPlanCookerInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanCreateNestedManyWithoutPlanCookerInput.prototype, "connect", void 0);
DishPlanCreateNestedManyWithoutPlanCookerInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateNestedManyWithoutPlanCookerInput);
exports.DishPlanCreateNestedManyWithoutPlanCookerInput = DishPlanCreateNestedManyWithoutPlanCookerInput;
//# sourceMappingURL=dish-plan-create-nested-many-without-plan-cooker.input.js.map