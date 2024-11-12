import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateUpdateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithoutUsedMealTemplatesInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateWithoutUsedMealTemplatesInput)
  data!: DishTemplateUpdateWithoutUsedMealTemplatesInput;
}
