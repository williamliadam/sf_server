"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMaxAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ClientMaxAggregate = class ClientMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], ClientMaxAggregate.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientMaxAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientMaxAggregate.prototype, "updatedAt", void 0);
ClientMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ClientMaxAggregate);
exports.ClientMaxAggregate = ClientMaxAggregate;
//# sourceMappingURL=client-max-aggregate.output.js.map