"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUpsertWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_where_unique_input_1 = require("./user-auth-where-unique.input");
const class_transformer_1 = require("class-transformer");
const user_auth_update_without_user_input_1 = require("./user-auth-update-without-user.input");
const user_auth_create_without_user_input_1 = require("./user-auth-create-without-user.input");
let UserAuthUpsertWithWhereUniqueWithoutUserInput = class UserAuthUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_auth_where_unique_input_1.UserAuthWhereUniqueInput)
], UserAuthUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_update_without_user_input_1.UserAuthUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_auth_update_without_user_input_1.UserAuthUpdateWithoutUserInput)
], UserAuthUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_create_without_user_input_1.UserAuthCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_auth_create_without_user_input_1.UserAuthCreateWithoutUserInput)
], UserAuthUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
UserAuthUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthUpsertWithWhereUniqueWithoutUserInput);
exports.UserAuthUpsertWithWhereUniqueWithoutUserInput = UserAuthUpsertWithWhereUniqueWithoutUserInput;
//# sourceMappingURL=user-auth-upsert-with-where-unique-without-user.input.js.map