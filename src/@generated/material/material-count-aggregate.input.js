"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let MaterialCountAggregateInput = class MaterialCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialCountAggregateInput.prototype, "_all", void 0);
MaterialCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialCountAggregateInput);
exports.MaterialCountAggregateInput = MaterialCountAggregateInput;
//# sourceMappingURL=material-count-aggregate.input.js.map