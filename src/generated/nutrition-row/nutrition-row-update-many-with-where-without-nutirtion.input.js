"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionRowUpdateManyWithWhereWithoutNutirtionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_row_scalar_where_input_1 = require("./nutrition-row-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_row_update_many_mutation_input_1 = require("./nutrition-row-update-many-mutation.input");
let NutritionRowUpdateManyWithWhereWithoutNutirtionInput = class NutritionRowUpdateManyWithWhereWithoutNutirtionInput {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_scalar_where_input_1.NutritionRowScalarWhereInput)
], NutritionRowUpdateManyWithWhereWithoutNutirtionInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_row_update_many_mutation_input_1.NutritionRowUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_row_update_many_mutation_input_1.NutritionRowUpdateManyMutationInput)
], NutritionRowUpdateManyWithWhereWithoutNutirtionInput.prototype, "data", void 0);
NutritionRowUpdateManyWithWhereWithoutNutirtionInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionRowUpdateManyWithWhereWithoutNutirtionInput);
exports.NutritionRowUpdateManyWithWhereWithoutNutirtionInput = NutritionRowUpdateManyWithWhereWithoutNutirtionInput;
//# sourceMappingURL=nutrition-row-update-many-with-where-without-nutirtion.input.js.map