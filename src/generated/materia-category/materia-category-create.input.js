"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_create_nested_many_without_category_input_1 = require("../material/material-create-nested-many-without-category.input");
const materia_category_create_nested_many_without_last_input_1 = require("./materia-category-create-nested-many-without-last.input");
const materia_category_create_nested_one_without_next_input_1 = require("./materia-category-create-nested-one-without-next.input");
let MateriaCategoryCreateInput = class MateriaCategoryCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_create_nested_many_without_category_input_1.MaterialCreateNestedManyWithoutCategoryInput, { nullable: true })
], MateriaCategoryCreateInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_many_without_last_input_1.MateriaCategoryCreateNestedManyWithoutLastInput, { nullable: true })
], MateriaCategoryCreateInput.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_create_nested_one_without_next_input_1.MateriaCategoryCreateNestedOneWithoutNextInput, { nullable: true })
], MateriaCategoryCreateInput.prototype, "last", void 0);
MateriaCategoryCreateInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryCreateInput);
exports.MateriaCategoryCreateInput = MateriaCategoryCreateInput;
//# sourceMappingURL=materia-category-create.input.js.map