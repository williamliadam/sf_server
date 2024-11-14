"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProfileArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_where_input_1 = require("./profile-where.input");
const class_transformer_1 = require("class-transformer");
const profile_order_by_with_relation_input_1 = require("./profile-order-by-with-relation.input");
const profile_where_unique_input_1 = require("./profile-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const profile_scalar_field_enum_1 = require("./profile-scalar-field.enum");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let FindManyProfileArgs = class FindManyProfileArgs {
};
__decorate([
    (0, graphql_1.Field)(() => profile_where_input_1.ProfileWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_input_1.ProfileWhereInput)
], FindManyProfileArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_order_by_with_relation_input_1.ProfileOrderByWithRelationInput], { nullable: true })
], FindManyProfileArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_where_unique_input_1.ProfileWhereUniqueInput, { nullable: true })
], FindManyProfileArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProfileArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyProfileArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_scalar_field_enum_1.ProfileScalarFieldEnum], { nullable: true })
], FindManyProfileArgs.prototype, "distinct", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], FindManyProfileArgs.prototype, "relationLoadStrategy", void 0);
FindManyProfileArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyProfileArgs);
exports.FindManyProfileArgs = FindManyProfileArgs;
//# sourceMappingURL=find-many-profile.args.js.map