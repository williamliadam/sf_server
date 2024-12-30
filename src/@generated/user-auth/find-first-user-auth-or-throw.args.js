"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserAuthOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_where_input_1 = require("./user-auth-where.input");
const class_transformer_1 = require("class-transformer");
const user_auth_order_by_with_relation_input_1 = require("./user-auth-order-by-with-relation.input");
const user_auth_where_unique_input_1 = require("./user-auth-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const user_auth_scalar_field_enum_1 = require("./user-auth-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstUserAuthOrThrowArgs = class FindFirstUserAuthOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_input_1.UserAuthWhereInput)
], FindFirstUserAuthOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_order_by_with_relation_input_1.UserAuthOrderByWithRelationInput], { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput, { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_scalar_field_enum_1.UserAuthScalarFieldEnum], { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstUserAuthOrThrowArgs.prototype, "relationLoadStrategy", void 0);
FindFirstUserAuthOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstUserAuthOrThrowArgs);
exports.FindFirstUserAuthOrThrowArgs = FindFirstUserAuthOrThrowArgs;
//# sourceMappingURL=find-first-user-auth-or-throw.args.js.map