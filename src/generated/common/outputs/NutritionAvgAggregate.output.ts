import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('NutritionAvgAggregate', { isAbstract: true })
export class NutritionAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;
}
