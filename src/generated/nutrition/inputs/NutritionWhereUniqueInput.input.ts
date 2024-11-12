import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NutritionWhereUniqueInput', { isAbstract: true })
export class NutritionWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code?: string | undefined;
}
