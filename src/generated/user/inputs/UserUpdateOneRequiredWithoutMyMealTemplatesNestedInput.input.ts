import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateOrConnectWithoutMyMealTemplatesInput.input";
import { UserCreateWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateWithoutMyMealTemplatesInput.input";
import { UserUpdateWithoutMyMealTemplatesInput } from "../../user/inputs/UserUpdateWithoutMyMealTemplatesInput.input";
import { UserUpsertWithoutMyMealTemplatesInput } from "../../user/inputs/UserUpsertWithoutMyMealTemplatesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutMyMealTemplatesNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealTemplatesInput, { nullable: true })
  create?: UserCreateWithoutMyMealTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyMealTemplatesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutMyMealTemplatesInput, { nullable: true })
  upsert?: UserUpsertWithoutMyMealTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutMyMealTemplatesInput, { nullable: true })
  update?: UserUpdateWithoutMyMealTemplatesInput | undefined;
}
