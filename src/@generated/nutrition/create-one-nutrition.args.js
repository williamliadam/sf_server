"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneNutritionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_create_input_1 = require("./nutrition-create.input");
const class_transformer_1 = require("class-transformer");
const relation_load_strategy_enum_1 = require("../prisma/relation-load-strategy.enum");
let CreateOneNutritionArgs = class CreateOneNutritionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_input_1.NutritionCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_create_input_1.NutritionCreateInput)
], CreateOneNutritionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => relation_load_strategy_enum_1.RelationLoadStrategy, { nullable: true })
], CreateOneNutritionArgs.prototype, "relationLoadStrategy", void 0);
CreateOneNutritionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateOneNutritionArgs);
exports.CreateOneNutritionArgs = CreateOneNutritionArgs;
//# sourceMappingURL=create-one-nutrition.args.js.map