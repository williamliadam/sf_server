"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCreateNestedOneWithoutIngredientsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_without_ingredients_input_1 = require("./material-create-without-ingredients.input");
const class_transformer_1 = require("class-transformer");
const material_create_or_connect_without_ingredients_input_1 = require("./material-create-or-connect-without-ingredients.input");
const material_where_unique_input_1 = require("./material-where-unique.input");
let MaterialCreateNestedOneWithoutIngredientsInput = class MaterialCreateNestedOneWithoutIngredientsInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_without_ingredients_input_1.MaterialCreateWithoutIngredientsInput)
], MaterialCreateNestedOneWithoutIngredientsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_or_connect_without_ingredients_input_1.MaterialCreateOrConnectWithoutIngredientsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_create_or_connect_without_ingredients_input_1.MaterialCreateOrConnectWithoutIngredientsInput)
], MaterialCreateNestedOneWithoutIngredientsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_where_unique_input_1.MaterialWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_where_unique_input_1.MaterialWhereUniqueInput)
], MaterialCreateNestedOneWithoutIngredientsInput.prototype, "connect", void 0);
MaterialCreateNestedOneWithoutIngredientsInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialCreateNestedOneWithoutIngredientsInput);
exports.MaterialCreateNestedOneWithoutIngredientsInput = MaterialCreateNestedOneWithoutIngredientsInput;
//# sourceMappingURL=material-create-nested-one-without-ingredients.input.js.map