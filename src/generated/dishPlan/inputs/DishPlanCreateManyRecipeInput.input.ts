import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('DishPlanCreateManyRecipeInput', { isAbstract: true })
export class DishPlanCreateManyRecipeInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  planCookerId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealPlanId?: number | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
