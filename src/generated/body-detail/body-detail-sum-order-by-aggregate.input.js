"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailSumOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let BodyDetailSumOrderByAggregateInput = class BodyDetailSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "bmi", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "bmr", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "tdee", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], BodyDetailSumOrderByAggregateInput.prototype, "userId", void 0);
BodyDetailSumOrderByAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailSumOrderByAggregateInput);
exports.BodyDetailSumOrderByAggregateInput = BodyDetailSumOrderByAggregateInput;
//# sourceMappingURL=body-detail-sum-order-by-aggregate.input.js.map