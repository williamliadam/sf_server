import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('RecipeCount', { isAbstract: true })
export class RecipeCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  ingredients!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  methods!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  usedDishPlans!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  usedDishTemplates!: number;
}
