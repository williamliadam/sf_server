"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const enum_auth_type_field_update_operations_input_1 = require("../prisma/enum-auth-type-field-update-operations.input");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_required_without_auths_nested_input_1 = require("../user/user-update-one-required-without-auths-nested.input");
let UserAuthUpdateInput = class UserAuthUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => enum_auth_type_field_update_operations_input_1.EnumAuthTypeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserAuthUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_auths_nested_input_1.UserUpdateOneRequiredWithoutAuthsNestedInput, { nullable: true })
], UserAuthUpdateInput.prototype, "user", void 0);
UserAuthUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthUpdateInput);
exports.UserAuthUpdateInput = UserAuthUpdateInput;
//# sourceMappingURL=user-auth-update.input.js.map