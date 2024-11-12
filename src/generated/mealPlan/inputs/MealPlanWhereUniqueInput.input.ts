import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MealPlanWhereUniqueInput', { isAbstract: true })
export class MealPlanWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
