import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailAvgAggregate } from "./BodyDetailAvgAggregate.output";
import { BodyDetailCountAggregate } from "./BodyDetailCountAggregate.output";
import { BodyDetailMaxAggregate } from "./BodyDetailMaxAggregate.output";
import { BodyDetailMinAggregate } from "./BodyDetailMinAggregate.output";
import { BodyDetailSumAggregate } from "./BodyDetailSumAggregate.output";

@NestJsGraphQL.ObjectType('BodyDetailGroupBy', { isAbstract: true })
export class BodyDetailGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  weight!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  height!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  age!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmi!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmr!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  tdee!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

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
