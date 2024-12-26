"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMaxOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let ClientMaxOrderByAggregateInput = class ClientMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
ClientMaxOrderByAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientMaxOrderByAggregateInput);
exports.ClientMaxOrderByAggregateInput = ClientMaxOrderByAggregateInput;
//# sourceMappingURL=client-max-order-by-aggregate.input.js.map