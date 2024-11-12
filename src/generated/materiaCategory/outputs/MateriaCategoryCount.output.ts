import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MateriaCategoryCount', { isAbstract: true })
export class MateriaCategoryCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materials!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  next!: number;
}
