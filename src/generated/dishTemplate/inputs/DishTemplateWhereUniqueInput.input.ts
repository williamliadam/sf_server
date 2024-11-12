import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('DishTemplateWhereUniqueInput', { isAbstract: true })
export class DishTemplateWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;
}
