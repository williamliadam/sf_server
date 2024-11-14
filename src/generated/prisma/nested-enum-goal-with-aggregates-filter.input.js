"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumGoalWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumGoalWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const goal_enum_1 = require("./goal.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_goal_filter_input_1 = require("./nested-enum-goal-filter.input");
let NestedEnumGoalWithAggregatesFilter = NestedEnumGoalWithAggregatesFilter_1 = class NestedEnumGoalWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGoalWithAggregatesFilter_1, { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_filter_input_1.NestedEnumGoalFilter, { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_filter_input_1.NestedEnumGoalFilter, { nullable: true })
], NestedEnumGoalWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumGoalWithAggregatesFilter = NestedEnumGoalWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumGoalWithAggregatesFilter);
exports.NestedEnumGoalWithAggregatesFilter = NestedEnumGoalWithAggregatesFilter;
//# sourceMappingURL=nested-enum-goal-with-aggregates-filter.input.js.map