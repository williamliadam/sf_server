import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateOrConnectWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateOrConnectWithoutMethodsInput.input";
import { RecipeCreateWithoutMethodsInput } from "../../recipe/inputs/RecipeCreateWithoutMethodsInput.input";
import { RecipeUpdateWithoutMethodsInput } from "../../recipe/inputs/RecipeUpdateWithoutMethodsInput.input";
import { RecipeUpsertWithoutMethodsInput } from "../../recipe/inputs/RecipeUpsertWithoutMethodsInput.input";
import { RecipeWhereUniqueInput } from "../../recipe/inputs/RecipeWhereUniqueInput.input";

@NestJsGraphQL.InputType('RecipeUpdateOneWithoutMethodsNestedInput', { isAbstract: true })
export class RecipeUpdateOneWithoutMethodsNestedInput {
  @NestJsGraphQL.Field(() => RecipeCreateWithoutMethodsInput, { nullable: true })
  create?: RecipeCreateWithoutMethodsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateOrConnectWithoutMethodsInput, { nullable: true })
  connectOrCreate?: RecipeCreateOrConnectWithoutMethodsInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpsertWithoutMethodsInput, { nullable: true })
  upsert?: RecipeUpsertWithoutMethodsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereUniqueInput, { nullable: true })
  connect?: RecipeWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => RecipeUpdateWithoutMethodsInput, { nullable: true })
  update?: RecipeUpdateWithoutMethodsInput | undefined;
}
