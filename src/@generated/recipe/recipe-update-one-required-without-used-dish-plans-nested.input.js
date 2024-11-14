"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_without_used_dish_plans_input_1 = require("./recipe-create-without-used-dish-plans.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_or_connect_without_used_dish_plans_input_1 = require("./recipe-create-or-connect-without-used-dish-plans.input");
const recipe_upsert_without_used_dish_plans_input_1 = require("./recipe-upsert-without-used-dish-plans.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const recipe_update_to_one_with_where_without_used_dish_plans_input_1 = require("./recipe-update-to-one-with-where-without-used-dish-plans.input");
let RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput = class RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_create_without_used_dish_plans_input_1.RecipeCreateWithoutUsedDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_without_used_dish_plans_input_1.RecipeCreateWithoutUsedDishPlansInput)
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_or_connect_without_used_dish_plans_input_1.RecipeCreateOrConnectWithoutUsedDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_create_or_connect_without_used_dish_plans_input_1.RecipeCreateOrConnectWithoutUsedDishPlansInput)
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_upsert_without_used_dish_plans_input_1.RecipeUpsertWithoutUsedDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_upsert_without_used_dish_plans_input_1.RecipeUpsertWithoutUsedDishPlansInput)
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_to_one_with_where_without_used_dish_plans_input_1.RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_update_to_one_with_where_without_used_dish_plans_input_1.RecipeUpdateToOneWithWhereWithoutUsedDishPlansInput)
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput.prototype, "update", void 0);
RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput = __decorate([
    (0, graphql_2.InputType)()
], RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput);
exports.RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput = RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput;
//# sourceMappingURL=recipe-update-one-required-without-used-dish-plans-nested.input.js.map