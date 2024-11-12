import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyRecipesInput } from "../../user/inputs/UserCreateWithoutMyRecipesInput.input";
import { UserUpdateWithoutMyRecipesInput } from "../../user/inputs/UserUpdateWithoutMyRecipesInput.input";

@NestJsGraphQL.InputType('UserUpsertWithoutMyRecipesInput', { isAbstract: true })
export class UserUpsertWithoutMyRecipesInput {
  @NestJsGraphQL.Field(() => UserUpdateWithoutMyRecipesInput)
  update!: UserUpdateWithoutMyRecipesInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyRecipesInput)
  create!: UserCreateWithoutMyRecipesInput;
}
