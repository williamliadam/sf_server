"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUpdateToOneWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const profile_where_input_1 = require("./profile-where.input");
const class_transformer_1 = require("class-transformer");
const profile_update_without_user_input_1 = require("./profile-update-without-user.input");
let ProfileUpdateToOneWithWhereWithoutUserInput = class ProfileUpdateToOneWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => profile_where_input_1.ProfileWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => profile_where_input_1.ProfileWhereInput)
], ProfileUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_update_without_user_input_1.ProfileUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => profile_update_without_user_input_1.ProfileUpdateWithoutUserInput)
], ProfileUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
ProfileUpdateToOneWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUpdateToOneWithWhereWithoutUserInput);
exports.ProfileUpdateToOneWithWhereWithoutUserInput = ProfileUpdateToOneWithWhereWithoutUserInput;
//# sourceMappingURL=profile-update-to-one-with-where-without-user.input.js.map