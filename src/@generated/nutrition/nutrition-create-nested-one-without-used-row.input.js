"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionCreateNestedOneWithoutUsedRowInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nutrition_create_without_used_row_input_1 = require("./nutrition-create-without-used-row.input");
const class_transformer_1 = require("class-transformer");
const nutrition_create_or_connect_without_used_row_input_1 = require("./nutrition-create-or-connect-without-used-row.input");
const nutrition_where_unique_input_1 = require("./nutrition-where-unique.input");
let NutritionCreateNestedOneWithoutUsedRowInput = class NutritionCreateNestedOneWithoutUsedRowInput {
};
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_without_used_row_input_1.NutritionCreateWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_create_without_used_row_input_1.NutritionCreateWithoutUsedRowInput)
], NutritionCreateNestedOneWithoutUsedRowInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_create_or_connect_without_used_row_input_1.NutritionCreateOrConnectWithoutUsedRowInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_create_or_connect_without_used_row_input_1.NutritionCreateOrConnectWithoutUsedRowInput)
], NutritionCreateNestedOneWithoutUsedRowInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => nutrition_where_unique_input_1.NutritionWhereUniqueInput)
], NutritionCreateNestedOneWithoutUsedRowInput.prototype, "connect", void 0);
NutritionCreateNestedOneWithoutUsedRowInput = __decorate([
    (0, graphql_2.InputType)()
], NutritionCreateNestedOneWithoutUsedRowInput);
exports.NutritionCreateNestedOneWithoutUsedRowInput = NutritionCreateNestedOneWithoutUsedRowInput;
//# sourceMappingURL=nutrition-create-nested-one-without-used-row.input.js.map