"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutAuthsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const class_transformer_1 = require("class-transformer");
const user_update_without_auths_input_1 = require("./user-update-without-auths.input");
let UserUpdateToOneWithWhereWithoutAuthsInput = class UserUpdateToOneWithWhereWithoutAuthsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutAuthsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_without_auths_input_1.UserUpdateWithoutAuthsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_auths_input_1.UserUpdateWithoutAuthsInput)
], UserUpdateToOneWithWhereWithoutAuthsInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutAuthsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateToOneWithWhereWithoutAuthsInput);
exports.UserUpdateToOneWithWhereWithoutAuthsInput = UserUpdateToOneWithWhereWithoutAuthsInput;
//# sourceMappingURL=user-update-to-one-with-where-without-auths.input.js.map