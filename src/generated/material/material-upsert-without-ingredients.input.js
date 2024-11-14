"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpsertWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_update_without_ingredients_input_1 = require("./material-update-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const material_create_without_ingredients_input_1 = require("./material-create-without-ingredients.input");
const material_where_input_1 = require("./material-where.input");
let MaterialUpsertWithoutIngredientsInput = class MaterialUpsertWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_update_without_ingredients_input_1.MaterialUpdateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_update_without_ingredients_input_1.MaterialUpdateWithoutIngredientsInput)
], MaterialUpsertWithoutIngredientsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput)
], MaterialUpsertWithoutIngredientsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_input_1.MaterialWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_input_1.MaterialWhereInput)
], MaterialUpsertWithoutIngredientsInput.prototype, "where", void 0);
MaterialUpsertWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpsertWithoutIngredientsInput);
exports.MaterialUpsertWithoutIngredientsInput = MaterialUpsertWithoutIngredientsInput;
//# sourceMappingURL=material-upsert-without-ingredients.input.js.map