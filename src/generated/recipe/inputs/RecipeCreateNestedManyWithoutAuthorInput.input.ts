import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateManyAuthorInputEnvelope } from "../../recipe/inputs/RecipeCreateManyAuthorInputEnvelope.input";
import { RecipeCreateOrConnectWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutAuthorInput.input";
import { RecipeCreateWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateWithoutAuthorInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateNestedManyWithoutAuthorInput', { isAbstract: true })
export class RecipeCreateNestedManyWithoutAuthorInput {
  @NestJsGraphQL.Field(() => [RecipeCreateWithoutAuthorInput], { nullable: true })
  create?: RecipeCreateWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: RecipeCreateManyAuthorInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereUniqueInput], { nullable: true })
  connect?: RecipeWhereUniqueInput[] | undefined;
}
