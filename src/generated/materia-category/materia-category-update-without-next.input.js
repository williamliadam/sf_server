"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpdateWithoutNextInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const material_update_many_without_category_nested_input_1 = require("../material/material-update-many-without-category-nested.input");
const materia_category_update_one_without_next_nested_input_1 = require("./materia-category-update-one-without-next-nested.input");
let MateriaCategoryUpdateWithoutNextInput = class MateriaCategoryUpdateWithoutNextInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_update_many_without_category_nested_input_1.MaterialUpdateManyWithoutCategoryNestedInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_one_without_next_nested_input_1.MateriaCategoryUpdateOneWithoutNextNestedInput, { nullable: true })
], MateriaCategoryUpdateWithoutNextInput.prototype, "last", void 0);
MateriaCategoryUpdateWithoutNextInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpdateWithoutNextInput);
exports.MateriaCategoryUpdateWithoutNextInput = MateriaCategoryUpdateWithoutNextInput;
//# sourceMappingURL=materia-category-update-without-next.input.js.map