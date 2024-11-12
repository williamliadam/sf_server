import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutProfileInput } from "../../user/inputs/UserCreateWithoutProfileInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutProfileInput', { isAbstract: true })
export class UserCreateOrConnectWithoutProfileInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutProfileInput)
  create!: UserCreateWithoutProfileInput;
}
