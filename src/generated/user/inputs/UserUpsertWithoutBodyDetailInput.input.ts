import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutBodyDetailInput } from "../../user/inputs/UserCreateWithoutBodyDetailInput.input";
import { UserUpdateWithoutBodyDetailInput } from "../../user/inputs/UserUpdateWithoutBodyDetailInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutBodyDetailInput', { isAbstract: true })
export class UserUpsertWithoutBodyDetailInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutBodyDetailInput)
  update!: UserUpdateWithoutBodyDetailInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutBodyDetailInput)
  create!: UserCreateWithoutBodyDetailInput;
}
