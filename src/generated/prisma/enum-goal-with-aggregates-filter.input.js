"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumGoalWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const goal_enum_1 = require("./goal.enum");
const nested_enum_goal_with_aggregates_filter_input_1 = require("./nested-enum-goal-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_goal_filter_input_1 = require("./nested-enum-goal-filter.input");
let EnumGoalWithAggregatesFilter = class EnumGoalWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_with_aggregates_filter_input_1.NestedEnumGoalWithAggregatesFilter, { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_filter_input_1.NestedEnumGoalFilter, { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_filter_input_1.NestedEnumGoalFilter, { nullable: true })
], EnumGoalWithAggregatesFilter.prototype, "_max", void 0);
EnumGoalWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumGoalWithAggregatesFilter);
exports.EnumGoalWithAggregatesFilter = EnumGoalWithAggregatesFilter;
//# sourceMappingURL=enum-goal-with-aggregates-filter.input.js.map