"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PostMaxAggregateInput = class PostMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "follows", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMaxAggregateInput.prototype, "updatedAt", void 0);
PostMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PostMaxAggregateInput);
exports.PostMaxAggregateInput = PostMaxAggregateInput;
//# sourceMappingURL=post-max-aggregate.input.js.map