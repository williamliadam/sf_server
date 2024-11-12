import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";
import { ProfileAvgAggregate } from "./ProfileAvgAggregate.output";
import { ProfileCountAggregate } from "./ProfileCountAggregate.output";
import { ProfileMaxAggregate } from "./ProfileMaxAggregate.output";
import { ProfileMinAggregate } from "./ProfileMinAggregate.output";
import { ProfileSumAggregate } from "./ProfileSumAggregate.output";

@NestJsGraphQL.ObjectType('ProfileGroupBy', { isAbstract: true })
export class ProfileGroupBy {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  avatar!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  nickName!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => Goal)
  goal!: "KEEP" | "BULKING" | "SLIMING";

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
