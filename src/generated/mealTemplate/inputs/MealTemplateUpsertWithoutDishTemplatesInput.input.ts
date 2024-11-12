import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutDishTemplatesInput.input";
import { MealTemplateUpdateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateUpdateWithoutDishTemplatesInput.input";

@NestJsGraphQL.InputType('MealTemplateUpsertWithoutDishTemplatesInput', { isAbstract: true })
export class MealTemplateUpsertWithoutDishTemplatesInput {
  @NestJsGraphQL.Field(() => MealTemplateUpdateWithoutDishTemplatesInput)
  update!: MealTemplateUpdateWithoutDishTemplatesInput;

  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutDishTemplatesInput)
  create!: MealTemplateCreateWithoutDishTemplatesInput;
}
