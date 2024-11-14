"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUncheckedCreateWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let IngredientUncheckedCreateWithoutUsedRecipeInput = class IngredientUncheckedCreateWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], IngredientUncheckedCreateWithoutUsedRecipeInput.prototype, "updatedAt", void 0);
IngredientUncheckedCreateWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientUncheckedCreateWithoutUsedRecipeInput);
exports.IngredientUncheckedCreateWithoutUsedRecipeInput = IngredientUncheckedCreateWithoutUsedRecipeInput;
//# sourceMappingURL=ingredient-unchecked-create-without-used-recipe.input.js.map