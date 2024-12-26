"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ClientCountAggregate = class ClientCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false })
], ClientCountAggregate.prototype, "_all", void 0);
ClientCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], ClientCountAggregate);
exports.ClientCountAggregate = ClientCountAggregate;
//# sourceMappingURL=client-count-aggregate.output.js.map