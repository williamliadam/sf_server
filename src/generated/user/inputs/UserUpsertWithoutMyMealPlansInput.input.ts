import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyMealPlansInput } from "../../user/inputs/UserCreateWithoutMyMealPlansInput.input";
import { UserUpdateWithoutMyMealPlansInput } from "../../user/inputs/UserUpdateWithoutMyMealPlansInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutMyMealPlansInput', { isAbstract: true })
export class UserUpsertWithoutMyMealPlansInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutMyMealPlansInput)
  update!: UserUpdateWithoutMyMealPlansInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealPlansInput)
  create!: UserCreateWithoutMyMealPlansInput;
}
