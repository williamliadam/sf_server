"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCreateManyMaterialInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_many_material_input_1 = require("./ingredient-create-many-material.input");
const class_transformer_1 = require("class-transformer");
let IngredientCreateManyMaterialInputEnvelope = class IngredientCreateManyMaterialInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_many_material_input_1.IngredientCreateManyMaterialInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_material_input_1.IngredientCreateManyMaterialInput)
], IngredientCreateManyMaterialInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientCreateManyMaterialInputEnvelope.prototype, "skipDuplicates", void 0);
IngredientCreateManyMaterialInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], IngredientCreateManyMaterialInputEnvelope);
exports.IngredientCreateManyMaterialInputEnvelope = IngredientCreateManyMaterialInputEnvelope;
//# sourceMappingURL=ingredient-create-many-material-input-envelope.input.js.map