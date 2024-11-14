"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionUpdateOneRequiredWithoutUsedRowNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_create_without_used_row_input_1 = require("./nutrition-create-without-used-row.input");
const class_transformer_1 = require("class-transformer");
const nutrition_create_or_connect_without_used_row_input_1 = require("./nutrition-create-or-connect-without-used-row.input");
const nutrition_upsert_without_used_row_input_1 = require("./nutrition-upsert-without-used-row.input");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
const nutrition_update_to_one_with_where_without_used_row_input_1 = require("./nutrition-update-to-one-with-where-without-used-row.input");
let NutritionUpdateOneRequiredWithoutUsedRowNestedInput = class NutritionUpdateOneRequiredWithoutUsedRowNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_without_used_row_input_1.NutritionCreateWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_create_without_used_row_input_1.NutritionCreateWithoutUsedRowInput)
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_or_connect_without_used_row_input_1.NutritionCreateOrConnectWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_create_or_connect_without_used_row_input_1.NutritionCreateOrConnectWithoutUsedRowInput)
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_upsert_without_used_row_input_1.NutritionUpsertWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_upsert_without_used_row_input_1.NutritionUpsertWithoutUsedRowInput)
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput)
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_update_to_one_with_where_without_used_row_input_1.NutritionUpdateToOneWithWhereWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_update_to_one_with_where_without_used_row_input_1.NutritionUpdateToOneWithWhereWithoutUsedRowInput)
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput.prototype, "update", void 0);
NutritionUpdateOneRequiredWithoutUsedRowNestedInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionUpdateOneRequiredWithoutUsedRowNestedInput);
exports.NutritionUpdateOneRequiredWithoutUsedRowNestedInput = NutritionUpdateOneRequiredWithoutUsedRowNestedInput;
//# sourceMappingURL=nutrition-update-one-required-without-used-row-nested.input.js.map