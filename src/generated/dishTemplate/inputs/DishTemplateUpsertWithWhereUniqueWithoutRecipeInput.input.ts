import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutRecipeInput.input";
import { DishTemplateUpdateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithoutRecipeInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpsertWithWhereUniqueWithoutRecipeInput', { isAbstract: true })
export class DishTemplateUpsertWithWhereUniqueWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateWithoutRecipeInput)
  update!: DishTemplateUpdateWithoutRecipeInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateWithoutRecipeInput)
  create!: DishTemplateCreateWithoutRecipeInput;
}
