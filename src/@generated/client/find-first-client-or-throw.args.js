"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstClientOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_where_input_1 = require("./client-where.input");
const class_transformer_1 = require("class-transformer");
const client_order_by_with_relation_input_1 = require("./client-order-by-with-relation.input");
const client_where_unique_input_1 = require("./client-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const client_scalar_field_enum_1 = require("./client-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstClientOrThrowArgs = class FindFirstClientOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => client_where_input_1.ClientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => client_where_input_1.ClientWhereInput)
], FindFirstClientOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_order_by_with_relation_input_1.ClientOrderByWithRelationInput], { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_where_unique_input_1.ClientWhereUniqueInput, { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [client_scalar_field_enum_1.ClientScalarFieldEnum], { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstClientOrThrowArgs.prototype, "relationLoadStrategy", void 0);
FindFirstClientOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstClientOrThrowArgs);
exports.FindFirstClientOrThrowArgs = FindFirstClientOrThrowArgs;
//# sourceMappingURL=find-first-client-or-throw.args.js.map