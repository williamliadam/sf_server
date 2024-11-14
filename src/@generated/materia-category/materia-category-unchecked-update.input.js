"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUncheckedUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const material_unchecked_update_many_without_category_nested_input_1 = require("../material/material-unchecked-update-many-without-category-nested.input");
const materia_category_unchecked_update_many_without_last_nested_input_1 = require("./materia-category-unchecked-update-many-without-last-nested.input");
let MateriaCategoryUncheckedUpdateInput = class MateriaCategoryUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_unchecked_update_many_without_category_nested_input_1.MaterialUncheckedUpdateManyWithoutCategoryNestedInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_unchecked_update_many_without_last_nested_input_1.MateriaCategoryUncheckedUpdateManyWithoutLastNestedInput, { nullable: true })
], MateriaCategoryUncheckedUpdateInput.prototype, "next", void 0);
MateriaCategoryUncheckedUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUncheckedUpdateInput);
exports.MateriaCategoryUncheckedUpdateInput = MateriaCategoryUncheckedUpdateInput;
//# sourceMappingURL=materia-category-unchecked-update.input.js.map