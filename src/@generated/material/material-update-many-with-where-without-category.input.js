"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialUpdateManyWithWhereWithoutCategoryInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_scalar_where_input_1 = require("./material-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const material_update_many_mutation_input_1 = require("./material-update-many-mutation.input");
let MaterialUpdateManyWithWhereWithoutCategoryInput = class MaterialUpdateManyWithWhereWithoutCategoryInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_scalar_where_input_1.MaterialScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_scalar_where_input_1.MaterialScalarWhereInput)
], MaterialUpdateManyWithWhereWithoutCategoryInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_update_many_mutation_input_1.MaterialUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_update_many_mutation_input_1.MaterialUpdateManyMutationInput)
], MaterialUpdateManyWithWhereWithoutCategoryInput.prototype, "data", void 0);
MaterialUpdateManyWithWhereWithoutCategoryInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialUpdateManyWithWhereWithoutCategoryInput);
exports.MaterialUpdateManyWithWhereWithoutCategoryInput = MaterialUpdateManyWithWhereWithoutCategoryInput;
//# sourceMappingURL=material-update-many-with-where-without-category.input.js.map