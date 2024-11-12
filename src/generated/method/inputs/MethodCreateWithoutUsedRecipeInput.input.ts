import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MethodCreateWithoutUsedRecipeInput', { isAbstract: true })
export class MethodCreateWithoutUsedRecipeInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => String)
  desc!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
