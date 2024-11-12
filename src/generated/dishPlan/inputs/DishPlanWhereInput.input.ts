import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { MealPlanRelationFilter } from "../../mealPlan/inputs/MealPlanRelationFilter.input";
import { RecipeRelationFilter } from "../../recipe/inputs/RecipeRelationFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('DishPlanWhereInput', { isAbstract: true })
export class DishPlanWhereInput {
  @NestJsGraphQL.Field(() => [DishPlanWhereInput], { nullable: true })
  AND?: DishPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereInput], { nullable: true })
  OR?: DishPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanWhereInput], { nullable: true })
  NOT?: DishPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  recipeId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  amount?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  planCookerId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  mealPlanId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  planCooker?: UserRelationFilter | undefined;

  @NestJsGraphQL.Field(() => RecipeRelationFilter, { nullable: true })
  recipe?: RecipeRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MealPlanRelationFilter, { nullable: true })
  usedMealPlan?: MealPlanRelationFilter | undefined;
}
