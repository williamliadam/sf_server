import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MealTemplateSumAggregate', { isAbstract: true })
export class MealTemplateSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId!: number | null;
}
