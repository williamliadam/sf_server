"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ClientCountAggregateInput = class ClientCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientCountAggregateInput.prototype, "_all", void 0);
ClientCountAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientCountAggregateInput);
exports.ClientCountAggregateInput = ClientCountAggregateInput;
//# sourceMappingURL=client-count-aggregate.input.js.map