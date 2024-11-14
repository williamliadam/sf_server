"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const goal_enum_1 = require("../prisma/goal.enum");
const user_create_nested_one_without_profile_input_1 = require("../user/user-create-nested-one-without-profile.input");
let ProfileCreateInput = class ProfileCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileCreateInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileCreateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProfileCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProfileCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], ProfileCreateInput.prototype, "goal", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_profile_input_1.UserCreateNestedOneWithoutProfileInput, { nullable: false })
], ProfileCreateInput.prototype, "user", void 0);
ProfileCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileCreateInput);
exports.ProfileCreateInput = ProfileCreateInput;
//# sourceMappingURL=profile-create.input.js.map