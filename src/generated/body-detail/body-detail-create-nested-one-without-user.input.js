"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailCreateNestedOneWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_create_without_user_input_1 = require("./body-detail-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const body_detail_create_or_connect_without_user_input_1 = require("./body-detail-create-or-connect-without-user.input");
const body_detail_where_unique_input_1 = require("./body-detail-where-unique.input");
let BodyDetailCreateNestedOneWithoutUserInput = class BodyDetailCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput)
], BodyDetailCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_or_connect_without_user_input_1.BodyDetailCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_create_or_connect_without_user_input_1.BodyDetailCreateOrConnectWithoutUserInput)
], BodyDetailCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput)
], BodyDetailCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
BodyDetailCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailCreateNestedOneWithoutUserInput);
exports.BodyDetailCreateNestedOneWithoutUserInput = BodyDetailCreateNestedOneWithoutUserInput;
//# sourceMappingURL=body-detail-create-nested-one-without-user.input.js.map