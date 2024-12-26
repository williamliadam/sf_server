"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const client_count_order_by_aggregate_input_1 = require("./client-count-order-by-aggregate.input");
const client_avg_order_by_aggregate_input_1 = require("./client-avg-order-by-aggregate.input");
const client_max_order_by_aggregate_input_1 = require("./client-max-order-by-aggregate.input");
const client_min_order_by_aggregate_input_1 = require("./client-min-order-by-aggregate.input");
const client_sum_order_by_aggregate_input_1 = require("./client-sum-order-by-aggregate.input");
let ClientOrderByWithAggregationInput = class ClientOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_count_order_by_aggregate_input_1.ClientCountOrderByAggregateInput, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_avg_order_by_aggregate_input_1.ClientAvgOrderByAggregateInput, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_max_order_by_aggregate_input_1.ClientMaxOrderByAggregateInput, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_min_order_by_aggregate_input_1.ClientMinOrderByAggregateInput, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_sum_order_by_aggregate_input_1.ClientSumOrderByAggregateInput, { nullable: true })
], ClientOrderByWithAggregationInput.prototype, "_sum", void 0);
ClientOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ClientOrderByWithAggregationInput);
exports.ClientOrderByWithAggregationInput = ClientOrderByWithAggregationInput;
//# sourceMappingURL=client-order-by-with-aggregation.input.js.map