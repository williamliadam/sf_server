import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('ProfileSumAggregate', { isAbstract: true })
export class ProfileSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId!: number | null;
}
