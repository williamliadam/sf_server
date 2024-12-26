"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let Client = class Client {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false })
], Client.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Client.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Client.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Client.prototype, "updatedAt", void 0);
Client = __decorate([
    (0, graphql_2.ObjectType)()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.model.js.map