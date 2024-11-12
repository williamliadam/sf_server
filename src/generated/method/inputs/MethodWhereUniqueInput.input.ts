import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MethodWhereUniqueInput', { isAbstract: true })
export class MethodWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code?: string | undefined;
}
