import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateWithoutMyMealTemplatesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateOrConnectWithoutMyMealTemplatesInput', { isAbstract: true })
export class UserCreateOrConnectWithoutMyMealTemplatesInput {
  @NestJsGraphQL.Field(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealTemplatesInput)
  create!: UserCreateWithoutMyMealTemplatesInput;
}
