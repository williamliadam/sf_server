import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyMaterialInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyMaterialInputEnvelope.input";
import { IngredientCreateOrConnectWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutMaterialInput.input";
import { IngredientCreateWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateWithoutMaterialInput.input";
import { IngredientScalarWhereInput } from "../../ingredient/inputs/IngredientScalarWhereInput.input";
import { IngredientUpdateManyWithWhereWithoutMaterialInput } from "../../ingredient/inputs/IngredientUpdateManyWithWhereWithoutMaterialInput.input";
import { IngredientUpdateWithWhereUniqueWithoutMaterialInput } from "../../ingredient/inputs/IngredientUpdateWithWhereUniqueWithoutMaterialInput.input";
import { IngredientUpsertWithWhereUniqueWithoutMaterialInput } from "../../ingredient/inputs/IngredientUpsertWithWhereUniqueWithoutMaterialInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateManyWithoutMaterialNestedInput', { isAbstract: true })
export class IngredientUpdateManyWithoutMaterialNestedInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutMaterialInput], { nullable: true })
  create?: IngredientCreateWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutMaterialInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpsertWithWhereUniqueWithoutMaterialInput], { nullable: true })
  upsert?: IngredientUpsertWithWhereUniqueWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyMaterialInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyMaterialInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  set?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  disconnect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  delete?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateWithWhereUniqueWithoutMaterialInput], { nullable: true })
  update?: IngredientUpdateWithWhereUniqueWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateManyWithWhereWithoutMaterialInput], { nullable: true })
  updateMany?: IngredientUpdateManyWithWhereWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  deleteMany?: IngredientScalarWhereInput[] | undefined;
}
