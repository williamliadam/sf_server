"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ClientMaxAggregateInput = class ClientMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMaxAggregateInput.prototype, "updatedAt", void 0);
ClientMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientMaxAggregateInput);
exports.ClientMaxAggregateInput = ClientMaxAggregateInput;
//# sourceMappingURL=client-max-aggregate.input.js.map