import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MaterialSumAggregate', { isAbstract: true })
export class MaterialSumAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  materiaCategoryId!: number | null;
}
