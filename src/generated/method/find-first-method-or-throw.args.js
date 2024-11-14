"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMethodOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_where_input_1 = require("./method-where.input");
const class_transformer_1 = require("class-transformer");
const method_order_by_with_relation_input_1 = require("./method-order-by-with-relation.input");
const method_where_unique_input_1 = require("./method-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const method_scalar_field_enum_1 = require("./method-scalar-field.enum");
let FindFirstMethodOrThrowArgs = class FindFirstMethodOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => method_where_input_1.MethodWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => method_where_input_1.MethodWhereInput)
], FindFirstMethodOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_order_by_with_relation_input_1.MethodOrderByWithRelationInput], { nullable: true })
], FindFirstMethodOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_where_unique_input_1.MethodWhereUniqueInput, { nullable: true })
], FindFirstMethodOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMethodOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMethodOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [method_scalar_field_enum_1.MethodScalarFieldEnum], { nullable: true })
], FindFirstMethodOrThrowArgs.prototype, "distinct", void 0);
FindFirstMethodOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMethodOrThrowArgs);
exports.FindFirstMethodOrThrowArgs = FindFirstMethodOrThrowArgs;
//# sourceMappingURL=find-first-method-or-throw.args.js.map