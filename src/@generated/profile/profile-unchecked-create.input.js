"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const goal_enum_1 = require("../prisma/goal.enum");
let ProfileUncheckedCreateInput = class ProfileUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ProfileUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: true })
], ProfileUncheckedCreateInput.prototype, "goal", void 0);
ProfileUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ProfileUncheckedCreateInput);
exports.ProfileUncheckedCreateInput = ProfileUncheckedCreateInput;
//# sourceMappingURL=profile-unchecked-create.input.js.map