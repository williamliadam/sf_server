import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutChargeDishPlansInput } from "../../user/inputs/UserCreateWithoutChargeDishPlansInput.input";
import { UserUpdateWithoutChargeDishPlansInput } from "../../user/inputs/UserUpdateWithoutChargeDishPlansInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutChargeDishPlansInput', { isAbstract: true })
export class UserUpsertWithoutChargeDishPlansInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutChargeDishPlansInput)
  update!: UserUpdateWithoutChargeDishPlansInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutChargeDishPlansInput)
  create!: UserCreateWithoutChargeDishPlansInput;
}
