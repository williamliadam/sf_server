"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthCreateManyUserInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_create_many_user_input_1 = require("./user-auth-create-many-user.input");
const class_transformer_1 = require("class-transformer");
let UserAuthCreateManyUserInputEnvelope = class UserAuthCreateManyUserInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [user_auth_create_many_user_input_1.UserAuthCreateManyUserInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => user_auth_create_many_user_input_1.UserAuthCreateManyUserInput)
], UserAuthCreateManyUserInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
UserAuthCreateManyUserInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], UserAuthCreateManyUserInputEnvelope);
exports.UserAuthCreateManyUserInputEnvelope = UserAuthCreateManyUserInputEnvelope;
//# sourceMappingURL=user-auth-create-many-user-input-envelope.input.js.map