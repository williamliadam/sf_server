"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMealTemplateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_update_many_mutation_input_1 = require("./meal-template-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const meal_template_where_input_1 = require("./meal-template-where.input");
let UpdateManyMealTemplateArgs = class UpdateManyMealTemplateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_many_mutation_input_1.MealTemplateUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_template_update_many_mutation_input_1.MealTemplateUpdateManyMutationInput)
], UpdateManyMealTemplateArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_where_input_1.MealTemplateWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => meal_template_where_input_1.MealTemplateWhereInput)
], UpdateManyMealTemplateArgs.prototype, "where", void 0);
UpdateManyMealTemplateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyMealTemplateArgs);
exports.UpdateManyMealTemplateArgs = UpdateManyMealTemplateArgs;
//# sourceMappingURL=update-many-meal-template.args.js.map