import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateUpdateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithoutRecipeInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateWithWhereUniqueWithoutRecipeInput', { isAbstract: true })
export class DishTemplateUpdateWithWhereUniqueWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateUpdateWithoutRecipeInput)
  data!: DishTemplateUpdateWithoutRecipeInput;
}
