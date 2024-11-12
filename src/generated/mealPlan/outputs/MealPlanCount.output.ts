import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MealPlanCount', { isAbstract: true })
export class MealPlanCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  dishPlans!: number;
}
