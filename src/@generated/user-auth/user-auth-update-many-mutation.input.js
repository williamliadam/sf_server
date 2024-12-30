"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const enum_auth_type_field_update_operations_input_1 = require("../prisma/enum-auth-type-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let UserAuthUpdateManyMutationInput = class UserAuthUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_field_update_operations_input_1.EnumAuthTypeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateManyMutationInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateManyMutationInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateManyMutationInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateManyMutationInput.prototype, "updatedAt", void 0);
UserAuthUpdateManyMutationInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthUpdateManyMutationInput);
exports.UserAuthUpdateManyMutationInput = UserAuthUpdateManyMutationInput;
//# sourceMappingURL=user-auth-update-many-mutation.input.js.map