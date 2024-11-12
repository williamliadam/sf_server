import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { DateTimeNullableFilter } from "../../common/inputs/DateTimeNullableFilter.input";
import { EnumMealTypeFilter } from "../../common/inputs/EnumMealTypeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";

@NestJsGraphQL.InputType('MealPlanScalarWhereInput', { isAbstract: true })
export class MealPlanScalarWhereInput {
  @NestJsGraphQL.Field(() => [MealPlanScalarWhereInput], { nullable: true })
  AND?: MealPlanScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarWhereInput], { nullable: true })
  OR?: MealPlanScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarWhereInput], { nullable: true })
  NOT?: MealPlanScalarWhereInput[] | undefined;

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
}
