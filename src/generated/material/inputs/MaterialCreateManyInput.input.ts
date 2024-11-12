import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MaterialCreateManyInput', { isAbstract: true })
export class MaterialCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  nickName!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materiaCategoryId!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
