import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUnitInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyUnitInputEnvelope.input";
import { IngredientCreateOrConnectWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutUnitInput.input";
import { IngredientCreateWithoutUnitInput } from "../../ingredient/inputs/IngredientCreateWithoutUnitInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateNestedManyWithoutUnitInput', { isAbstract: true })
export class IngredientCreateNestedManyWithoutUnitInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutUnitInput], { nullable: true })
  create?: IngredientCreateWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutUnitInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutUnitInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyUnitInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyUnitInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;
}
