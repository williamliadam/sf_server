import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateOrConnectWithoutMyMealTemplatesInput.input";
import { UserCreateWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateWithoutMyMealTemplatesInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutMyMealTemplatesInput', { isAbstract: true })
export class UserCreateNestedOneWithoutMyMealTemplatesInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyMealTemplatesInput, { nullable: true })
  create?: UserCreateWithoutMyMealTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyMealTemplatesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyMealTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
