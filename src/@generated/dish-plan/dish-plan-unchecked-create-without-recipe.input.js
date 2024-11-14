"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishPlanUncheckedCreateWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let DishPlanUncheckedCreateWithoutRecipeInput = class DishPlanUncheckedCreateWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "planCookerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "mealPlanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishPlanUncheckedCreateWithoutRecipeInput.prototype, "updatedAt", void 0);
DishPlanUncheckedCreateWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishPlanUncheckedCreateWithoutRecipeInput);
exports.DishPlanUncheckedCreateWithoutRecipeInput = DishPlanUncheckedCreateWithoutRecipeInput;
//# sourceMappingURL=dish-plan-unchecked-create-without-recipe.input.js.map