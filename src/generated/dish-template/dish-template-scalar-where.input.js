"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DishTemplateScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
let DishTemplateScalarWhereInput = DishTemplateScalarWhereInput_1 = class DishTemplateScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateScalarWhereInput_1], { nullable: true })
], DishTemplateScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateScalarWhereInput_1], { nullable: true })
], DishTemplateScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DishTemplateScalarWhereInput_1], { nullable: true })
], DishTemplateScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "recipeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true })
], DishTemplateScalarWhereInput.prototype, "mealTemplateId", void 0);
DishTemplateScalarWhereInput = DishTemplateScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateScalarWhereInput);
exports.DishTemplateScalarWhereInput = DishTemplateScalarWhereInput;
//# sourceMappingURL=dish-template-scalar-where.input.js.map