"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCreateManyUnitInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const ingredient_create_many_unit_input_1 = require("./ingredient-create-many-unit.input");
const class_transformer_1 = require("class-transformer");
let IngredientCreateManyUnitInputEnvelope = class IngredientCreateManyUnitInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [ingredient_create_many_unit_input_1.IngredientCreateManyUnitInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => ingredient_create_many_unit_input_1.IngredientCreateManyUnitInput)
], IngredientCreateManyUnitInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], IngredientCreateManyUnitInputEnvelope.prototype, "skipDuplicates", void 0);
IngredientCreateManyUnitInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], IngredientCreateManyUnitInputEnvelope);
exports.IngredientCreateManyUnitInputEnvelope = IngredientCreateManyUnitInputEnvelope;
//# sourceMappingURL=ingredient-create-many-unit-input-envelope.input.js.map