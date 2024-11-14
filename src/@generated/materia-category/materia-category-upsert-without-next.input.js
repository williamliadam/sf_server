"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpsertWithoutNextInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_update_without_next_input_1 = require("./materia-category-update-without-next.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_without_next_input_1 = require("./materia-category-create-without-next.input");
const materia_category_where_input_1 = require("./materia-category-where.input");
let MateriaCategoryUpsertWithoutNextInput = class MateriaCategoryUpsertWithoutNextInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_without_next_input_1.MateriaCategoryUpdateWithoutNextInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_update_without_next_input_1.MateriaCategoryUpdateWithoutNextInput)
], MateriaCategoryUpsertWithoutNextInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput)
], MateriaCategoryUpsertWithoutNextInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_input_1.MateriaCategoryWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => materia_category_where_input_1.MateriaCategoryWhereInput)
], MateriaCategoryUpsertWithoutNextInput.prototype, "where", void 0);
MateriaCategoryUpsertWithoutNextInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpsertWithoutNextInput);
exports.MateriaCategoryUpsertWithoutNextInput = MateriaCategoryUpsertWithoutNextInput;
//# sourceMappingURL=materia-category-upsert-without-next.input.js.map