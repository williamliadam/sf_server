import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateNestedOneWithoutBodyDetailInput } from "../../user/inputs/UserCreateNestedOneWithoutBodyDetailInput.input";

@NestJsGraphQL.InputType('BodyDetailCreateInput', { isAbstract: true })
export class BodyDetailCreateInput {
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

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutBodyDetailInput)
  user!: UserCreateNestedOneWithoutBodyDetailInput;
}
