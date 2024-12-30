"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_create_without_user_input_1 = require("./user-auth-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const user_auth_create_or_connect_without_user_input_1 = require("./user-auth-create-or-connect-without-user.input");
const user_auth_upsert_with_where_unique_without_user_input_1 = require("./user-auth-upsert-with-where-unique-without-user.input");
const user_auth_create_many_user_input_envelope_input_1 = require("./user-auth-create-many-user-input-envelope.input");
const user_auth_where_unique_input_1 = require("./user-auth-where-unique.input");
const user_auth_update_with_where_unique_without_user_input_1 = require("./user-auth-update-with-where-unique-without-user.input");
const user_auth_update_many_with_where_without_user_input_1 = require("./user-auth-update-many-with-where-without-user.input");
const user_auth_scalar_where_input_1 = require("./user-auth-scalar-where.input");
let UserAuthUpdateManyWithoutUserNestedInput = class UserAuthUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [user_auth_create_without_user_input_1.UserAuthCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_create_without_user_input_1.UserAuthCreateWithoutUserInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_create_or_connect_without_user_input_1.UserAuthCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_create_or_connect_without_user_input_1.UserAuthCreateOrConnectWithoutUserInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_upsert_with_where_unique_without_user_input_1.UserAuthUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_upsert_with_where_unique_without_user_input_1.UserAuthUpsertWithWhereUniqueWithoutUserInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_create_many_user_input_envelope_input_1.UserAuthCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_create_many_user_input_envelope_input_1.UserAuthCreateManyUserInputEnvelope)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_unique_input_1.UserAuthWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_unique_input_1.UserAuthWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_unique_input_1.UserAuthWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_where_unique_input_1.UserAuthWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_update_with_where_unique_without_user_input_1.UserAuthUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_update_with_where_unique_without_user_input_1.UserAuthUpdateWithWhereUniqueWithoutUserInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_update_many_with_where_without_user_input_1.UserAuthUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_update_many_with_where_without_user_input_1.UserAuthUpdateManyWithWhereWithoutUserInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_auth_scalar_where_input_1.UserAuthScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_auth_scalar_where_input_1.UserAuthScalarWhereInput)
], UserAuthUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
UserAuthUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthUpdateManyWithoutUserNestedInput);
exports.UserAuthUpdateManyWithoutUserNestedInput = UserAuthUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=user-auth-update-many-without-user-nested.input.js.map