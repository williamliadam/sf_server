import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutIngredientsInput.input";
import { RecipeCreateWithoutIngredientsInput } from "../../recipe/inputs/RecipeCreateWithoutIngredientsInput.input";
import { RecipeUpdateWithoutIngredientsInput } from "../../recipe/inputs/RecipeUpdateWithoutIngredientsInput.input";
import { RecipeUpsertWithoutIngredientsInput } from "../../recipe/inputs/RecipeUpsertWithoutIngredientsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateOneWithoutIngredientsNestedInput', { isAbstract: true })
export class RecipeUpdateOneWithoutIngredientsNestedInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutIngredientsInput, { nullable: true })
  create?: RecipeCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpsertWithoutIngredientsInput, { nullable: true })
  upsert?: RecipeUpsertWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutIngredientsInput, { nullable: true })
  update?: RecipeUpdateWithoutIngredientsInput | undefined;
}
