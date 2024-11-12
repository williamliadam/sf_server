import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('BodyDetailCreateWithoutUserInput', { isAbstract: true })
export class BodyDetailCreateWithoutUserInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  weight?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  height?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  age?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmi?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  bmr?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  tdee?: number | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
