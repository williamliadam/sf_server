"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ClientCreateManyInput = class ClientCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientCreateManyInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientCreateManyInput.prototype, "updatedAt", void 0);
ClientCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], ClientCreateManyInput);
exports.ClientCreateManyInput = ClientCreateManyInput;
//# sourceMappingURL=client-create-many.input.js.map