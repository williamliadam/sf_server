"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyDetailUpsertWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const body_detail_update_without_user_input_1 = require("./body-detail-update-without-user.input");
const class_transformer_1 = require("class-transformer");
const body_detail_create_without_user_input_1 = require("./body-detail-create-without-user.input");
const body_detail_where_input_1 = require("./body-detail-where.input");
let BodyDetailUpsertWithoutUserInput = class BodyDetailUpsertWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => body_detail_update_without_user_input_1.BodyDetailUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => body_detail_update_without_user_input_1.BodyDetailUpdateWithoutUserInput)
], BodyDetailUpsertWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => body_detail_create_without_user_input_1.BodyDetailCreateWithoutUserInput)
], BodyDetailUpsertWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => body_detail_where_input_1.BodyDetailWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => body_detail_where_input_1.BodyDetailWhereInput)
], BodyDetailUpsertWithoutUserInput.prototype, "where", void 0);
BodyDetailUpsertWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], BodyDetailUpsertWithoutUserInput);
exports.BodyDetailUpsertWithoutUserInput = BodyDetailUpsertWithoutUserInput;
//# sourceMappingURL=body-detail-upsert-without-user.input.js.map