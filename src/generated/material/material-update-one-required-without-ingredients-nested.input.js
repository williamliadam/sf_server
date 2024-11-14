"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateOneRequiredWithoutIngredientsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_without_ingredients_input_1 = require("./material-create-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const material_create_or_connect_without_ingredients_input_1 = require("./material-create-or-connect-without-ingredients.input");
const material_upsert_without_ingredients_input_1 = require("./material-upsert-without-ingredients.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
const material_update_to_one_with_where_without_ingredients_input_1 = require("./material-update-to-one-with-where-without-ingredients.input");
let MaterialUpdateOneRequiredWithoutIngredientsNestedInput = class MaterialUpdateOneRequiredWithoutIngredientsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput)
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_or_connect_without_ingredients_input_1.MaterialCreateOrConnectWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_or_connect_without_ingredients_input_1.MaterialCreateOrConnectWithoutIngredientsInput)
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_upsert_without_ingredients_input_1.MaterialUpsertWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_upsert_without_ingredients_input_1.MaterialUpsertWithoutIngredientsInput)
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_update_to_one_with_where_without_ingredients_input_1.MaterialUpdateToOneWithWhereWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_update_to_one_with_where_without_ingredients_input_1.MaterialUpdateToOneWithWhereWithoutIngredientsInput)
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput.prototype, "update", void 0);
MaterialUpdateOneRequiredWithoutIngredientsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateOneRequiredWithoutIngredientsNestedInput);
exports.MaterialUpdateOneRequiredWithoutIngredientsNestedInput = MaterialUpdateOneRequiredWithoutIngredientsNestedInput;
//# sourceMappingURL=material-update-one-required-without-ingredients-nested.input.js.map