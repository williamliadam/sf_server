import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutBodyDetailInput } from "../../user/inputs/UserCreateWithoutBodyDetailInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutBodyDetailInput', { isAbstract: true })
export class UserCreateOrConnectWithoutBodyDetailInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutBodyDetailInput)
  create!: UserCreateWithoutBodyDetailInput;
}
