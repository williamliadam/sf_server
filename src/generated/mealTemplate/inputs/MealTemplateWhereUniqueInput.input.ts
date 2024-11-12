import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MealTemplateWhereUniqueInput', { isAbstract: true })
export class MealTemplateWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
