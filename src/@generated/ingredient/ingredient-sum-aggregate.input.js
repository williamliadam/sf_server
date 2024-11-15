"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientSumAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let IngredientSumAggregateInput = class IngredientSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientSumAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientSumAggregateInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientSumAggregateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientSumAggregateInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientSumAggregateInput.prototype, "recipeId", void 0);
IngredientSumAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientSumAggregateInput);
exports.IngredientSumAggregateInput = IngredientSumAggregateInput;
//# sourceMappingURL=ingredient-sum-aggregate.input.js.map