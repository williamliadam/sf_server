import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutUsedDishPlansInput.input";
import { RecipeCreateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishPlansInput.input";
import { RecipeUpdateWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeUpdateWithoutUsedDishPlansInput.input";
import { RecipeUpsertWithoutUsedDishPlansInput } from "../../recipe/inputs/RecipeUpsertWithoutUsedDishPlansInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput', { isAbstract: true })
export class RecipeUpdateOneRequiredWithoutUsedDishPlansNestedInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishPlansInput, { nullable: true })
  create?: RecipeCreateWithoutUsedDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutUsedDishPlansInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpsertWithoutUsedDishPlansInput, { nullable: true })
  upsert?: RecipeUpsertWithoutUsedDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutUsedDishPlansInput, { nullable: true })
  update?: RecipeUpdateWithoutUsedDishPlansInput | undefined;
}
