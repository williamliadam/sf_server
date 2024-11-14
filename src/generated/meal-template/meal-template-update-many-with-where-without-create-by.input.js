"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTemplateUpdateManyWithWhereWithoutCreateByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const meal_template_scalar_where_input_1 = require("./meal-template-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const meal_template_update_many_mutation_input_1 = require("./meal-template-update-many-mutation.input");
let MealTemplateUpdateManyWithWhereWithoutCreateByInput = class MealTemplateUpdateManyWithWhereWithoutCreateByInput {
};
__decorate([
    (0, graphql_1.Field)(() => meal_template_scalar_where_input_1.MealTemplateScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_template_scalar_where_input_1.MealTemplateScalarWhereInput)
], MealTemplateUpdateManyWithWhereWithoutCreateByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => meal_template_update_many_mutation_input_1.MealTemplateUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => meal_template_update_many_mutation_input_1.MealTemplateUpdateManyMutationInput)
], MealTemplateUpdateManyWithWhereWithoutCreateByInput.prototype, "data", void 0);
MealTemplateUpdateManyWithWhereWithoutCreateByInput = __decorate([
    (0, graphql_2.InputType)()
], MealTemplateUpdateManyWithWhereWithoutCreateByInput);
exports.MealTemplateUpdateManyWithWhereWithoutCreateByInput = MealTemplateUpdateManyWithWhereWithoutCreateByInput;
//# sourceMappingURL=meal-template-update-many-with-where-without-create-by.input.js.map