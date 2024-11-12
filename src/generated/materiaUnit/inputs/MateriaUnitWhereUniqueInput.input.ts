import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MateriaUnitWhereUniqueInput', { isAbstract: true })
export class MateriaUnitWhereUniqueInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code?: string | undefined;
}
