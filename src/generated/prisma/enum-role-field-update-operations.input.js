"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFieldUpdateOperationsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
let EnumRoleFieldUpdateOperationsInput = class EnumRoleFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true })
], EnumRoleFieldUpdateOperationsInput.prototype, "set", void 0);
EnumRoleFieldUpdateOperationsInput = __decorate([
    (0, graphql_2.InputType)()
], EnumRoleFieldUpdateOperationsInput);
exports.EnumRoleFieldUpdateOperationsInput = EnumRoleFieldUpdateOperationsInput;
//# sourceMappingURL=enum-role-field-update-operations.input.js.map