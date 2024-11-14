"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanUncheckedCreateWithoutDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const meal_type_enum_1 = require("../prisma/meal-type.enum");
let MealPlanUncheckedCreateWithoutDishPlansInput = class MealPlanUncheckedCreateWithoutDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_type_enum_1.MealType, { nullable: true })
], MealPlanUncheckedCreateWithoutDishPlansInput.prototype, "type", void 0);
MealPlanUncheckedCreateWithoutDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanUncheckedCreateWithoutDishPlansInput);
exports.MealPlanUncheckedCreateWithoutDishPlansInput = MealPlanUncheckedCreateWithoutDishPlansInput;
//# sourceMappingURL=meal-plan-unchecked-create-without-dish-plans.input.js.map