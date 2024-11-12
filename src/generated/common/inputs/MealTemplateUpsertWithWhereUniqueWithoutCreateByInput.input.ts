import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutCreateByInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";
import { MealTemplateUpdateWithoutCreateByInput } from "./MealTemplateUpdateWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealTemplateUpsertWithWhereUniqueWithoutCreateByInput', { isAbstract: true })
export class MealTemplateUpsertWithWhereUniqueWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealTemplateUpdateWithoutCreateByInput)
  update!: MealTemplateUpdateWithoutCreateByInput;

  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutCreateByInput)
  create!: MealTemplateCreateWithoutCreateByInput;
}
