import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";

@NestJsGraphQL.ObjectType('ProfileMinAggregate', { isAbstract: true })
export class ProfileMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  avatar!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  nickName!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => Goal, { nullable: true })
  goal!: "KEEP" | "BULKING" | "SLIMING" | null;
}
