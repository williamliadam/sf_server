"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("../prisma/auth-type.enum");
const user_create_nested_one_without_auths_input_1 = require("../user/user-create-nested-one-without-auths.input");
let UserAuthCreateInput = class UserAuthCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: false })
], UserAuthCreateInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthCreateInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthCreateInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_auths_input_1.UserCreateNestedOneWithoutAuthsInput, { nullable: false })
], UserAuthCreateInput.prototype, "user", void 0);
UserAuthCreateInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthCreateInput);
exports.UserAuthCreateInput = UserAuthCreateInput;
//# sourceMappingURL=user-auth-create.input.js.map