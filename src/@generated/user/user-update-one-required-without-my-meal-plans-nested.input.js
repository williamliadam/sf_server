"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMyMealPlansNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_my_meal_plans_input_1 = require("./user-create-without-my-meal-plans.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_my_meal_plans_input_1 = require("./user-create-or-connect-without-my-meal-plans.input");
const user_upsert_without_my_meal_plans_input_1 = require("./user-upsert-without-my-meal-plans.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_my_meal_plans_input_1 = require("./user-update-to-one-with-where-without-my-meal-plans.input");
let UserUpdateOneRequiredWithoutMyMealPlansNestedInput = class UserUpdateOneRequiredWithoutMyMealPlansNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_my_meal_plans_input_1.UserCreateWithoutMyMealPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_my_meal_plans_input_1.UserCreateWithoutMyMealPlansInput)
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_my_meal_plans_input_1.UserCreateOrConnectWithoutMyMealPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_my_meal_plans_input_1.UserCreateOrConnectWithoutMyMealPlansInput)
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_my_meal_plans_input_1.UserUpsertWithoutMyMealPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_my_meal_plans_input_1.UserUpsertWithoutMyMealPlansInput)
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_my_meal_plans_input_1.UserUpdateToOneWithWhereWithoutMyMealPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_my_meal_plans_input_1.UserUpdateToOneWithWhereWithoutMyMealPlansInput)
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutMyMealPlansNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneRequiredWithoutMyMealPlansNestedInput);
exports.UserUpdateOneRequiredWithoutMyMealPlansNestedInput = UserUpdateOneRequiredWithoutMyMealPlansNestedInput;
//# sourceMappingURL=user-update-one-required-without-my-meal-plans-nested.input.js.map