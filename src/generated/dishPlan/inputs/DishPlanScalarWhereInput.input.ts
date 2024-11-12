import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";

@NestJsGraphQL.InputType('DishPlanScalarWhereInput', { isAbstract: true })
export class DishPlanScalarWhereInput {
  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  AND?: DishPlanScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  OR?: DishPlanScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarWhereInput], { nullable: true })
  NOT?: DishPlanScalarWhereInput[] | undefined;

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
}
