"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryMinAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let MateriaCategoryMinAggregateInput = class MateriaCategoryMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], MateriaCategoryMinAggregateInput.prototype, "updatedAt", void 0);
MateriaCategoryMinAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryMinAggregateInput);
exports.MateriaCategoryMinAggregateInput = MateriaCategoryMinAggregateInput;
//# sourceMappingURL=materia-category-min-aggregate.input.js.map