import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanAvgAggregate } from "./DishPlanAvgAggregate.output";
import { DishPlanCountAggregate } from "./DishPlanCountAggregate.output";
import { DishPlanMaxAggregate } from "./DishPlanMaxAggregate.output";
import { DishPlanMinAggregate } from "./DishPlanMinAggregate.output";
import { DishPlanSumAggregate } from "./DishPlanSumAggregate.output";

@NestJsGraphQL.ObjectType('DishPlanGroupBy', { isAbstract: true })
export class DishPlanGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  recipeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  planCookerId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealPlanId!: number | null;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => DishPlanCountAggregate, { nullable: true })
  _count!: DishPlanCountAggregate | null;

  @NestJsGraphQL.Field(() => DishPlanAvgAggregate, { nullable: true })
  _avg!: DishPlanAvgAggregate | null;

  @NestJsGraphQL.Field(() => DishPlanSumAggregate, { nullable: true })
  _sum!: DishPlanSumAggregate | null;

  @NestJsGraphQL.Field(() => DishPlanMinAggregate, { nullable: true })
  _min!: DishPlanMinAggregate | null;

  @NestJsGraphQL.Field(() => DishPlanMaxAggregate, { nullable: true })
  _max!: DishPlanMaxAggregate | null;
}
