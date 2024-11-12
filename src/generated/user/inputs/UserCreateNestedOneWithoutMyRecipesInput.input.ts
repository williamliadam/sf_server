import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyRecipesInput } from "../../user/inputs/UserCreateOrConnectWithoutMyRecipesInput.input";
import { UserCreateWithoutMyRecipesInput } from "../../user/inputs/UserCreateWithoutMyRecipesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutMyRecipesInput', { isAbstract: true })
export class UserCreateNestedOneWithoutMyRecipesInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyRecipesInput, { nullable: true })
  create?: UserCreateWithoutMyRecipesInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyRecipesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
