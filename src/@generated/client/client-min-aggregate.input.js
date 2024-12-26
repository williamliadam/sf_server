"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMinAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ClientMinAggregateInput = class ClientMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], ClientMinAggregateInput.prototype, "updatedAt", void 0);
ClientMinAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientMinAggregateInput);
exports.ClientMinAggregateInput = ClientMinAggregateInput;
//# sourceMappingURL=client-min-aggregate.input.js.map