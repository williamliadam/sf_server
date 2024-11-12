import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('RecipeWhereUniqueInput', { isAbstract: true })
export class RecipeWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
