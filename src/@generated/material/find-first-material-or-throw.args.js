"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMaterialOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_where_input_1 = require("./material-where.input");
const class_transformer_1 = require("class-transformer");
const material_order_by_with_relation_input_1 = require("./material-order-by-with-relation.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const material_scalar_field_enum_1 = require("./material-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstMaterialOrThrowArgs = class FindFirstMaterialOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => material_where_input_1.MaterialWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_input_1.MaterialWhereInput)
], FindFirstMaterialOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_order_by_with_relation_input_1.MaterialOrderByWithRelationInput], { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_scalar_field_enum_1.MaterialScalarFieldEnum], { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstMaterialOrThrowArgs.prototype, "relationLoadStrategy", void 0);
FindFirstMaterialOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMaterialOrThrowArgs);
exports.FindFirstMaterialOrThrowArgs = FindFirstMaterialOrThrowArgs;
//# sourceMappingURL=find-first-material-or-throw.args.js.map