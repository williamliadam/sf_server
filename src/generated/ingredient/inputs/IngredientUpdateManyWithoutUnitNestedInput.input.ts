import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUnitInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyUnitInputEnvelope.input";
import { IngredientCreateOrConnectWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutUnitInput.input";
import { IngredientCreateWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateWithoutUnitInput.input";
import { IngredientScalarWhereInput } from "../../ingredient/inputs/IngredientScalarWhereInput.input";
import { IngredientUpdateManyWithWhereWithoutUnitInput } from "../../ingredient/inputs/IngredientUpdateManyWithWhereWithoutUnitInput.input";
import { IngredientUpdateWithWhereUniqueWithoutUnitInput } from "../../ingredient/inputs/IngredientUpdateWithWhereUniqueWithoutUnitInput.input";
import { IngredientUpsertWithWhereUniqueWithoutUnitInput } from "../../ingredient/inputs/IngredientUpsertWithWhereUniqueWithoutUnitInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientUpdateManyWithoutUnitNestedInput', { isAbstract: true })
export class IngredientUpdateManyWithoutUnitNestedInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutUnitInput], { nullable: true })
  create?: IngredientCreateWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutUnitInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpsertWithWhereUniqueWithoutUnitInput], { nullable: true })
  upsert?: IngredientUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyUnitInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyUnitInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  set?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  disconnect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  delete?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateWithWhereUniqueWithoutUnitInput], { nullable: true })
  update?: IngredientUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientUpdateManyWithWhereWithoutUnitInput], { nullable: true })
  updateMany?: IngredientUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  deleteMany?: IngredientScalarWhereInput[] | undefined;
}
