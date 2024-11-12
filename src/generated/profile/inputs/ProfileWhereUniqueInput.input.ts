import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('ProfileWhereUniqueInput', { isAbstract: true })
export class ProfileWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId?: number | undefined;
}
