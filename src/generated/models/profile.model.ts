import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../enums/Goal.enum";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('Profile', { isAbstract: true })
export class Profile {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  avatar?: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  nickName?: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => Goal)
  goal!: "KEEP" | "BULKING" | "SLIMING";

  user?: User;
}
