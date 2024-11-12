import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateWithoutChargeDishPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutChargeDishPlansInput', { isAbstract: true })
export class UserCreateOrConnectWithoutChargeDishPlansInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutChargeDishPlansInput)
  create!: UserCreateWithoutChargeDishPlansInput;
}
