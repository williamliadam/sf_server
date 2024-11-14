"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutChargeDishPlansNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_charge_dish_plans_input_1 = require("./user-create-without-charge-dish-plans.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_charge_dish_plans_input_1 = require("./user-create-or-connect-without-charge-dish-plans.input");
const user_upsert_without_charge_dish_plans_input_1 = require("./user-upsert-without-charge-dish-plans.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_charge_dish_plans_input_1 = require("./user-update-to-one-with-where-without-charge-dish-plans.input");
let UserUpdateOneRequiredWithoutChargeDishPlansNestedInput = class UserUpdateOneRequiredWithoutChargeDishPlansNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_charge_dish_plans_input_1.UserCreateWithoutChargeDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_charge_dish_plans_input_1.UserCreateWithoutChargeDishPlansInput)
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_charge_dish_plans_input_1.UserCreateOrConnectWithoutChargeDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_charge_dish_plans_input_1.UserCreateOrConnectWithoutChargeDishPlansInput)
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_charge_dish_plans_input_1.UserUpsertWithoutChargeDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_charge_dish_plans_input_1.UserUpsertWithoutChargeDishPlansInput)
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_charge_dish_plans_input_1.UserUpdateToOneWithWhereWithoutChargeDishPlansInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_charge_dish_plans_input_1.UserUpdateToOneWithWhereWithoutChargeDishPlansInput)
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutChargeDishPlansNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneRequiredWithoutChargeDishPlansNestedInput);
exports.UserUpdateOneRequiredWithoutChargeDishPlansNestedInput = UserUpdateOneRequiredWithoutChargeDishPlansNestedInput;
//# sourceMappingURL=user-update-one-required-without-charge-dish-plans-nested.input.js.map