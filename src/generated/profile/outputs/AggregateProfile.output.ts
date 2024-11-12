import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileAvgAggregate } from "./ProfileAvgAggregate.output";
import { ProfileCountAggregate } from "./ProfileCountAggregate.output";
import { ProfileMaxAggregate } from "./ProfileMaxAggregate.output";
import { ProfileMinAggregate } from "./ProfileMinAggregate.output";
import { ProfileSumAggregate } from "./ProfileSumAggregate.output";

@NestJsGraphQL.ObjectType('AggregateProfile', { isAbstract: true })
export class AggregateProfile {
  @NestJsGraphQL.Field(() => ProfileCountAggregate, { nullable: true })
  _count!: ProfileCountAggregate | null;

  @NestJsGraphQL.Field(() => ProfileAvgAggregate, { nullable: true })
  _avg!: ProfileAvgAggregate | null;

  @NestJsGraphQL.Field(() => ProfileSumAggregate, { nullable: true })
  _sum!: ProfileSumAggregate | null;

  @NestJsGraphQL.Field(() => ProfileMinAggregate, { nullable: true })
  _min!: ProfileMinAggregate | null;

  @NestJsGraphQL.Field(() => ProfileMaxAggregate, { nullable: true })
  _max!: ProfileMaxAggregate | null;
}
