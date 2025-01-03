"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBodyDetailOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_where_input_1 = require("./body-detail-where.input");
const class_transformer_1 = require("class-transformer");
const body_detail_order_by_with_relation_input_1 = require("./body-detail-order-by-with-relation.input");
const body_detail_where_unique_input_1 = require("./body-detail-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const body_detail_scalar_field_enum_1 = require("./body-detail-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindFirstBodyDetailOrThrowArgs = class FindFirstBodyDetailOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_input_1.BodyDetailWhereInput)
], FindFirstBodyDetailOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [body_detail_order_by_with_relation_input_1.BodyDetailOrderByWithRelationInput], { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput, { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [body_detail_scalar_field_enum_1.BodyDetailScalarFieldEnum], { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindFirstBodyDetailOrThrowArgs.prototype, "relationLoadStrategy", void 0);
FindFirstBodyDetailOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstBodyDetailOrThrowArgs);
exports.FindFirstBodyDetailOrThrowArgs = FindFirstBodyDetailOrThrowArgs;
//# sourceMappingURL=find-first-body-detail-or-throw.args.js.map