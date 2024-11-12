import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateManyAuthorInputEnvelope } from "../../recipe/inputs/RecipeCreateManyAuthorInputEnvelope.input";
import { RecipeCreateOrConnectWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutAuthorInput.input";
import { RecipeCreateWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateWithoutAuthorInput.input";
import { RecipeScalarWhereInput } from "../../recipe/inputs/RecipeScalarWhereInput.input";
import { RecipeUpdateManyWithWhereWithoutAuthorInput } from "../../recipe/inputs/RecipeUpdateManyWithWhereWithoutAuthorInput.input";
import { RecipeUpdateWithWhereUniqueWithoutAuthorInput } from "../../recipe/inputs/RecipeUpdateWithWhereUniqueWithoutAuthorInput.input";
import { RecipeUpsertWithWhereUniqueWithoutAuthorInput } from "../../recipe/inputs/RecipeUpsertWithWhereUniqueWithoutAuthorInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateManyWithoutAuthorNestedInput', { isAbstract: true })
export class RecipeUpdateManyWithoutAuthorNestedInput {
  @NestJsGraphQL.Field(() => [RecipeCreateWithoutAuthorInput], { nullable: true })
  create?: RecipeCreateWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true })
  upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: RecipeCreateManyAuthorInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereUniqueInput], { nullable: true })
  set?: RecipeWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereUniqueInput], { nullable: true })
  disconnect?: RecipeWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereUniqueInput], { nullable: true })
  delete?: RecipeWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereUniqueInput], { nullable: true })
  connect?: RecipeWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true })
  update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeUpdateManyWithWhereWithoutAuthorInput], { nullable: true })
  updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarWhereInput], { nullable: true })
  deleteMany?: RecipeScalarWhereInput[] | undefined;
}
