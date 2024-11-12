import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailAvgAggregate } from "./BodyDetailAvgAggregate.output";
import { BodyDetailCountAggregate } from "./BodyDetailCountAggregate.output";
import { BodyDetailMaxAggregate } from "./BodyDetailMaxAggregate.output";
import { BodyDetailMinAggregate } from "./BodyDetailMinAggregate.output";
import { BodyDetailSumAggregate } from "./BodyDetailSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateBodyDetail', { isAbstract: true })
export class AggregateBodyDetail {
  @NestJsGraphQL.Field(() => BodyDetailCountAggregate, { nullable: true })
  _count!: BodyDetailCountAggregate | null;

  @NestJsGraphQL.Field(() => BodyDetailAvgAggregate, { nullable: true })
  _avg!: BodyDetailAvgAggregate | null;

  @NestJsGraphQL.Field(() => BodyDetailSumAggregate, { nullable: true })
  _sum!: BodyDetailSumAggregate | null;

  @NestJsGraphQL.Field(() => BodyDetailMinAggregate, { nullable: true })
  _min!: BodyDetailMinAggregate | null;

  @NestJsGraphQL.Field(() => BodyDetailMaxAggregate, { nullable: true })
  _max!: BodyDetailMaxAggregate | null;
}
