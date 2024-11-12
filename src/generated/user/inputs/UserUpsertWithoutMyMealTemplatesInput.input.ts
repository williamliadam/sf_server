import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateWithoutMyMealTemplatesInput.input";
import { UserUpdateWithoutMyMealTemplatesInput } from "../../user/inputs/UserUpdateWithoutMyMealTemplatesInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutMyMealTemplatesInput', { isAbstract: true })
export class UserUpsertWithoutMyMealTemplatesInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutMyMealTemplatesInput)
  update!: UserUpdateWithoutMyMealTemplatesInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealTemplatesInput)
  create!: UserCreateWithoutMyMealTemplatesInput;
}
