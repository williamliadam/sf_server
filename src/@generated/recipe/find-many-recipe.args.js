"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRecipeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_where_input_1 = require("./recipe-where.input");
const class_transformer_1 = require("class-transformer");
const recipe_order_by_with_relation_input_1 = require("./recipe-order-by-with-relation.input");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const recipe_scalar_field_enum_1 = require("./recipe-scalar-field.enum");
let FindManyRecipeArgs = class FindManyRecipeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_where_input_1.RecipeWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => recipe_where_input_1.RecipeWhereInput)
], FindManyRecipeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_order_by_with_relation_input_1.RecipeOrderByWithRelationInput], { nullable: true })
], FindManyRecipeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: true })
], FindManyRecipeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyRecipeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], FindManyRecipeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [recipe_scalar_field_enum_1.RecipeScalarFieldEnum], { nullable: true })
], FindManyRecipeArgs.prototype, "distinct", void 0);
FindManyRecipeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyRecipeArgs);
exports.FindManyRecipeArgs = FindManyRecipeArgs;
//# sourceMappingURL=find-many-recipe.args.js.map