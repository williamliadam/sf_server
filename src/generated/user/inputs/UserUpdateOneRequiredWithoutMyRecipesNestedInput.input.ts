import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyRecipesInput } from "../../user/inputs/UserCreateOrConnectWithoutMyRecipesInput.input";
import { UserCreateWithoutMyRecipesInput } from "../../user/inputs/UserCreateWithoutMyRecipesInput.input";
import { UserUpdateWithoutMyRecipesInput } from "../../user/inputs/UserUpdateWithoutMyRecipesInput.input";
import { UserUpsertWithoutMyRecipesInput } from "../../user/inputs/UserUpsertWithoutMyRecipesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutMyRecipesNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutMyRecipesNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyRecipesInput, { nullable: true })
  create?: UserCreateWithoutMyRecipesInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyRecipesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyRecipesInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutMyRecipesInput, { nullable: true })
  upsert?: UserUpsertWithoutMyRecipesInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutMyRecipesInput, { nullable: true })
  update?: UserUpdateWithoutMyRecipesInput | undefined;
}
