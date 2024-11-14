"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishTemplateCreateNestedManyWithoutRecipeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const dish_template_create_without_recipe_input_1 = require("./dish-template-create-without-recipe.input");
const class_transformer_1 = require("class-transformer");
const dish_template_create_or_connect_without_recipe_input_1 = require("./dish-template-create-or-connect-without-recipe.input");
const dish_template_create_many_recipe_input_envelope_input_1 = require("./dish-template-create-many-recipe-input-envelope.input");
const dish_template_where_unique_input_1 = require("./dish-template-where-unique.input");
let DishTemplateCreateNestedManyWithoutRecipeInput = class DishTemplateCreateNestedManyWithoutRecipeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_without_recipe_input_1.DishTemplateCreateWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_without_recipe_input_1.DishTemplateCreateWithoutRecipeInput)
], DishTemplateCreateNestedManyWithoutRecipeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_create_or_connect_without_recipe_input_1.DishTemplateCreateOrConnectWithoutRecipeInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_or_connect_without_recipe_input_1.DishTemplateCreateOrConnectWithoutRecipeInput)
], DishTemplateCreateNestedManyWithoutRecipeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => dish_template_create_many_recipe_input_envelope_input_1.DishTemplateCreateManyRecipeInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_create_many_recipe_input_envelope_input_1.DishTemplateCreateManyRecipeInputEnvelope)
], DishTemplateCreateNestedManyWithoutRecipeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [dish_template_where_unique_input_1.DishTemplateWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => dish_template_where_unique_input_1.DishTemplateWhereUniqueInput)
], DishTemplateCreateNestedManyWithoutRecipeInput.prototype, "connect", void 0);
DishTemplateCreateNestedManyWithoutRecipeInput = __decorate([
    (0, graphql_2.InputType)()
], DishTemplateCreateNestedManyWithoutRecipeInput);
exports.DishTemplateCreateNestedManyWithoutRecipeInput = DishTemplateCreateNestedManyWithoutRecipeInput;
//# sourceMappingURL=dish-template-create-nested-many-without-recipe.input.js.map