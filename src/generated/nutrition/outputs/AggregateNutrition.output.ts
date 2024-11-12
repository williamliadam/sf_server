import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionAvgAggregate } from "./NutritionAvgAggregate.output";
import { NutritionCountAggregate } from "./NutritionCountAggregate.output";
import { NutritionMaxAggregate } from "./NutritionMaxAggregate.output";
import { NutritionMinAggregate } from "./NutritionMinAggregate.output";
import { NutritionSumAggregate } from "./NutritionSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateNutrition', { isAbstract: true })
export class AggregateNutrition {
  @NestJsGraphQL.Field(() => NutritionCountAggregate, { nullable: true })
  _count!: NutritionCountAggregate | null;

  @NestJsGraphQL.Field(() => NutritionAvgAggregate, { nullable: true })
  _avg!: NutritionAvgAggregate | null;

  @NestJsGraphQL.Field(() => NutritionSumAggregate, { nullable: true })
  _sum!: NutritionSumAggregate | null;

  @NestJsGraphQL.Field(() => NutritionMinAggregate, { nullable: true })
  _min!: NutritionMinAggregate | null;

  @NestJsGraphQL.Field(() => NutritionMaxAggregate, { nullable: true })
  _max!: NutritionMaxAggregate | null;
}
