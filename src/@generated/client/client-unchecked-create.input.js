"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ClientUncheckedCreateInput = class ClientUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], ClientUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "subcompanyid1span", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "workcode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "jobtitle", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "departmentidspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "idspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "departmentid", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "telephone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "subcompanyid1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "telephonespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "jobtitlespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "workcodespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "lastnamespan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "emailspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "randomFieldIdspan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], ClientUncheckedCreateInput.prototype, "randomFieldId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], ClientUncheckedCreateInput.prototype, "updatedAt", void 0);
ClientUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], ClientUncheckedCreateInput);
exports.ClientUncheckedCreateInput = ClientUncheckedCreateInput;
//# sourceMappingURL=client-unchecked-create.input.js.map