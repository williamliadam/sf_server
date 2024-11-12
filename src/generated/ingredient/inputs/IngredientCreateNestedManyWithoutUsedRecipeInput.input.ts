import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUsedRecipeInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyUsedRecipeInputEnvelope.input";
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutUsedRecipeInput.input";
import { IngredientCreateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateWithoutUsedRecipeInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateNestedManyWithoutUsedRecipeInput', { isAbstract: true })
export class IngredientCreateNestedManyWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutUsedRecipeInput], { nullable: true })
  create?: IngredientCreateWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutUsedRecipeInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyUsedRecipeInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyUsedRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;
}
