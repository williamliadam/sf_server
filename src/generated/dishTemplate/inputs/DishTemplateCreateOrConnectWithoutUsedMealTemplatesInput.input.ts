import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutUsedMealTemplatesInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateWithoutUsedMealTemplatesInput)
  create!: DishTemplateCreateWithoutUsedMealTemplatesInput;
}
