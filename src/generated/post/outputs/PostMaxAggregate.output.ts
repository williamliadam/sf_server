import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('PostMaxAggregate', { isAbstract: true })
export class PostMaxAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id!: number | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content!: string | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published!: boolean | null;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  authorId!: number | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;
}
