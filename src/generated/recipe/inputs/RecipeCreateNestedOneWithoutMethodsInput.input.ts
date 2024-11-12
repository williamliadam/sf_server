import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutMethodsInput.input";
import { RecipeCreateWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateWithoutMethodsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeCreateNestedOneWithoutMethodsInput', { isAbstract: true })
export class RecipeCreateNestedOneWithoutMethodsInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutMethodsInput, { nullable: true })
  create?: RecipeCreateWithoutMethodsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutMethodsInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;
}
