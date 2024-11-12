import * as NestJsGraphQL from "@nestjs/graphql";
import { User } from "../models/user.model";

@NestJsGraphQL.ObjectType('BodyDetail', { isAbstract: true })
export class BodyDetail {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  weight?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  height?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  age?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmi?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmr?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  tdee?: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  userId!: number;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  user?: User;
}
