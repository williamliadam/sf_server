"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialMinAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let MaterialMinAggregateInput = class MaterialMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "nickName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "materiaCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MaterialMinAggregateInput.prototype, "updatedAt", void 0);
MaterialMinAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialMinAggregateInput);
exports.MaterialMinAggregateInput = MaterialMinAggregateInput;
//# sourceMappingURL=material-min-aggregate.input.js.map