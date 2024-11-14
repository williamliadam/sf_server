"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyNutritionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const class_transformer_1 = require("class-transformer");
let DeleteManyNutritionArgs = class DeleteManyNutritionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_input_1.NutritionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_input_1.NutritionWhereInput)
], DeleteManyNutritionArgs.prototype, "where", void 0);
DeleteManyNutritionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], DeleteManyNutritionArgs);
exports.DeleteManyNutritionArgs = DeleteManyNutritionArgs;
//# sourceMappingURL=delete-many-nutrition.args.js.map