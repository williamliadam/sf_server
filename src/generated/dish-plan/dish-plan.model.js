"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const recipe_model_1 = require("../recipe/recipe.model");
const meal_plan_model_1 = require("../meal-plan/meal-plan.model");
let DishPlan = class DishPlan {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], DishPlan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], DishPlan.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], DishPlan.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], DishPlan.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], DishPlan.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], DishPlan.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], DishPlan.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], DishPlan.prototype, "planCooker", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_model_1.Recipe, { nullable: false })
], DishPlan.prototype, "recipe", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_model_1.MealPlan, { nullable: true })
], DishPlan.prototype, "usedMealPlan", void 0);
DishPlan = __decorate([
    (0, graphql_2.ObjectType)()
], DishPlan);
exports.DishPlan = DishPlan;
//# sourceMappingURL=dish-plan.model.js.map