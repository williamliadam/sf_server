"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMateriaCategoryArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_input_1 = require("./materia-category-where.input");
const class_transformer_1 = require("class-transformer");
const materia_category_order_by_with_relation_input_1 = require("./materia-category-order-by-with-relation.input");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const materia_category_scalar_field_enum_1 = require("./materia-category-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindManyMateriaCategoryArgs = class FindManyMateriaCategoryArgs {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], FindManyMateriaCategoryArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_order_by_with_relation_input_1.MateriaCategoryOrderByWithRelationInput], { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [materia_category_scalar_field_enum_1.MateriaCategoryScalarFieldEnum], { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindManyMateriaCategoryArgs.prototype, "relationLoadStrategy", void 0);
FindManyMateriaCategoryArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyMateriaCategoryArgs);
exports.FindManyMateriaCategoryArgs = FindManyMateriaCategoryArgs;
//# sourceMappingURL=find-many-materia-category.args.js.map