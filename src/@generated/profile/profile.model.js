"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const goal_enum_1 = require("../prisma/goal.enum");
const user_model_1 = require("../user/user.model");
let Profile = class Profile {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Profile.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Profile.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], Profile.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Profile.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Profile.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => goal_enum_1.Goal, { nullable: false, defaultValue: 'KEEP' })
], Profile.prototype, "goal", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false })
], Profile.prototype, "user", void 0);
Profile = __decorate([
    (0, graphql_2.ObjectType)()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map