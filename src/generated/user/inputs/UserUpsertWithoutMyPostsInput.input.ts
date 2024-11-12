import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyPostsInput } from "../../user/inputs/UserCreateWithoutMyPostsInput.input";
import { UserUpdateWithoutMyPostsInput } from "../../user/inputs/UserUpdateWithoutMyPostsInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutMyPostsInput', { isAbstract: true })
export class UserUpsertWithoutMyPostsInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutMyPostsInput)
  update!: UserUpdateWithoutMyPostsInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyPostsInput)
  create!: UserCreateWithoutMyPostsInput;
}
