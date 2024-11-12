import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyPostsInput } from "../../user/inputs/UserCreateWithoutMyPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutMyPostsInput', { isAbstract: true })
export class UserCreateOrConnectWithoutMyPostsInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyPostsInput)
  create!: UserCreateWithoutMyPostsInput;
}
