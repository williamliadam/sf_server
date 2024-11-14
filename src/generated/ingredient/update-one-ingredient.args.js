"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIngredientArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_update_input_1 = require("./ingredient-update.input");
const class_transformer_1 = require("class-transformer");
const ingredient_where_unique_input_1 = require("./ingredient-where-unique.input");
let UpdateOneIngredientArgs = class UpdateOneIngredientArgs {
};
__decorate([
    (0, graphql_1.Field)(() => ingredient_update_input_1.IngredientUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_update_input_1.IngredientUpdateInput)
], UpdateOneIngredientArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_where_unique_input_1.IngredientWhereUniqueInput)
], UpdateOneIngredientArgs.prototype, "where", void 0);
UpdateOneIngredientArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneIngredientArgs);
exports.UpdateOneIngredientArgs = UpdateOneIngredientArgs;
//# sourceMappingURL=update-one-ingredient.args.js.map