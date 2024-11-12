import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('IngredientWhereUniqueInput', { isAbstract: true })
export class IngredientWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
