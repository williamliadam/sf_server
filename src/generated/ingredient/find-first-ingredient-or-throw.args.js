"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstIngredientOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_where_input_1 = require("./ingredient-where.input");
const class_transformer_1 = require("class-transformer");
const ingredient_order_by_with_relation_input_1 = require("./ingredient-order-by-with-relation.input");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const ingredient_scalar_field_enum_1 = require("./ingredient-scalar-field.enum");
let FindFirstIngredientOrThrowArgs = class FindFirstIngredientOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_input_1.IngredientWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => ingredient_where_input_1.IngredientWhereInput)
], FindFirstIngredientOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_order_by_with_relation_input_1.IngredientOrderByWithRelationInput], { nullable: true })
], FindFirstIngredientOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput, { nullable: true })
], FindFirstIngredientOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstIngredientOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstIngredientOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ingredient_scalar_field_enum_1.IngredientScalarFieldEnum], { nullable: true })
], FindFirstIngredientOrThrowArgs.prototype, "distinct", void 0);
FindFirstIngredientOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstIngredientOrThrowArgs);
exports.FindFirstIngredientOrThrowArgs = FindFirstIngredientOrThrowArgs;
//# sourceMappingURL=find-first-ingredient-or-throw.args.js.map