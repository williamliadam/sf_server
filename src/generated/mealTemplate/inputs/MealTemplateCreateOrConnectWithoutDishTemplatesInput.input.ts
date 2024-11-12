import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutDishTemplatesInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateOrConnectWithoutDishTemplatesInput', { isAbstract: true })
export class MealTemplateCreateOrConnectWithoutDishTemplatesInput {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutDishTemplatesInput)
  create!: MealTemplateCreateWithoutDishTemplatesInput;
}
