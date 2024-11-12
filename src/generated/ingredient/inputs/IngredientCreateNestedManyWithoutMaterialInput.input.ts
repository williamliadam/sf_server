import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyMaterialInputEnvelope } from "../../ingredient/inputs/IngredientCreateManyMaterialInputEnvelope.input";
import { IngredientCreateOrConnectWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateOrConnectWithoutMaterialInput.input";
import { IngredientCreateWithoutMaterialInput } from "../../ingredient/inputs/IngredientCreateWithoutMaterialInput.input";
import { IngredientWhereUniqueInput } from "../../ingredient/inputs/IngredientWhereUniqueInput.input";

@NestJsGraphQL.InputType('IngredientCreateNestedManyWithoutMaterialInput', { isAbstract: true })
export class IngredientCreateNestedManyWithoutMaterialInput {
  @NestJsGraphQL.Field(() => [IngredientCreateWithoutMaterialInput], { nullable: true })
  create?: IngredientCreateWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientCreateOrConnectWithoutMaterialInput], { nullable: true })
  connectOrCreate?: IngredientCreateOrConnectWithoutMaterialInput[] | undefined;

  @NestJsGraphQL.Field(() => IngredientCreateManyMaterialInputEnvelope, { nullable: true })
  createMany?: IngredientCreateManyMaterialInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [IngredientWhereUniqueInput], { nullable: true })
  connect?: IngredientWhereUniqueInput[] | undefined;
}
