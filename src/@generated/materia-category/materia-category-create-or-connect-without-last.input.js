"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateOrConnectWithoutLastInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_without_last_input_1 = require("./materia-category-create-without-last.input");
let MateriaCategoryCreateOrConnectWithoutLastInput = class MateriaCategoryCreateOrConnectWithoutLastInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryCreateOrConnectWithoutLastInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_last_input_1.MateriaCategoryCreateWithoutLastInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_last_input_1.MateriaCategoryCreateWithoutLastInput)
], MateriaCategoryCreateOrConnectWithoutLastInput.prototype, "create", void 0);
MateriaCategoryCreateOrConnectWithoutLastInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateOrConnectWithoutLastInput);
exports.MateriaCategoryCreateOrConnectWithoutLastInput = MateriaCategoryCreateOrConnectWithoutLastInput;
//# sourceMappingURL=materia-category-create-or-connect-without-last.input.js.map