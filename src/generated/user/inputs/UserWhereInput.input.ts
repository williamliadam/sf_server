import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailRelationFilter } from "../../bodyDetail/inputs/BodyDetailRelationFilter.input";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { EnumRoleFilter } from "../../common/inputs/EnumRoleFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { DishPlanListRelationFilter } from "../../dishPlan/inputs/DishPlanListRelationFilter.input";
import { MealPlanListRelationFilter } from "../../mealPlan/inputs/MealPlanListRelationFilter.input";
import { MealTemplateListRelationFilter } from "../../mealTemplate/inputs/MealTemplateListRelationFilter.input";
import { PostListRelationFilter } from "../../post/inputs/PostListRelationFilter.input";
import { ProfileRelationFilter } from "../../profile/inputs/ProfileRelationFilter.input";
import { RecipeListRelationFilter } from "../../recipe/inputs/RecipeListRelationFilter.input";

@NestJsGraphQL.InputType('UserWhereInput', { isAbstract: true })
export class UserWhereInput {
  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  AND?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  OR?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UserWhereInput], { nullable: true })
  NOT?: UserWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  email?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  password?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  phone?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  wxId?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter | undefined;

  @NestJsGraphQL.Field(() => ProfileRelationFilter, { nullable: true })
  profile?: ProfileRelationFilter | undefined;

  @NestJsGraphQL.Field(() => BodyDetailRelationFilter, { nullable: true })
  bodyDetail?: BodyDetailRelationFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  myPosts?: PostListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => RecipeListRelationFilter, { nullable: true })
  myRecipes?: RecipeListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MealTemplateListRelationFilter, { nullable: true })
  myMealTemplates?: MealTemplateListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MealPlanListRelationFilter, { nullable: true })
  myMealPlans?: MealPlanListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DishPlanListRelationFilter, { nullable: true })
  chargeDishPlans?: DishPlanListRelationFilter | undefined;
}
