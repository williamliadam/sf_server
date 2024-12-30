"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAuthsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_auths_input_1 = require("./user-update-without-auths.input");
const class_transformer_1 = require("class-transformer");
const user_create_without_auths_input_1 = require("./user-create-without-auths.input");
const user_where_input_1 = require("./user-where.input");
let UserUpsertWithoutAuthsInput = class UserUpsertWithoutAuthsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_update_without_auths_input_1.UserUpdateWithoutAuthsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_auths_input_1.UserUpdateWithoutAuthsInput)
], UserUpsertWithoutAuthsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_auths_input_1.UserCreateWithoutAuthsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_without_auths_input_1.UserCreateWithoutAuthsInput)
], UserUpsertWithoutAuthsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput)
], UserUpsertWithoutAuthsInput.prototype, "where", void 0);
UserUpsertWithoutAuthsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpsertWithoutAuthsInput);
exports.UserUpsertWithoutAuthsInput = UserUpsertWithoutAuthsInput;
//# sourceMappingURL=user-upsert-without-auths.input.js.map