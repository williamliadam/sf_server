"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const post_where_input_1 = require("./post-where.input");
const class_transformer_1 = require("class-transformer");
const post_order_by_with_relation_input_1 = require("./post-order-by-with-relation.input");
const post_where_unique_input_1 = require("./post-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const post_scalar_field_enum_1 = require("./post-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstPostOrThrowArgs = class FindFirstPostOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => post_where_input_1.PostWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => post_where_input_1.PostWhereInput)
], FindFirstPostOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_order_by_with_relation_input_1.PostOrderByWithRelationInput], { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_where_unique_input_1.PostWhereUniqueInput, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_scalar_field_enum_1.PostScalarFieldEnum], { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstPostOrThrowArgs.prototype, "relationLoadStrategy", void 0);
FindFirstPostOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstPostOrThrowArgs);
exports.FindFirstPostOrThrowArgs = FindFirstPostOrThrowArgs;
//# sourceMappingURL=find-first-post-or-throw.args.js.map