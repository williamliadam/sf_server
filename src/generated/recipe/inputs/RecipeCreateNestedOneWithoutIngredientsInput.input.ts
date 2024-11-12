import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutIngredientsInput.input";
import { RecipeCreateWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateWithoutIngredientsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateNestedOneWithoutIngredientsInput', { isAbstract: true })
export class RecipeCreateNestedOneWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutIngredientsInput, { nullable: true })
  create?: RecipeCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;
}
