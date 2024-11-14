"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNutritionOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_order_by_with_relation_input_1 = require("./nutrition-order-by-with-relation.input");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const nutrition_scalar_field_enum_1 = require("./nutrition-scalar-field.enum");
let FindFirstNutritionOrThrowArgs = class FindFirstNutritionOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_input_1.NutritionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_input_1.NutritionWhereInput)
], FindFirstNutritionOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_order_by_with_relation_input_1.NutritionOrderByWithRelationInput], { nullable: true })
], FindFirstNutritionOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: true })
], FindFirstNutritionOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstNutritionOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindFirstNutritionOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [nutrition_scalar_field_enum_1.NutritionScalarFieldEnum], { nullable: true })
], FindFirstNutritionOrThrowArgs.prototype, "distinct", void 0);
FindFirstNutritionOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstNutritionOrThrowArgs);
exports.FindFirstNutritionOrThrowArgs = FindFirstNutritionOrThrowArgs;
//# sourceMappingURL=find-first-nutrition-or-throw.args.js.map