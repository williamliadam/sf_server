import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateOrConnectWithoutChargeDishPlansInput.input";
import { UserCreateWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateWithoutChargeDishPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutChargeDishPlansInput', { isAbstract: true })
export class UserCreateNestedOneWithoutChargeDishPlansInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutChargeDishPlansInput, { nullable: true })
  create?: UserCreateWithoutChargeDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutChargeDishPlansInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
