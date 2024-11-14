"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BodyDetailWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let BodyDetailWhereInput = BodyDetailWhereInput_1 = class BodyDetailWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [BodyDetailWhereInput_1], { nullable: true })
], BodyDetailWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BodyDetailWhereInput_1], { nullable: true })
], BodyDetailWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BodyDetailWhereInput_1], { nullable: true })
], BodyDetailWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "bmi", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "bmr", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "tdee", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true })
], BodyDetailWhereInput.prototype, "user", void 0);
BodyDetailWhereInput = BodyDetailWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailWhereInput);
exports.BodyDetailWhereInput = BodyDetailWhereInput;
//# sourceMappingURL=body-detail-where.input.js.map