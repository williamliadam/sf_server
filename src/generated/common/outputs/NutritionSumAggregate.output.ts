import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('NutritionSumAggregate', { isAbstract: true })
export class NutritionSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;
}
