import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";
import { MealPlanAvgAggregate } from "./MealPlanAvgAggregate.output";
import { MealPlanCountAggregate } from "./MealPlanCountAggregate.output";
import { MealPlanMaxAggregate } from "./MealPlanMaxAggregate.output";
import { MealPlanMinAggregate } from "./MealPlanMinAggregate.output";
import { MealPlanSumAggregate } from "./MealPlanSumAggregate.output";

@NestJsGraphQL.ObjectType('MealPlanGroupBy', { isAbstract: true })
export class MealPlanGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  planTime!: Date | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => MealType)
  type!: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL";

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
