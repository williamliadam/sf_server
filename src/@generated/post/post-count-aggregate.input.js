"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PostCountAggregateInput = class PostCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostCountAggregateInput.prototype, "_all", void 0);
PostCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PostCountAggregateInput);
exports.PostCountAggregateInput = PostCountAggregateInput;
//# sourceMappingURL=post-count-aggregate.input.js.map