import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUsedRecipeInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyUsedRecipeInputEnvelope.input";
import { IngredientCreateOrConnectWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutUsedRecipeInput.input";
import { IngredientCreateWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateWithoutUsedRecipeInput.input";
import { IngredientScalarWhereInput } from "../../ingredient/inputs/IngredientScalarWhereInput.input";
import { IngredientUpdateManyWithWhereWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientUpdateManyWithWhereWithoutUsedRecipeInput.input";
import { IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput.input";
import { IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput } from "../../ingredient/inputs/IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateManyWithoutUsedRecipeNestedInput', { isAbstract: true })
export class IngredientUpdateManyWithoutUsedRecipeNestedInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutUsedRecipeInput], { nullable: true })
  create?: IngredientCreateWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutUsedRecipeInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput], { nullable: true })
  upsert?: IngredientUpsertWithWhereUniqueWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyUsedRecipeInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyUsedRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  set?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  disconnect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  delete?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput], { nullable: true })
  update?: IngredientUpdateWithWhereUniqueWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateManyWithWhereWithoutUsedRecipeInput], { nullable: true })
  updateMany?: IngredientUpdateManyWithWhereWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  deleteMany?: IngredientScalarWhereInput[] | undefined;
}
