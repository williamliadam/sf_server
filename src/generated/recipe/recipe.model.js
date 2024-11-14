"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const ingredient_model_1 = require("../ingredient/ingredient.model");
const method_model_1 = require("../method/method.model");
const dish_plan_model_1 = require("../dish-plan/dish-plan.model");
const dish_template_model_1 = require("../dish-template/dish-template.model");
const recipe_count_output_1 = require("./recipe-count.output");
let Recipe = class Recipe {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Recipe.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Recipe.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Recipe.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Recipe.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Recipe.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Recipe.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], Recipe.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_model_1.Ingredient], { nullable: true })
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_model_1.Method], { nullable: true })
], Recipe.prototype, "methods", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_model_1.DishPlan], { nullable: true })
], Recipe.prototype, "usedDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_model_1.DishTemplate], { nullable: true })
], Recipe.prototype, "usedDishTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_count_output_1.RecipeCount, { nullable: false })
], Recipe.prototype, "_count", void 0);
Recipe = __decorate([
    (0, graphql_2.ObjectType)()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.model.js.map