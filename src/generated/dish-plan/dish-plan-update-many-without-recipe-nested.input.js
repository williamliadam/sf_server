"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUpdateManyWithoutRecipeNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_create_without_recipe_input_1 = require("./dish-plan-create-without-recipe.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_create_or_connect_without_recipe_input_1 = require("./dish-plan-create-or-connect-without-recipe.input");
const dish_plan_upsert_with_where_unique_without_recipe_input_1 = require("./dish-plan-upsert-with-where-unique-without-recipe.input");
const dish_plan_create_many_recipe_input_envelope_input_1 = require("./dish-plan-create-many-recipe-input-envelope.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
const dish_plan_update_with_where_unique_without_recipe_input_1 = require("./dish-plan-update-with-where-unique-without-recipe.input");
const dish_plan_update_many_with_where_without_recipe_input_1 = require("./dish-plan-update-many-with-where-without-recipe.input");
const dish_plan_scalar_where_input_1 = require("./dish-plan-scalar-where.input");
let DishPlanUpdateManyWithoutRecipeNestedInput = class DishPlanUpdateManyWithoutRecipeNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_without_recipe_input_1.DishPlanCreateWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_without_recipe_input_1.DishPlanCreateWithoutRecipeInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_create_or_connect_without_recipe_input_1.DishPlanCreateOrConnectWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_or_connect_without_recipe_input_1.DishPlanCreateOrConnectWithoutRecipeInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_upsert_with_where_unique_without_recipe_input_1.DishPlanUpsertWithWhereUniqueWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_upsert_with_where_unique_without_recipe_input_1.DishPlanUpsertWithWhereUniqueWithoutRecipeInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_create_many_recipe_input_envelope_input_1.DishPlanCreateManyRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_create_many_recipe_input_envelope_input_1.DishPlanCreateManyRecipeInputEnvelope)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_where_unique_input_1.DishPlanWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_with_where_unique_without_recipe_input_1.DishPlanUpdateWithWhereUniqueWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_with_where_unique_without_recipe_input_1.DishPlanUpdateWithWhereUniqueWithoutRecipeInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_update_many_with_where_without_recipe_input_1.DishPlanUpdateManyWithWhereWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_update_many_with_where_without_recipe_input_1.DishPlanUpdateManyWithWhereWithoutRecipeInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_scalar_where_input_1.DishPlanScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_scalar_where_input_1.DishPlanScalarWhereInput)
], DishPlanUpdateManyWithoutRecipeNestedInput.prototype, "deleteMany", void 0);
DishPlanUpdateManyWithoutRecipeNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUpdateManyWithoutRecipeNestedInput);
exports.DishPlanUpdateManyWithoutRecipeNestedInput = DishPlanUpdateManyWithoutRecipeNestedInput;
//# sourceMappingURL=dish-plan-update-many-without-recipe-nested.input.js.map