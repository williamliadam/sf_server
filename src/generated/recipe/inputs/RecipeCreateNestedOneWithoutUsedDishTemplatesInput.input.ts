import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutUsedDishTemplatesInput.input";
import { RecipeCreateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishTemplatesInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateNestedOneWithoutUsedDishTemplatesInput', { isAbstract: true })
export class RecipeCreateNestedOneWithoutUsedDishTemplatesInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishTemplatesInput, { nullable: true })
  create?: RecipeCreateWithoutUsedDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;
}
