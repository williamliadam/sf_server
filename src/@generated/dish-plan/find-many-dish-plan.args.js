"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDishPlanArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_plan_where_input_1 = require("./dish-plan-where.input");
const class_transformer_1 = require("class-transformer");
const dish_plan_order_by_with_relation_input_1 = require("./dish-plan-order-by-with-relation.input");
const dish_plan_where_unique_input_1 = require("./dish-plan-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const dish_plan_scalar_field_enum_1 = require("./dish-plan-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindManyDishPlanArgs = class FindManyDishPlanArgs {
};
__decorate([
    (0, graphql_1.Field)(() => dish_plan_where_input_1.DishPlanWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_plan_where_input_1.DishPlanWhereInput)
], FindManyDishPlanArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_order_by_with_relation_input_1.DishPlanOrderByWithRelationInput], { nullable: true })
], FindManyDishPlanArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_plan_where_unique_input_1.DishPlanWhereUniqueInput, { nullable: true })
], FindManyDishPlanArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyDishPlanArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyDishPlanArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_plan_scalar_field_enum_1.DishPlanScalarFieldEnum], { nullable: true })
], FindManyDishPlanArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindManyDishPlanArgs.prototype, "relationLoadStrategy", void 0);
FindManyDishPlanArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyDishPlanArgs);
exports.FindManyDishPlanArgs = FindManyDishPlanArgs;
//# sourceMappingURL=find-many-dish-plan.args.js.map