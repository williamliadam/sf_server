"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMinAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let PostMinAggregateInput = class PostMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "follows", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregateInput.prototype, "updatedAt", void 0);
PostMinAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], PostMinAggregateInput);
exports.PostMinAggregateInput = PostMinAggregateInput;
//# sourceMappingURL=post-min-aggregate.input.js.map