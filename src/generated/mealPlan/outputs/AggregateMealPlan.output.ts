import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanAvgAggregate } from "./MealPlanAvgAggregate.output";
import { MealPlanCountAggregate } from "./MealPlanCountAggregate.output";
import { MealPlanMaxAggregate } from "./MealPlanMaxAggregate.output";
import { MealPlanMinAggregate } from "./MealPlanMinAggregate.output";
import { MealPlanSumAggregate } from "./MealPlanSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateMealPlan', { isAbstract: true })
export class AggregateMealPlan {
  @NestJsGraphQL.Field(() => MealPlanCountAggregate, { nullable: true })
  _count!: MealPlanCountAggregate | null;

  @NestJsGraphQL.Field(() => MealPlanAvgAggregate, { nullable: true })
  _avg!: MealPlanAvgAggregate | null;

  @NestJsGraphQL.Field(() => MealPlanSumAggregate, { nullable: true })
  _sum!: MealPlanSumAggregate | null;

  @NestJsGraphQL.Field(() => MealPlanMinAggregate, { nullable: true })
  _min!: MealPlanMinAggregate | null;

  @NestJsGraphQL.Field(() => MealPlanMaxAggregate, { nullable: true })
  _max!: MealPlanMaxAggregate | null;
}
