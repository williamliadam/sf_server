import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutProfileInput } from "../../user/inputs/UserCreateWithoutProfileInput.input";
import { UserUpdateWithoutProfileInput } from "../../user/inputs/UserUpdateWithoutProfileInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutProfileInput', { isAbstract: true })
export class UserUpsertWithoutProfileInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutProfileInput)
  update!: UserUpdateWithoutProfileInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutProfileInput)
  create!: UserCreateWithoutProfileInput;
}
