import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateOrConnectWithoutDishTemplatesInput.input";
import { MealTemplateCreateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutDishTemplatesInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateNestedOneWithoutDishTemplatesInput', { isAbstract: true })
export class MealTemplateCreateNestedOneWithoutDishTemplatesInput {
  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutDishTemplatesInput, { nullable: true })
  create?: MealTemplateCreateWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput, { nullable: true })
  connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput, { nullable: true })
  connect?: MealTemplateWhereUniqueInput | undefined;
}
