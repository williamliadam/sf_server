"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateOrConnectWithoutMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_without_materials_input_1 = require("./materia-category-create-without-materials.input");
let MateriaCategoryCreateOrConnectWithoutMaterialsInput = class MateriaCategoryCreateOrConnectWithoutMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryCreateOrConnectWithoutMaterialsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_materials_input_1.MateriaCategoryCreateWithoutMaterialsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_materials_input_1.MateriaCategoryCreateWithoutMaterialsInput)
], MateriaCategoryCreateOrConnectWithoutMaterialsInput.prototype, "create", void 0);
MateriaCategoryCreateOrConnectWithoutMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateOrConnectWithoutMaterialsInput);
exports.MateriaCategoryCreateOrConnectWithoutMaterialsInput = MateriaCategoryCreateOrConnectWithoutMaterialsInput;
//# sourceMappingURL=materia-category-create-or-connect-without-materials.input.js.map