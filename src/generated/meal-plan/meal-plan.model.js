"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const meal_type_enum_1 = require("../prisma/meal-type.enum");
const dish_plan_model_1 = require("../dish-plan/dish-plan.model");
const user_model_1 = require("../user/user.model");
const meal_plan_count_output_1 = require("./meal-plan-count.output");
let MealPlan = class MealPlan {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], MealPlan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlan.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], MealPlan.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealPlan.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealPlan.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: false, defaultValue: 'MEAL' })
], MealPlan.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_model_1.DishPlan], { nullable: true })
], MealPlan.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], MealPlan.prototype, "createBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_count_output_1.MealPlanCount, { nullable: false })
], MealPlan.prototype, "_count", void 0);
MealPlan = __decorate([
    (0, graphql_2.ObjectType)()
], MealPlan);
exports.MealPlan = MealPlan;
//# sourceMappingURL=meal-plan.model.js.map