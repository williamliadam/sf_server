"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MateriaCategoryOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const material_order_by_relation_aggregate_input_1 = require("../material/material-order-by-relation-aggregate.input");
const materia_category_order_by_relation_aggregate_input_1 = require("./materia-category-order-by-relation-aggregate.input");
let MateriaCategoryOrderByWithRelationInput = MateriaCategoryOrderByWithRelationInput_1 = class MateriaCategoryOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_order_by_relation_aggregate_input_1.MaterialOrderByRelationAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_order_by_relation_aggregate_input_1.MateriaCategoryOrderByRelationAggregateInput, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => MateriaCategoryOrderByWithRelationInput_1, { nullable: true })
], MateriaCategoryOrderByWithRelationInput.prototype, "last", void 0);
MateriaCategoryOrderByWithRelationInput = MateriaCategoryOrderByWithRelationInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryOrderByWithRelationInput);
exports.MateriaCategoryOrderByWithRelationInput = MateriaCategoryOrderByWithRelationInput;
//# sourceMappingURL=materia-category-order-by-with-relation.input.js.map