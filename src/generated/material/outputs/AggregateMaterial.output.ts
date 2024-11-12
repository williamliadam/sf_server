import * as NestJsGraphQL from "@nestjs/graphql";
import { MaterialAvgAggregate } from "./MaterialAvgAggregate.output";
import { MaterialCountAggregate } from "./MaterialCountAggregate.output";
import { MaterialMaxAggregate } from "./MaterialMaxAggregate.output";
import { MaterialMinAggregate } from "./MaterialMinAggregate.output";
import { MaterialSumAggregate } from "./MaterialSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateMaterial', { isAbstract: true })
export class AggregateMaterial {
  @NestJsGraphQL.Field(() => MaterialCountAggregate, { nullable: true })
  _count!: MaterialCountAggregate | null;

  @NestJsGraphQL.Field(() => MaterialAvgAggregate, { nullable: true })
  _avg!: MaterialAvgAggregate | null;

  @NestJsGraphQL.Field(() => MaterialSumAggregate, { nullable: true })
  _sum!: MaterialSumAggregate | null;

  @NestJsGraphQL.Field(() => MaterialMinAggregate, { nullable: true })
  _min!: MaterialMinAggregate | null;

  @NestJsGraphQL.Field(() => MaterialMaxAggregate, { nullable: true })
  _max!: MaterialMaxAggregate | null;
}
