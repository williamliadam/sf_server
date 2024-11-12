import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { RecipeRelationFilter } from "../../recipe/inputs/RecipeRelationFilter.input";

@NestJsGraphQL.InputType('MethodWhereInput', { isAbstract: true })
export class MethodWhereInput {
  @NestJsGraphQL.Field(() => [MethodWhereInput], { nullable: true })
  AND?: MethodWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereInput], { nullable: true })
  OR?: MethodWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereInput], { nullable: true })
  NOT?: MethodWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  desc?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  recipeId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => RecipeRelationFilter, { nullable: true })
  usedRecipe?: RecipeRelationFilter | undefined;
}
