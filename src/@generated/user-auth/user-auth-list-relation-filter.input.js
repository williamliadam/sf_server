"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_auth_where_input_1 = require("./user-auth-where.input");
let UserAuthListRelationFilter = class UserAuthListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true })
], UserAuthListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true })
], UserAuthListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_where_input_1.UserAuthWhereInput, { nullable: true })
], UserAuthListRelationFilter.prototype, "none", void 0);
UserAuthListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], UserAuthListRelationFilter);
exports.UserAuthListRelationFilter = UserAuthListRelationFilter;
//# sourceMappingURL=user-auth-list-relation-filter.input.js.map