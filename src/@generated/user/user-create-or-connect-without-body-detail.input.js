"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBodyDetailInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_unique_input_1 = require("./user-where-unique.input");
const class_transformer_1 = require("class-transformer");
const user_create_without_body_detail_input_1 = require("./user-create-without-body-detail.input");
let UserCreateOrConnectWithoutBodyDetailInput = class UserCreateOrConnectWithoutBodyDetailInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBodyDetailInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_body_detail_input_1.UserCreateWithoutBodyDetailInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_without_body_detail_input_1.UserCreateWithoutBodyDetailInput)
], UserCreateOrConnectWithoutBodyDetailInput.prototype, "create", void 0);
UserCreateOrConnectWithoutBodyDetailInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateOrConnectWithoutBodyDetailInput);
exports.UserCreateOrConnectWithoutBodyDetailInput = UserCreateOrConnectWithoutBodyDetailInput;
//# sourceMappingURL=user-create-or-connect-without-body-detail.input.js.map