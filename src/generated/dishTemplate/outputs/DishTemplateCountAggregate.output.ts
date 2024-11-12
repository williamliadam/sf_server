import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('DishTemplateCountAggregate', { isAbstract: true })
export class DishTemplateCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  recipeId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  mealTemplateId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
