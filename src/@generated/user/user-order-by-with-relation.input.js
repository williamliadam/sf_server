"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const profile_order_by_with_relation_input_1 = require("../profile/profile-order-by-with-relation.input");
const body_detail_order_by_with_relation_input_1 = require("../body-detail/body-detail-order-by-with-relation.input");
const post_order_by_relation_aggregate_input_1 = require("../post/post-order-by-relation-aggregate.input");
const recipe_order_by_relation_aggregate_input_1 = require("../recipe/recipe-order-by-relation-aggregate.input");
const meal_template_order_by_relation_aggregate_input_1 = require("../meal-template/meal-template-order-by-relation-aggregate.input");
const meal_plan_order_by_relation_aggregate_input_1 = require("../meal-plan/meal-plan-order-by-relation-aggregate.input");
const dish_plan_order_by_relation_aggregate_input_1 = require("../dish-plan/dish-plan-order-by-relation-aggregate.input");
const user_auth_order_by_relation_aggregate_input_1 = require("../user-auth/user-auth-order-by-relation-aggregate.input");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_order_by_with_relation_input_1.ProfileOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_order_by_with_relation_input_1.BodyDetailOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "bodyDetail", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_order_by_relation_aggregate_input_1.PostOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "myPosts", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_order_by_relation_aggregate_input_1.RecipeOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "myRecipes", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_order_by_relation_aggregate_input_1.MealTemplateOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "myMealTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_plan_order_by_relation_aggregate_input_1.MealPlanOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "myMealPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_order_by_relation_aggregate_input_1.DishPlanOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "chargeDishPlans", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_order_by_relation_aggregate_input_1.UserAuthOrderByRelationAggregateInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "auths", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=user-order-by-with-relation.input.js.map