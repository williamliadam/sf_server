"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMinAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let PostMinAggregate = class PostMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], PostMinAggregate.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostMinAggregate.prototype, "stars", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], PostMinAggregate.prototype, "published", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], PostMinAggregate.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMinAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], PostMinAggregate.prototype, "updatedAt", void 0);
PostMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], PostMinAggregate);
exports.PostMinAggregate = PostMinAggregate;
//# sourceMappingURL=post-min-aggregate.output.js.map