"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateCreateManyRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let DishTemplateCreateManyRecipeInput = class DishTemplateCreateManyRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateCreateManyRecipeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], DishTemplateCreateManyRecipeInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateManyRecipeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DishTemplateCreateManyRecipeInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], DishTemplateCreateManyRecipeInput.prototype, "mealTemplateId", void 0);
DishTemplateCreateManyRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateCreateManyRecipeInput);
exports.DishTemplateCreateManyRecipeInput = DishTemplateCreateManyRecipeInput;
//# sourceMappingURL=dish-template-create-many-recipe.input.js.map