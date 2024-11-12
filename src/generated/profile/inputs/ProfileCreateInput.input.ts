import * as NestJsGraphQL from "@nestjs/graphql";
import { Goal } from "../../enums/Goal.enum";
import { UserCreateNestedOneWithoutProfileInput } from "../../user/inputs/UserCreateNestedOneWithoutProfileInput.input";

@NestJsGraphQL.InputType('ProfileCreateInput', { isAbstract: true })
export class ProfileCreateInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  avatar?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  nickName?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Goal, { nullable: true })
  goal?: "KEEP" | "BULKING" | "SLIMING" | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutProfileInput)
  user!: UserCreateNestedOneWithoutProfileInput;
}
