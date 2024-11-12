import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('DishPlanWhereUniqueInput', { isAbstract: true })
export class DishPlanWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
