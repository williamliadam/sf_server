"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const enum_goal_field_update_operations_input_1 = require("../prisma/enum-goal-field-update-operations.input");
const user_update_one_required_without_profile_nested_input_1 = require("../user/user-update-one-required-without-profile-nested.input");
let ProfileUpdateInput = class ProfileUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProfileUpdateInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true })
], ProfileUpdateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProfileUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true })
], ProfileUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_goal_field_update_operations_input_1.EnumGoalFieldUpdateOperationsInput, { nullable: true })
], ProfileUpdateInput.prototype, "goal", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_profile_nested_input_1.UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
], ProfileUpdateInput.prototype, "user", void 0);
ProfileUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUpdateInput);
exports.ProfileUpdateInput = ProfileUpdateInput;
//# sourceMappingURL=profile-update.input.js.map