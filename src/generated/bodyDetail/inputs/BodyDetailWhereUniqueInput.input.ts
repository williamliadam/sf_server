import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('BodyDetailWhereUniqueInput', { isAbstract: true })
export class BodyDetailWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  userId?: number | undefined;
}
