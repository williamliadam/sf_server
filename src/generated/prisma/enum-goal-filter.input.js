"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumGoalFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const goal_enum_1 = require("./goal.enum");
const nested_enum_goal_filter_input_1 = require("./nested-enum-goal-filter.input");
let EnumGoalFilter = class EnumGoalFilter {
};
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], EnumGoalFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], EnumGoalFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], EnumGoalFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_goal_filter_input_1.NestedEnumGoalFilter, { nullable: true })
], EnumGoalFilter.prototype, "not", void 0);
EnumGoalFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumGoalFilter);
exports.EnumGoalFilter = EnumGoalFilter;
//# sourceMappingURL=enum-goal-filter.input.js.map