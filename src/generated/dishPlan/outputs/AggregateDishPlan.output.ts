import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanAvgAggregate } from "./DishPlanAvgAggregate.output";
import { DishPlanCountAggregate } from "./DishPlanCountAggregate.output";
import { DishPlanMaxAggregate } from "./DishPlanMaxAggregate.output";
import { DishPlanMinAggregate } from "./DishPlanMinAggregate.output";
import { DishPlanSumAggregate } from "./DishPlanSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateDishPlan', { isAbstract: true })
export class AggregateDishPlan {
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
