"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRecipeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_where_unique_input_1 = require("./recipe-where-unique.input");
const class_transformer_1 = require("class-transformer");
const recipe_create_input_1 = require("./recipe-create.input");
const recipe_update_input_1 = require("./recipe-update.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpsertOneRecipeArgs = class UpsertOneRecipeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_where_unique_input_1.RecipeWhereUniqueInput)
], UpsertOneRecipeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_input_1.RecipeCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_create_input_1.RecipeCreateInput)
], UpsertOneRecipeArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_update_input_1.RecipeUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => recipe_update_input_1.RecipeUpdateInput)
], UpsertOneRecipeArgs.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], UpsertOneRecipeArgs.prototype, "relationLoadStrategy", void 0);
UpsertOneRecipeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneRecipeArgs);
exports.UpsertOneRecipeArgs = UpsertOneRecipeArgs;
//# sourceMappingURL=upsert-one-recipe.args.js.map