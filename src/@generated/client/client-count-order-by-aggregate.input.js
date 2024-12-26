"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let ClientCountOrderByAggregateInput = class ClientCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientCountOrderByAggregateInput.prototype, "updatedAt", void 0);
ClientCountOrderByAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientCountOrderByAggregateInput);
exports.ClientCountOrderByAggregateInput = ClientCountOrderByAggregateInput;
//# sourceMappingURL=client-count-order-by-aggregate.input.js.map