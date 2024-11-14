"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanCreateNestedManyWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_recipe_input_1 = require("./dish-plan-create-without-recipe.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_recipe_input_1 = require("./dish-plan-create-or-connect-without-recipe.input");
const dish_plan_create_many_recipe_input_envelope_input_1 = require("./dish-plan-create-many-recipe-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
let DishPlanCreateNestedManyWithoutRecipeInput = class DishPlanCreateNestedManyWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_recipe_input_1.DishPlanCreateWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_recipe_input_1.DishPlanCreateWithoutRecipeInput)
], DishPlanCreateNestedManyWithoutRecipeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_recipe_input_1.DishPlanCreateOrConnectWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_recipe_input_1.DishPlanCreateOrConnectWithoutRecipeInput)
], DishPlanCreateNestedManyWithoutRecipeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_recipe_input_envelope_input_1.DishPlanCreateManyRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_recipe_input_envelope_input_1.DishPlanCreateManyRecipeInputEnvelope)
], DishPlanCreateNestedManyWithoutRecipeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanCreateNestedManyWithoutRecipeInput.prototype, "connect", void 0);
DishPlanCreateNestedManyWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanCreateNestedManyWithoutRecipeInput);
exports.DishPlanCreateNestedManyWithoutRecipeInput = DishPlanCreateNestedManyWithoutRecipeInput;
//# sourceMappingURL=dish-plan-create-nested-many-without-recipe.input.js.map