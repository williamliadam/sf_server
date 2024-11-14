"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodUpdateManyWithWhereWithoutUsedRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const method_scalar_where_input_1 = require("./method-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const method_update_many_mutation_input_1 = require("./method-update-many-mutation.input");
let MethodUpdateManyWithWhereWithoutUsedRecipeInput = class MethodUpdateManyWithWhereWithoutUsedRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => method_scalar_where_input_1.MethodScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => method_scalar_where_input_1.MethodScalarWhereInput)
], MethodUpdateManyWithWhereWithoutUsedRecipeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => method_update_many_mutation_input_1.MethodUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => method_update_many_mutation_input_1.MethodUpdateManyMutationInput)
], MethodUpdateManyWithWhereWithoutUsedRecipeInput.prototype, "data", void 0);
MethodUpdateManyWithWhereWithoutUsedRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], MethodUpdateManyWithWhereWithoutUsedRecipeInput);
exports.MethodUpdateManyWithWhereWithoutUsedRecipeInput = MethodUpdateManyWithWhereWithoutUsedRecipeInput;
//# sourceMappingURL=method-update-many-with-where-without-used-recipe.input.js.map