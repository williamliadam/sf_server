"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_update_without_plan_cooker_input_1 = require("./dish-plan-update-without-plan-cooker.input");
const dish_plan_create_without_plan_cooker_input_1 = require("./dish-plan-create-without-plan-cooker.input");
let DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput = class DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput {
};
__decorate([
    (0, graphql_1.Field)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_update_without_plan_cooker_input_1.DishPlanUpdateWithoutPlanCookerInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_plan_update_without_plan_cooker_input_1.DishPlanUpdateWithoutPlanCookerInput)
], DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_plan_cooker_input_1.DishPlanCreateWithoutPlanCookerInput)
], DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput.prototype, "create", void 0);
DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput);
exports.DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput = DishPlanUpsertWithWhereUniqueWithoutPlanCookerInput;
//# sourceMappingURL=dish-plan-upsert-with-where-unique-without-plan-cooker.input.js.map