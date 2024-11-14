"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let BodyDetailCountAggregateInput = class BodyDetailCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "bmi", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "bmr", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "tdee", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BodyDetailCountAggregateInput.prototype, "_all", void 0);
BodyDetailCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailCountAggregateInput);
exports.BodyDetailCountAggregateInput = BodyDetailCountAggregateInput;
//# sourceMappingURL=body-detail-count-aggregate.input.js.map