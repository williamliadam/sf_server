import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutUsedDishTemplatesInput.input";
import { RecipeCreateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateWithoutUsedDishTemplatesInput.input";
import { RecipeUpdateWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeUpdateWithoutUsedDishTemplatesInput.input";
import { RecipeUpsertWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeUpsertWithoutUsedDishTemplatesInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput', { isAbstract: true })
export class RecipeUpdateOneRequiredWithoutUsedDishTemplatesNestedInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutUsedDishTemplatesInput, { nullable: true })
  create?: RecipeCreateWithoutUsedDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutUsedDishTemplatesInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutUsedDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpsertWithoutUsedDishTemplatesInput, { nullable: true })
  upsert?: RecipeUpsertWithoutUsedDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutUsedDishTemplatesInput, { nullable: true })
  update?: RecipeUpdateWithoutUsedDishTemplatesInput | undefined;
}
