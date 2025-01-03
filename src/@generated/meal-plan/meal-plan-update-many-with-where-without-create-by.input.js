"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUpdateManyWithWhereWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_plan_scalar_where_input_1 = require("./meal-plan-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const meal_plan_update_many_mutation_input_1 = require("./meal-plan-update-many-mutation.input");
let MealPlanUpdateManyWithWhereWithoutCreateByInput = class MealPlanUpdateManyWithWhereWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_plan_scalar_where_input_1.MealPlanScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_scalar_where_input_1.MealPlanScalarWhereInput)
], MealPlanUpdateManyWithWhereWithoutCreateByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_update_many_mutation_input_1.MealPlanUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_plan_update_many_mutation_input_1.MealPlanUpdateManyMutationInput)
], MealPlanUpdateManyWithWhereWithoutCreateByInput.prototype, "data", void 0);
MealPlanUpdateManyWithWhereWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUpdateManyWithWhereWithoutCreateByInput);
exports.MealPlanUpdateManyWithWhereWithoutCreateByInput = MealPlanUpdateManyWithWhereWithoutCreateByInput;
//# sourceMappingURL=meal-plan-update-many-with-where-without-create-by.input.js.map