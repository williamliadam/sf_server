"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const meal_template_model_1 = require("../meal-template/meal-template.model");
const recipe_model_1 = require("../recipe/recipe.model");
let DishTemplate = class DishTemplate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], DishTemplate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], DishTemplate.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], DishTemplate.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], DishTemplate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], DishTemplate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], DishTemplate.prototype, "mealTemplateId", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_model_1.MealTemplate, { nullable: true })
], DishTemplate.prototype, "usedMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_model_1.Recipe, { nullable: false })
], DishTemplate.prototype, "recipe", void 0);
DishTemplate = __decorate([
    (0, graphql_2.ObjectType)()
], DishTemplate);
exports.DishTemplate = DishTemplate;
//# sourceMappingURL=dish-template.model.js.map