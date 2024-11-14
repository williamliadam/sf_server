"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const recipe_create_nested_one_without_methods_input_1 = require("../recipe/recipe-create-nested-one-without-methods.input");
let MethodCreateInput = class MethodCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MethodCreateInput.prototype, "desc", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MethodCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MethodCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => recipe_create_nested_one_without_methods_input_1.RecipeCreateNestedOneWithoutMethodsInput, { nullable: true })
], MethodCreateInput.prototype, "usedRecipe", void 0);
MethodCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MethodCreateInput);
exports.MethodCreateInput = MethodCreateInput;
//# sourceMappingURL=method-create.input.js.map