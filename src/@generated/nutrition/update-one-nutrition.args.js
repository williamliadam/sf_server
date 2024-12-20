"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneNutritionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_update_input_1 = require("./nutrition-update.input");
const class_transformer_1 = require("class-transformer");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let UpdateOneNutritionArgs = class UpdateOneNutritionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_update_input_1.NutritionUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_update_input_1.NutritionUpdateInput)
], UpdateOneNutritionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput)
], UpdateOneNutritionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], UpdateOneNutritionArgs.prototype, "relationLoadStrategy", void 0);
UpdateOneNutritionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneNutritionArgs);
exports.UpdateOneNutritionArgs = UpdateOneNutritionArgs;
//# sourceMappingURL=update-one-nutrition.args.js.map