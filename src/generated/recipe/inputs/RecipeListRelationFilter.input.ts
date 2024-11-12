import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeWhereInput } from "../../recipe/inputs/RecipeWhereInput.input";

@NestJsGraphQL.InputType('RecipeListRelationFilter', { isAbstract: true })
export class RecipeListRelationFilter {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  every?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  some?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  none?: RecipeWhereInput | undefined;
}
