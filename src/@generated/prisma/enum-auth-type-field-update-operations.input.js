"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAuthTypeFieldUpdateOperationsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_type_enum_1 = require("./auth-type.enum");
let EnumAuthTypeFieldUpdateOperationsInput = class EnumAuthTypeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => auth_type_enum_1.AuthType, { nullable: true })
], EnumAuthTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumAuthTypeFieldUpdateOperationsInput = __decorate([
    (0, graphql_2.InputType)()
], EnumAuthTypeFieldUpdateOperationsInput);
exports.EnumAuthTypeFieldUpdateOperationsInput = EnumAuthTypeFieldUpdateOperationsInput;
//# sourceMappingURL=enum-auth-type-field-update-operations.input.js.map