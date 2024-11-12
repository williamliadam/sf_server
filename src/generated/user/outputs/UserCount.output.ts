import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UserCount', { isAbstract: true })
export class UserCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  myPosts!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  myRecipes!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  myMealTemplates!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  myMealPlans!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  chargeDishPlans!: number;
}
