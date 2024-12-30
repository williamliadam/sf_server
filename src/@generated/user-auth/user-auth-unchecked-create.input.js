"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const auth_type_enum_1 = require("../prisma/auth-type.enum");
let UserAuthUncheckedCreateInput = class UserAuthUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], UserAuthUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], UserAuthUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: false })
], UserAuthUncheckedCreateInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthUncheckedCreateInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserAuthUncheckedCreateInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserAuthUncheckedCreateInput.prototype, "updatedAt", void 0);
UserAuthUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthUncheckedCreateInput);
exports.UserAuthUncheckedCreateInput = UserAuthUncheckedCreateInput;
//# sourceMappingURL=user-auth-unchecked-create.input.js.map