"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutChargeDishPlansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_charge_dish_plans_input_1 = require("./user-update-without-charge-dish-plans.input");
const class_transformer_1 = require("class-transformer");
const user_create_without_charge_dish_plans_input_1 = require("./user-create-without-charge-dish-plans.input");
const user_where_input_1 = require("./user-where.input");
let UserUpsertWithoutChargeDishPlansInput = class UserUpsertWithoutChargeDishPlansInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_update_without_charge_dish_plans_input_1.UserUpdateWithoutChargeDishPlansInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_charge_dish_plans_input_1.UserUpdateWithoutChargeDishPlansInput)
], UserUpsertWithoutChargeDishPlansInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_charge_dish_plans_input_1.UserCreateWithoutChargeDishPlansInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_without_charge_dish_plans_input_1.UserCreateWithoutChargeDishPlansInput)
], UserUpsertWithoutChargeDishPlansInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput)
], UserUpsertWithoutChargeDishPlansInput.prototype, "where", void 0);
UserUpsertWithoutChargeDishPlansInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpsertWithoutChargeDishPlansInput);
exports.UserUpsertWithoutChargeDishPlansInput = UserUpsertWithoutChargeDishPlansInput;
//# sourceMappingURL=user-upsert-without-charge-dish-plans.input.js.map