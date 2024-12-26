"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedUpdateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_field_update_operations_input_1 = require("../prisma/int-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let ClientUncheckedUpdateManyInput = class ClientUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => int_field_update_operations_input_1.IntFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], ClientUncheckedUpdateManyInput.prototype, "updatedAt", void 0);
ClientUncheckedUpdateManyInput = __decorate([
    (0, graphql_2.InputType)()
], ClientUncheckedUpdateManyInput);
exports.ClientUncheckedUpdateManyInput = ClientUncheckedUpdateManyInput;
//# sourceMappingURL=client-unchecked-update-many.input.js.map