"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let BodyDetailUpdateManyMutationInput = class BodyDetailUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "bmi", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "bmr", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "tdee", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], BodyDetailUpdateManyMutationInput.prototype, "updatedAt", void 0);
BodyDetailUpdateManyMutationInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailUpdateManyMutationInput);
exports.BodyDetailUpdateManyMutationInput = BodyDetailUpdateManyMutationInput;
//# sourceMappingURL=body-detail-update-many-mutation.input.js.map