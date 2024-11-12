import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('DishTemplateMaxAggregate', { isAbstract: true })
export class DishTemplateMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  recipeId!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  amount!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealTemplateId!: number | null;
}
