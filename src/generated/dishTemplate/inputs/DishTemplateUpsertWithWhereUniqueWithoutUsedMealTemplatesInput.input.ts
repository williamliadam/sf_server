import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutUsedMealTemplatesInput.input";
import { DishTemplateUpdateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithoutUsedMealTemplatesInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateWithoutUsedMealTemplatesInput)
  update!: DishTemplateUpdateWithoutUsedMealTemplatesInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateWithoutUsedMealTemplatesInput)
  create!: DishTemplateCreateWithoutUsedMealTemplatesInput;
}
