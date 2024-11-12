import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateOrConnectWithoutChargeDishPlansInput.input";
import { UserCreateWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateWithoutChargeDishPlansInput.input";
import { UserUpdateWithoutChargeDishPlansInput } from "../../user/inputs/UserUpdateWithoutChargeDishPlansInput.input";
import { UserUpsertWithoutChargeDishPlansInput } from "../../user/inputs/UserUpsertWithoutChargeDishPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutChargeDishPlansNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutChargeDishPlansNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutChargeDishPlansInput, { nullable: true })
  create?: UserCreateWithoutChargeDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutChargeDishPlansInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutChargeDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutChargeDishPlansInput, { nullable: true })
  upsert?: UserUpsertWithoutChargeDishPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutChargeDishPlansInput, { nullable: true })
  update?: UserUpdateWithoutChargeDishPlansInput | undefined;
}
