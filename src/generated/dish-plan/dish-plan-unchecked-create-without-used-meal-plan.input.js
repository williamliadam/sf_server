"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUncheckedCreateWithoutUsedMealPlanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let DishPlanUncheckedCreateWithoutUsedMealPlanInput = class DishPlanUncheckedCreateWithoutUsedMealPlanInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanUncheckedCreateWithoutUsedMealPlanInput.prototype, "updatedAt", void 0);
DishPlanUncheckedCreateWithoutUsedMealPlanInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUncheckedCreateWithoutUsedMealPlanInput);
exports.DishPlanUncheckedCreateWithoutUsedMealPlanInput = DishPlanUncheckedCreateWithoutUsedMealPlanInput;
//# sourceMappingURL=dish-plan-unchecked-create-without-used-meal-plan.input.js.map