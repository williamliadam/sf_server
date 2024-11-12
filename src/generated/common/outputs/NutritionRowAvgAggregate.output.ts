import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('NutritionRowAvgAggregate', { isAbstract: true })
export class NutritionRowAvgAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  nutirtionId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  percent!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Float, { nullable: true })
  belongToId!: number | null;
}
