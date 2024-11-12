import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('RecipeSumAggregate', { isAbstract: true })
export class RecipeSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  stars!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId!: number | null;
}
