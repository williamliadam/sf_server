"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUncheckedCreateWithoutUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let IngredientUncheckedCreateWithoutUnitInput = class IngredientUncheckedCreateWithoutUnitInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientUncheckedCreateWithoutUnitInput.prototype, "updatedAt", void 0);
IngredientUncheckedCreateWithoutUnitInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUncheckedCreateWithoutUnitInput);
exports.IngredientUncheckedCreateWithoutUnitInput = IngredientUncheckedCreateWithoutUnitInput;
//# sourceMappingURL=ingredient-unchecked-create-without-unit.input.js.map