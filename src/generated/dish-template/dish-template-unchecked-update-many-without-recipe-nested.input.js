"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_create_without_recipe_input_1 = require("./dish-template-create-without-recipe.input");
const class_transformer_1 = require("class-transformer");
const dish_template_create_or_connect_without_recipe_input_1 = require("./dish-template-create-or-connect-without-recipe.input");
const dish_template_upsert_with_where_unique_without_recipe_input_1 = require("./dish-template-upsert-with-where-unique-without-recipe.input");
const dish_template_create_many_recipe_input_envelope_input_1 = require("./dish-template-create-many-recipe-input-envelope.input");
const dish_template_where_unique_input_1 = require("./dish-template-where-unique.input");
const dish_template_update_with_where_unique_without_recipe_input_1 = require("./dish-template-update-with-where-unique-without-recipe.input");
const dish_template_update_many_with_where_without_recipe_input_1 = require("./dish-template-update-many-with-where-without-recipe.input");
const dish_template_scalar_where_input_1 = require("./dish-template-scalar-where.input");
let DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput = class DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_without_recipe_input_1.DishTemplateCreateWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_without_recipe_input_1.DishTemplateCreateWithoutRecipeInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_or_connect_without_recipe_input_1.DishTemplateCreateOrConnectWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_or_connect_without_recipe_input_1.DishTemplateCreateOrConnectWithoutRecipeInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_upsert_with_where_unique_without_recipe_input_1.DishTemplateUpsertWithWhereUniqueWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_upsert_with_where_unique_without_recipe_input_1.DishTemplateUpsertWithWhereUniqueWithoutRecipeInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_many_recipe_input_envelope_input_1.DishTemplateCreateManyRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_many_recipe_input_envelope_input_1.DishTemplateCreateManyRecipeInputEnvelope)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_update_with_where_unique_without_recipe_input_1.DishTemplateUpdateWithWhereUniqueWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_update_with_where_unique_without_recipe_input_1.DishTemplateUpdateWithWhereUniqueWithoutRecipeInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_update_many_with_where_without_recipe_input_1.DishTemplateUpdateManyWithWhereWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_update_many_with_where_without_recipe_input_1.DishTemplateUpdateManyWithWhereWithoutRecipeInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_scalar_where_input_1.DishTemplateScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_scalar_where_input_1.DishTemplateScalarWhereInput)
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput.prototype, "deleteMany", void 0);
DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput);
exports.DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput = DishTemplateUncheckedUpdateManyWithoutRecipeNestedInput;
//# sourceMappingURL=dish-template-unchecked-update-many-without-recipe-nested.input.js.map