import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyMealPlansInput } from "../../user/inputs/UserCreateWithoutMyMealPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutMyMealPlansInput', { isAbstract: true })
export class UserCreateOrConnectWithoutMyMealPlansInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealPlansInput)
  create!: UserCreateWithoutMyMealPlansInput;
}
