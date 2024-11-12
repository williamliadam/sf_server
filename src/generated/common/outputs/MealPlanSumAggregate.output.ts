import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MealPlanSumAggregate', { isAbstract: true })
export class MealPlanSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId!: number | null;
}
