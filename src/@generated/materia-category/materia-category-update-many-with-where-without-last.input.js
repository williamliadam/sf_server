"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaCategoryUpdateManyWithWhereWithoutLastInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const materia_category_scalar_where_input_1 = require("./materia-category-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const materia_category_update_many_mutation_input_1 = require("./materia-category-update-many-mutation.input");
let MateriaCategoryUpdateManyWithWhereWithoutLastInput = class MateriaCategoryUpdateManyWithWhereWithoutLastInput {
};
__decorate([
    (0, graphql_1.Field)(() => materia_category_scalar_where_input_1.MateriaCategoryScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_scalar_where_input_1.MateriaCategoryScalarWhereInput)
], MateriaCategoryUpdateManyWithWhereWithoutLastInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => materia_category_update_many_mutation_input_1.MateriaCategoryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => materia_category_update_many_mutation_input_1.MateriaCategoryUpdateManyMutationInput)
], MateriaCategoryUpdateManyWithWhereWithoutLastInput.prototype, "data", void 0);
MateriaCategoryUpdateManyWithWhereWithoutLastInput = __decorate([
    (0, graphql_2.InputType)()
], MateriaCategoryUpdateManyWithWhereWithoutLastInput);
exports.MateriaCategoryUpdateManyWithWhereWithoutLastInput = MateriaCategoryUpdateManyWithWhereWithoutLastInput;
//# sourceMappingURL=materia-category-update-many-with-where-without-last.input.js.map