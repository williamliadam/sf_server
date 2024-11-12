import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutRecipeInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateOrConnectWithoutRecipeInput', { isAbstract: true })
export class DishTemplateCreateOrConnectWithoutRecipeInput {
  @NestJsGraphQL.Field(() => DishTemplateWhereUniqueInput)
  where!: DishTemplateWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateWithoutRecipeInput)
  create!: DishTemplateCreateWithoutRecipeInput;
}
