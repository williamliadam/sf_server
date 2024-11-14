"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionUpdateToOneWithWhereWithoutUsedRowInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_where_input_1 = require("./nutrition-where.input");
const class_transformer_1 = require("class-transformer");
const nutrition_update_without_used_row_input_1 = require("./nutrition-update-without-used-row.input");
let NutritionUpdateToOneWithWhereWithoutUsedRowInput = class NutritionUpdateToOneWithWhereWithoutUsedRowInput {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_input_1.NutritionWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_input_1.NutritionWhereInput)
], NutritionUpdateToOneWithWhereWithoutUsedRowInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_update_without_used_row_input_1.NutritionUpdateWithoutUsedRowInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => nutrition_update_without_used_row_input_1.NutritionUpdateWithoutUsedRowInput)
], NutritionUpdateToOneWithWhereWithoutUsedRowInput.prototype, "data", void 0);
NutritionUpdateToOneWithWhereWithoutUsedRowInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionUpdateToOneWithWhereWithoutUsedRowInput);
exports.NutritionUpdateToOneWithWhereWithoutUsedRowInput = NutritionUpdateToOneWithWhereWithoutUsedRowInput;
//# sourceMappingURL=nutrition-update-to-one-with-where-without-used-row.input.js.map