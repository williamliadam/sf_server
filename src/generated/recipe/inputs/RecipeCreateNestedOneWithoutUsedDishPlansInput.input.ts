import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutUsedDishPlansInput.input";
import { RecipeCreateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishPlansInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateNestedOneWithoutUsedDishPlansInput', { isAbstract: true })
export class RecipeCreateNestedOneWithoutUsedDishPlansInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishPlansInput, { nullable: true })
  create?: RecipeCreateWithoutUsedDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutUsedDishPlansInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;
}
