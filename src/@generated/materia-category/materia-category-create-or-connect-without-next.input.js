"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateOrConnectWithoutNextInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_where_unique_input_1 = require("./materia-category-where-unique.input");
const class_transformer_1 = require("class-transformer");
const materia_category_create_without_next_input_1 = require("./materia-category-create-without-next.input");
let MateriaCategoryCreateOrConnectWithoutNextInput = class MateriaCategoryCreateOrConnectWithoutNextInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_where_unique_input_1.MateriaCategoryWhereUniqueInput)
], MateriaCategoryCreateOrConnectWithoutNextInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_create_without_next_input_1.MateriaCategoryCreateWithoutNextInput)
], MateriaCategoryCreateOrConnectWithoutNextInput.prototype, "create", void 0);
MateriaCategoryCreateOrConnectWithoutNextInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateOrConnectWithoutNextInput);
exports.MateriaCategoryCreateOrConnectWithoutNextInput = MateriaCategoryCreateOrConnectWithoutNextInput;
//# sourceMappingURL=materia-category-create-or-connect-without-next.input.js.map