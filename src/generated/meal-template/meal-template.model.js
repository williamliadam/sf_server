"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const dish_template_model_1 = require("../dish-template/dish-template.model");
const meal_template_count_output_1 = require("./meal-template-count.output");
let MealTemplate = class MealTemplate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], MealTemplate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MealTemplate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], MealTemplate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealTemplate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], MealTemplate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], MealTemplate.prototype, "createBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_model_1.DishTemplate], { nullable: true })
], MealTemplate.prototype, "dishTemplates", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_count_output_1.MealTemplateCount, { nullable: false })
], MealTemplate.prototype, "_count", void 0);
MealTemplate = __decorate([
    (0, graphql_2.ObjectType)()
], MealTemplate);
exports.MealTemplate = MealTemplate;
//# sourceMappingURL=meal-template.model.js.map