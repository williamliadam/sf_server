"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let ClientCreateInput = class ClientCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientCreateInput.prototype, "updatedAt", void 0);
ClientCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientCreateInput);
exports.ClientCreateInput = ClientCreateInput;
//# sourceMappingURL=client-create.input.js.map