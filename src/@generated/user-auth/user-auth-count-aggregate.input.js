"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let UserAuthCountAggregateInput = class UserAuthCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "authType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "openId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAuthCountAggregateInput.prototype, "_all", void 0);
UserAuthCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], UserAuthCountAggregateInput);
exports.UserAuthCountAggregateInput = UserAuthCountAggregateInput;
//# sourceMappingURL=user-auth-count-aggregate.input.js.map