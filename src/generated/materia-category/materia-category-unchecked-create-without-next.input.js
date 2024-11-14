"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUncheckedCreateWithoutNextInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const material_unchecked_create_nested_many_without_category_input_1 = require("../material/material-unchecked-create-nested-many-without-category.input");
let MateriaCategoryUncheckedCreateWithoutNextInput = class MateriaCategoryUncheckedCreateWithoutNextInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "lastId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_unchecked_create_nested_many_without_category_input_1.MaterialUncheckedCreateNestedManyWithoutCategoryInput, { nullable: true })
], MateriaCategoryUncheckedCreateWithoutNextInput.prototype, "materials", void 0);
MateriaCategoryUncheckedCreateWithoutNextInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUncheckedCreateWithoutNextInput);
exports.MateriaCategoryUncheckedCreateWithoutNextInput = MateriaCategoryUncheckedCreateWithoutNextInput;
//# sourceMappingURL=materia-category-unchecked-create-without-next.input.js.map