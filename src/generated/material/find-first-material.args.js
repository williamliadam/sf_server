"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMaterialArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_where_input_1 = require("./material-where.input");
const class_transformer_1 = require("class-transformer");
const material_order_by_with_relation_input_1 = require("./material-order-by-with-relation.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const material_scalar_field_enum_1 = require("./material-scalar-field.enum");
let FindFirstMaterialArgs = class FindFirstMaterialArgs {
};
__decorate([
    (0, graphql_1.Field)(() => material_where_input_1.MaterialWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_input_1.MaterialWhereInput)
], FindFirstMaterialArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_order_by_with_relation_input_1.MaterialOrderByWithRelationInput], { nullable: true })
], FindFirstMaterialArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true })
], FindFirstMaterialArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMaterialArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstMaterialArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_scalar_field_enum_1.MaterialScalarFieldEnum], { nullable: true })
], FindFirstMaterialArgs.prototype, "distinct", void 0);
FindFirstMaterialArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstMaterialArgs);
exports.FindFirstMaterialArgs = FindFirstMaterialArgs;
//# sourceMappingURL=find-first-material.args.js.map