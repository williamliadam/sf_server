"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMealTemplateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_create_many_input_1 = require("./meal-template-create-many.input");
const class_transformer_1 = require("class-transformer");
let CreateManyMealTemplateArgs = class CreateManyMealTemplateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [meal_template_create_many_input_1.MealTemplateCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_template_create_many_input_1.MealTemplateCreateManyInput)
], CreateManyMealTemplateArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyMealTemplateArgs.prototype, "skipDuplicates", void 0);
CreateManyMealTemplateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CreateManyMealTemplateArgs);
exports.CreateManyMealTemplateArgs = CreateManyMealTemplateArgs;
//# sourceMappingURL=create-many-meal-template.args.js.map