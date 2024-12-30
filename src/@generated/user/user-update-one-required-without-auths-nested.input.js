"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAuthsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_auths_input_1 = require("./user-create-without-auths.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_auths_input_1 = require("./user-create-or-connect-without-auths.input");
const user_upsert_without_auths_input_1 = require("./user-upsert-without-auths.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_auths_input_1 = require("./user-update-to-one-with-where-without-auths.input");
let UserUpdateOneRequiredWithoutAuthsNestedInput = class UserUpdateOneRequiredWithoutAuthsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_auths_input_1.UserCreateWithoutAuthsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_auths_input_1.UserCreateWithoutAuthsInput)
], UserUpdateOneRequiredWithoutAuthsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_auths_input_1.UserCreateOrConnectWithoutAuthsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_auths_input_1.UserCreateOrConnectWithoutAuthsInput)
], UserUpdateOneRequiredWithoutAuthsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_auths_input_1.UserUpsertWithoutAuthsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_auths_input_1.UserUpsertWithoutAuthsInput)
], UserUpdateOneRequiredWithoutAuthsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAuthsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_auths_input_1.UserUpdateToOneWithWhereWithoutAuthsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_auths_input_1.UserUpdateToOneWithWhereWithoutAuthsInput)
], UserUpdateOneRequiredWithoutAuthsNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAuthsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneRequiredWithoutAuthsNestedInput);
exports.UserUpdateOneRequiredWithoutAuthsNestedInput = UserUpdateOneRequiredWithoutAuthsNestedInput;
//# sourceMappingURL=user-update-one-required-without-auths-nested.input.js.map