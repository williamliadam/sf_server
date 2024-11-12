import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('ProfileAvgAggregate', { isAbstract: true })
export class ProfileAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  userId!: number | null;
}
