"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const dish_plan_order_by_relation_aggregate_input_1 = require("../dish-plan/dish-plan-order-by-relation-aggregate.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
let MealPlanOrderByWithRelationInput = class MealPlanOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "planTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_order_by_relation_aggregate_input_1.DishPlanOrderByRelationAggregateInput, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "dishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true })
], MealPlanOrderByWithRelationInput.prototype, "createBy", void 0);
MealPlanOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], MealPlanOrderByWithRelationInput);
exports.MealPlanOrderByWithRelationInput = MealPlanOrderByWithRelationInput;
//# sourceMappingURL=meal-plan-order-by-with-relation.input.js.map