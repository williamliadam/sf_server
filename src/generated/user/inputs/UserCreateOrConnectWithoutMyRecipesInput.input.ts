import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyRecipesInput } from "../../user/inputs/UserCreateWithoutMyRecipesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutMyRecipesInput', { isAbstract: true })
export class UserCreateOrConnectWithoutMyRecipesInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyRecipesInput)
  create!: UserCreateWithoutMyRecipesInput;
}
