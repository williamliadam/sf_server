"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodCreateManyUsedRecipeInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_create_many_used_recipe_input_1 = require("./method-create-many-used-recipe.input");
const class_transformer_1 = require("class-transformer");
let MethodCreateManyUsedRecipeInputEnvelope = class MethodCreateManyUsedRecipeInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [method_create_many_used_recipe_input_1.MethodCreateManyUsedRecipeInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => method_create_many_used_recipe_input_1.MethodCreateManyUsedRecipeInput)
], MethodCreateManyUsedRecipeInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MethodCreateManyUsedRecipeInputEnvelope.prototype, "skipDuplicates", void 0);
MethodCreateManyUsedRecipeInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], MethodCreateManyUsedRecipeInputEnvelope);
exports.MethodCreateManyUsedRecipeInputEnvelope = MethodCreateManyUsedRecipeInputEnvelope;
//# sourceMappingURL=method-create-many-used-recipe-input-envelope.input.js.map