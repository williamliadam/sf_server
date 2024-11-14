"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientAvgAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let IngredientAvgAggregateInput = class IngredientAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientAvgAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientAvgAggregateInput.prototype, "materialId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientAvgAggregateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientAvgAggregateInput.prototype, "materiaUnitId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientAvgAggregateInput.prototype, "recipeId", void 0);
IngredientAvgAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], IngredientAvgAggregateInput);
exports.IngredientAvgAggregateInput = IngredientAvgAggregateInput;
//# sourceMappingURL=ingredient-avg-aggregate.input.js.map