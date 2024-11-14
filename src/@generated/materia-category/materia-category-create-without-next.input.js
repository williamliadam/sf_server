"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateWithoutNextInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_nested_many_without_category_input_1 = require("../material/material-create-nested-many-without-category.input");
const materia_category_create_nested_one_without_next_input_1 = require("./materia-category-create-nested-one-without-next.input");
let MateriaCategoryCreateWithoutNextInput = class MateriaCategoryCreateWithoutNextInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateWithoutNextInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateWithoutNextInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateWithoutNextInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateWithoutNextInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_many_without_category_input_1.MaterialCreateNestedManyWithoutCategoryInput, { nullable: true })
], MateriaCategoryCreateWithoutNextInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_one_without_next_input_1.MateriaCategoryCreateNestedOneWithoutNextInput, { nullable: true })
], MateriaCategoryCreateWithoutNextInput.prototype, "last", void 0);
MateriaCategoryCreateWithoutNextInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateWithoutNextInput);
exports.MateriaCategoryCreateWithoutNextInput = MateriaCategoryCreateWithoutNextInput;
//# sourceMappingURL=materia-category-create-without-next.input.js.map