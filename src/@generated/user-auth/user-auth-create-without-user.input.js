"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("../prisma/auth-type.enum");
let UserAuthCreateWithoutUserInput = class UserAuthCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: false })
], UserAuthCreateWithoutUserInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthCreateWithoutUserInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthCreateWithoutUserInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthCreateWithoutUserInput.prototype, "updatedAt", void 0);
UserAuthCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthCreateWithoutUserInput);
exports.UserAuthCreateWithoutUserInput = UserAuthCreateWithoutUserInput;
//# sourceMappingURL=user-auth-create-without-user.input.js.map