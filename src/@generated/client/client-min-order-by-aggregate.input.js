"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMinOrderByAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let ClientMinOrderByAggregateInput = class ClientMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], ClientMinOrderByAggregateInput.prototype, "updatedAt", void 0);
ClientMinOrderByAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientMinOrderByAggregateInput);
exports.ClientMinOrderByAggregateInput = ClientMinOrderByAggregateInput;
//# sourceMappingURL=client-min-order-by-aggregate.input.js.map