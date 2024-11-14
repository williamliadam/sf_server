"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpdateWithoutMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const materia_category_update_many_without_last_nested_input_1 = require("./materia-category-update-many-without-last-nested.input");
const materia_category_update_one_without_next_nested_input_1 = require("./materia-category-update-one-without-next-nested.input");
let MateriaCategoryUpdateWithoutMaterialsInput = class MateriaCategoryUpdateWithoutMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_many_without_last_nested_input_1.MateriaCategoryUpdateManyWithoutLastNestedInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_one_without_next_nested_input_1.MateriaCategoryUpdateOneWithoutNextNestedInput, { nullable: true })
], MateriaCategoryUpdateWithoutMaterialsInput.prototype, "last", void 0);
MateriaCategoryUpdateWithoutMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpdateWithoutMaterialsInput);
exports.MateriaCategoryUpdateWithoutMaterialsInput = MateriaCategoryUpdateWithoutMaterialsInput;
//# sourceMappingURL=materia-category-update-without-materials.input.js.map