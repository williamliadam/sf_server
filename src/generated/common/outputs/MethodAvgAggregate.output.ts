import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MethodAvgAggregate', { isAbstract: true })
export class MethodAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  recipeId!: number | null;
}
