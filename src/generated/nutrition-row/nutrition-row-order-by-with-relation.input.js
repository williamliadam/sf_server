"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const nutrition_order_by_with_relation_input_1 = require("../nutrition/nutrition-order-by-with-relation.input");
const material_order_by_with_relation_input_1 = require("../material/material-order-by-with-relation.input");
let NutritionRowOrderByWithRelationInput = class NutritionRowOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "nutirtionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "percent", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "belongToId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_order_by_with_relation_input_1.NutritionOrderByWithRelationInput, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "nutirtion", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_order_by_with_relation_input_1.MaterialOrderByWithRelationInput, { nullable: true })
], NutritionRowOrderByWithRelationInput.prototype, "belongMaterial", void 0);
NutritionRowOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowOrderByWithRelationInput);
exports.NutritionRowOrderByWithRelationInput = NutritionRowOrderByWithRelationInput;
//# sourceMappingURL=nutrition-row-order-by-with-relation.input.js.map