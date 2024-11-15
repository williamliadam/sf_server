"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpdateOneWithoutNextNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_without_next_input_1 = require("./materia-category-create-without-next.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_or_connect_without_next_input_1 = require("./materia-category-create-or-connect-without-next.input");
const materia_category_upsert_without_next_input_1 = require("./materia-category-upsert-without-next.input");
const materia_category_where_input_1 = require("./materia-category-where.input");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const materia_category_update_to_one_with_where_without_next_input_1 = require("./materia-category-update-to-one-with-where-without-next.input");
let MateriaCategoryUpdateOneWithoutNextNestedInput = class MateriaCategoryUpdateOneWithoutNextNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_or_connect_without_next_input_1.MateriaCategoryCreateOrConnectWithoutNextInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_create_or_connect_without_next_input_1.MateriaCategoryCreateOrConnectWithoutNextInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_upsert_without_next_input_1.MateriaCategoryUpsertWithoutNextInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_upsert_without_next_input_1.MateriaCategoryUpsertWithoutNextInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_to_one_with_where_without_next_input_1.MateriaCategoryUpdateToOneWithWhereWithoutNextInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_update_to_one_with_where_without_next_input_1.MateriaCategoryUpdateToOneWithWhereWithoutNextInput)
], MateriaCategoryUpdateOneWithoutNextNestedInput.prototype, "update", void 0);
MateriaCategoryUpdateOneWithoutNextNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpdateOneWithoutNextNestedInput);
exports.MateriaCategoryUpdateOneWithoutNextNestedInput = MateriaCategoryUpdateOneWithoutNextNestedInput;
//# sourceMappingURL=materia-category-update-one-without-next-nested.input.js.map