import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MateriaCategoryAvgAggregate', { isAbstract: true })
export class MateriaCategoryAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  lastId!: number | null;
}
