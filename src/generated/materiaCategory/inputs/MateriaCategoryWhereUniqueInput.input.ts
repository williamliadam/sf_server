import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MateriaCategoryWhereUniqueInput', { isAbstract: true })
export class MateriaCategoryWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code?: string | undefined;
}
