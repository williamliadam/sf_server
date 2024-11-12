import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyMealPlansInput } from "../../user/inputs/UserCreateOrConnectWithoutMyMealPlansInput.input";
import { UserCreateWithoutMyMealPlansInput } from "../../user/inputs/UserCreateWithoutMyMealPlansInput.input";
import { UserUpdateWithoutMyMealPlansInput } from "../../user/inputs/UserUpdateWithoutMyMealPlansInput.input";
import { UserUpsertWithoutMyMealPlansInput } from "../../user/inputs/UserUpsertWithoutMyMealPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutMyMealPlansNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutMyMealPlansNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealPlansInput, { nullable: true })
  create?: UserCreateWithoutMyMealPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyMealPlansInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutMyMealPlansInput, { nullable: true })
  upsert?: UserUpsertWithoutMyMealPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutMyMealPlansInput, { nullable: true })
  update?: UserUpdateWithoutMyMealPlansInput | undefined;
}
