"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestedEnumGoalFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumGoalFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const goal_enum_1 = require("./goal.enum");
let NestedEnumGoalFilter = NestedEnumGoalFilter_1 = class NestedEnumGoalFilter {
};
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], NestedEnumGoalFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], NestedEnumGoalFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [goal_enum_1.Goal], { nullable: true })
], NestedEnumGoalFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGoalFilter_1, { nullable: true })
], NestedEnumGoalFilter.prototype, "not", void 0);
NestedEnumGoalFilter = NestedEnumGoalFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumGoalFilter);
exports.NestedEnumGoalFilter = NestedEnumGoalFilter;
//# sourceMappingURL=nested-enum-goal-filter.input.js.map