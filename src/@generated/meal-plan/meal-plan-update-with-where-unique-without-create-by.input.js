"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateWithWhereUniqueWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_where_unique_input_1 = require("./meal-plan-where-unique.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_update_without_create_by_input_1 = require("./meal-plan-update-without-create-by.input");
let MealPlanUpdateWithWhereUniqueWithoutCreateByInput = class MealPlanUpdateWithWhereUniqueWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_where_unique_input_1.MealPlanWhereUniqueInput)
], MealPlanUpdateWithWhereUniqueWithoutCreateByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_without_create_by_input_1.MealPlanUpdateWithoutCreateByInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_update_without_create_by_input_1.MealPlanUpdateWithoutCreateByInput)
], MealPlanUpdateWithWhereUniqueWithoutCreateByInput.prototype, "data", void 0);
MealPlanUpdateWithWhereUniqueWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateWithWhereUniqueWithoutCreateByInput);
exports.MealPlanUpdateWithWhereUniqueWithoutCreateByInput = MealPlanUpdateWithWhereUniqueWithoutCreateByInput;
//# sourceMappingURL=meal-plan-update-with-where-unique-without-create-by.input.js.map