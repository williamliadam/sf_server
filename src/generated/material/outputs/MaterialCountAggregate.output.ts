import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MaterialCountAggregate', { isAbstract: true })
export class MaterialCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  code!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nickName!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materiaCategoryId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
