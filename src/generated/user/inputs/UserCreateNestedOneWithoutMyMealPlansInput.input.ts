import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyMealPlansInput } from "../../user/inputs/UserCreateOrConnectWithoutMyMealPlansInput.input";
import { UserCreateWithoutMyMealPlansInput } from "../../user/inputs/UserCreateWithoutMyMealPlansInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutMyMealPlansInput', { isAbstract: true })
export class UserCreateNestedOneWithoutMyMealPlansInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealPlansInput, { nullable: true })
  create?: UserCreateWithoutMyMealPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyMealPlansInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyMealPlansInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
