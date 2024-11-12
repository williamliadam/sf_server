import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MaterialMinAggregate', { isAbstract: true })
export class MaterialMinAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  code!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  nickName!: string | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  materiaCategoryId!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;
}
