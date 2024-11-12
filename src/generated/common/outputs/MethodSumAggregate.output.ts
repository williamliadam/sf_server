import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MethodSumAggregate', { isAbstract: true })
export class MethodSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  recipeId!: number | null;
}
