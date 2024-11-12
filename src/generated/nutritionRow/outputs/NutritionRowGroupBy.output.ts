import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowAvgAggregate } from "./NutritionRowAvgAggregate.output";
import { NutritionRowCountAggregate } from "./NutritionRowCountAggregate.output";
import { NutritionRowMaxAggregate } from "./NutritionRowMaxAggregate.output";
import { NutritionRowMinAggregate } from "./NutritionRowMinAggregate.output";
import { NutritionRowSumAggregate } from "./NutritionRowSumAggregate.output";

@NestJsGraphQL.ObjectType('NutritionRowGroupBy', { isAbstract: true })
export class NutritionRowGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nutirtionId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  belongToId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => NutritionRowCountAggregate, { nullable: true })
  _count!: NutritionRowCountAggregate | null;

  @NestJsGraphQL.Field(() => NutritionRowAvgAggregate, { nullable: true })
  _avg!: NutritionRowAvgAggregate | null;

  @NestJsGraphQL.Field(() => NutritionRowSumAggregate, { nullable: true })
  _sum!: NutritionRowSumAggregate | null;

  @NestJsGraphQL.Field(() => NutritionRowMinAggregate, { nullable: true })
  _min!: NutritionRowMinAggregate | null;

  @NestJsGraphQL.Field(() => NutritionRowMaxAggregate, { nullable: true })
  _max!: NutritionRowMaxAggregate | null;
}
