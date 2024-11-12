import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeWhereInput } from "../../recipe/inputs/RecipeWhereInput.input";

@NestJsGraphQL.InputType('RecipeRelationFilter', { isAbstract: true })
export class RecipeRelationFilter {
  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  is?: RecipeWhereInput | undefined;

  @NestJsGraphQL.Field(() => RecipeWhereInput, { nullable: true })
  isNot?: RecipeWhereInput | undefined;
}
