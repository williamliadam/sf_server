import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";
import { MealTemplateUpdateWithoutCreateByInput } from "./MealTemplateUpdateWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateWithWhereUniqueWithoutCreateByInput', { isAbstract: true })
export class MealTemplateUpdateWithWhereUniqueWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput)
  where!: MealTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealTemplateUpdateWithoutCreateByInput)
  data!: MealTemplateUpdateWithoutCreateByInput;
}
