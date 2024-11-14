"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailUncheckedUpdateOneWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_create_without_user_input_1 = require("./body-detail-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const body_detail_create_or_connect_without_user_input_1 = require("./body-detail-create-or-connect-without-user.input");
const body_detail_upsert_without_user_input_1 = require("./body-detail-upsert-without-user.input");
const body_detail_where_input_1 = require("./body-detail-where.input");
const body_detail_where_unique_input_1 = require("./body-detail-where-unique.input");
const body_detail_update_to_one_with_where_without_user_input_1 = require("./body-detail-update-to-one-with-where-without-user.input");
let BodyDetailUncheckedUpdateOneWithoutUserNestedInput = class BodyDetailUncheckedUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_or_connect_without_user_input_1.BodyDetailCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_create_or_connect_without_user_input_1.BodyDetailCreateOrConnectWithoutUserInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_upsert_without_user_input_1.BodyDetailUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_upsert_without_user_input_1.BodyDetailUpsertWithoutUserInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_input_1.BodyDetailWhereInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_input_1.BodyDetailWhereInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_unique_input_1.BodyDetailWhereUniqueInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_update_to_one_with_where_without_user_input_1.BodyDetailUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_update_to_one_with_where_without_user_input_1.BodyDetailUpdateToOneWithWhereWithoutUserInput)
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
BodyDetailUncheckedUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailUncheckedUpdateOneWithoutUserNestedInput);
exports.BodyDetailUncheckedUpdateOneWithoutUserNestedInput = BodyDetailUncheckedUpdateOneWithoutUserNestedInput;
//# sourceMappingURL=body-detail-unchecked-update-one-without-user-nested.input.js.map