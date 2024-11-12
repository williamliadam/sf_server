import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MaterialWhereUniqueInput', { isAbstract: true })
export class MaterialWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code?: string | undefined;
}
