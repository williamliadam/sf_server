"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateWithoutMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_create_nested_many_without_last_input_1 = require("./materia-category-create-nested-many-without-last.input");
const materia_category_create_nested_one_without_next_input_1 = require("./materia-category-create-nested-one-without-next.input");
let MateriaCategoryCreateWithoutMaterialsInput = class MateriaCategoryCreateWithoutMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_many_without_last_input_1.MateriaCategoryCreateNestedManyWithoutLastInput, { nullable: true })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_one_without_next_input_1.MateriaCategoryCreateNestedOneWithoutNextInput, { nullable: true })
], MateriaCategoryCreateWithoutMaterialsInput.prototype, "last", void 0);
MateriaCategoryCreateWithoutMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateWithoutMaterialsInput);
exports.MateriaCategoryCreateWithoutMaterialsInput = MateriaCategoryCreateWithoutMaterialsInput;
//# sourceMappingURL=materia-category-create-without-materials.input.js.map