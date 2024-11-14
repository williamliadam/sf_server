"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneNutritionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
const class_transformer_1 = require("class-transformer");
const nutrition_create_input_1 = require("./nutrition-create.input");
const nutrition_update_input_1 = require("./nutrition-update.input");
let UpsertOneNutritionArgs = class UpsertOneNutritionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput)
], UpsertOneNutritionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_input_1.NutritionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_create_input_1.NutritionCreateInput)
], UpsertOneNutritionArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_update_input_1.NutritionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_update_input_1.NutritionUpdateInput)
], UpsertOneNutritionArgs.prototype, "update", void 0);
UpsertOneNutritionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneNutritionArgs);
exports.UpsertOneNutritionArgs = UpsertOneNutritionArgs;
//# sourceMappingURL=upsert-one-nutrition.args.js.map