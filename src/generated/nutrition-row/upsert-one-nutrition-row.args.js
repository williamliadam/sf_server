"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNutritionRowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_where_unique_input_1 = require("./nutrition-row-where-unique.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_create_input_1 = require("./nutrition-row-create.input");
const nutrition_row_update_input_1 = require("./nutrition-row-update.input");
let UpsertOneNutritionRowArgs = class UpsertOneNutritionRowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_where_unique_input_1.NutritionRowWhereUniqueInput)
], UpsertOneNutritionRowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_create_input_1.NutritionRowCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_create_input_1.NutritionRowCreateInput)
], UpsertOneNutritionRowArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_update_input_1.NutritionRowUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_input_1.NutritionRowUpdateInput)
], UpsertOneNutritionRowArgs.prototype, "update", void 0);
UpsertOneNutritionRowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneNutritionRowArgs);
exports.UpsertOneNutritionRowArgs = UpsertOneNutritionRowArgs;
//# sourceMappingURL=upsert-one-nutrition-row.args.js.map