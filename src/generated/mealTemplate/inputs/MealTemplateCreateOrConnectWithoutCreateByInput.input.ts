import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutCreateByInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateOrConnectWithoutCreateByInput', { isAbstract: true })
export class MealTemplateCreateOrConnectWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutCreateByInput)
  create!: MealTemplateCreateWithoutCreateByInput;
}
