import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateScalarWhereInput } from "../../mealTemplate/inputs/MealTemplateScalarWhereInput.input";
import { MealTemplateUpdateManyMutationInput } from "../../mealTemplate/inputs/MealTemplateUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateManyWithWhereWithoutCreateByInput', { isAbstract: true })
export class MealTemplateUpdateManyWithWhereWithoutCreateByInput {
  @NestJsGraphQL.Field(() => MealTemplateScalarWhereInput)
  where!: MealTemplateScalarWhereInput;

  @NestJsGraphQL.Field(() => MealTemplateUpdateManyMutationInput)
  data!: MealTemplateUpdateManyMutationInput;
}
