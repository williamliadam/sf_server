"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_without_materials_input_1 = require("./materia-category-create-without-materials.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_or_connect_without_materials_input_1 = require("./materia-category-create-or-connect-without-materials.input");
const materia_category_upsert_without_materials_input_1 = require("./materia-category-upsert-without-materials.input");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const materia_category_update_to_one_with_where_without_materials_input_1 = require("./materia-category-update-to-one-with-where-without-materials.input");
let MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput = class MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_materials_input_1.MateriaCategoryCreateWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_materials_input_1.MateriaCategoryCreateWithoutMaterialsInput)
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_or_connect_without_materials_input_1.MateriaCategoryCreateOrConnectWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_or_connect_without_materials_input_1.MateriaCategoryCreateOrConnectWithoutMaterialsInput)
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_upsert_without_materials_input_1.MateriaCategoryUpsertWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_upsert_without_materials_input_1.MateriaCategoryUpsertWithoutMaterialsInput)
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_to_one_with_where_without_materials_input_1.MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_update_to_one_with_where_without_materials_input_1.MateriaCategoryUpdateToOneWithWhereWithoutMaterialsInput)
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "update", void 0);
MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput);
exports.MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput = MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput;
//# sourceMappingURL=materia-category-update-one-required-without-materials-nested.input.js.map