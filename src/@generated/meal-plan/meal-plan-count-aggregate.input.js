"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let MealPlanCountAggregateInput = class MealPlanCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MealPlanCountAggregateInput.prototype, "_all", void 0);
MealPlanCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanCountAggregateInput);
exports.MealPlanCountAggregateInput = MealPlanCountAggregateInput;
//# sourceMappingURL=meal-plan-count-aggregate.input.js.map