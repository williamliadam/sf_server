import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodAvgAggregate } from "./MethodAvgAggregate.output";
import { MethodCountAggregate } from "./MethodCountAggregate.output";
import { MethodMaxAggregate } from "./MethodMaxAggregate.output";
import { MethodMinAggregate } from "./MethodMinAggregate.output";
import { MethodSumAggregate } from "./MethodSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateMethod', { isAbstract: true })
export class AggregateMethod {
  @NestJsGraphQL.Field(() => MethodCountAggregate, { nullable: true })
  _count!: MethodCountAggregate | null;

  @NestJsGraphQL.Field(() => MethodAvgAggregate, { nullable: true })
  _avg!: MethodAvgAggregate | null;

  @NestJsGraphQL.Field(() => MethodSumAggregate, { nullable: true })
  _sum!: MethodSumAggregate | null;

  @NestJsGraphQL.Field(() => MethodMinAggregate, { nullable: true })
  _min!: MethodMinAggregate | null;

  @NestJsGraphQL.Field(() => MethodMaxAggregate, { nullable: true })
  _max!: MethodMaxAggregate | null;
}
