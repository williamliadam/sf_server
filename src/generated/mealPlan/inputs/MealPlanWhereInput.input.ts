import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { DateTimeNullableFilter } from "../../common/inputs/DateTimeNullableFilter.input";
import { EnumMealTypeFilter } from "../../common/inputs/EnumMealTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { DishPlanListRelationFilter } from "../../dishPlan/inputs/DishPlanListRelationFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('MealPlanWhereInput', { isAbstract: true })
export class MealPlanWhereInput {
  @NestJsGraphQL.Field(() => [MealPlanWhereInput], { nullable: true })
  AND?: MealPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereInput], { nullable: true })
  OR?: MealPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanWhereInput], { nullable: true })
  NOT?: MealPlanWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  planTime?: DateTimeNullableFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  userId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => EnumMealTypeFilter, { nullable: true })
  type?: EnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => DishPlanListRelationFilter, { nullable: true })
  dishPlans?: DishPlanListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  createBy?: UserRelationFilter | undefined;
}
