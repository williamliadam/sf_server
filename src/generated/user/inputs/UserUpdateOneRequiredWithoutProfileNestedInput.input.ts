import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutProfileInput } from "../../user/inputs/UserCreateOrConnectWithoutProfileInput.input";
import { UserCreateWithoutProfileInput } from "../../user/inputs/UserCreateWithoutProfileInput.input";
import { UserUpdateWithoutProfileInput } from "../../user/inputs/UserUpdateWithoutProfileInput.input";
import { UserUpsertWithoutProfileInput } from "../../user/inputs/UserUpsertWithoutProfileInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutProfileNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutProfileNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutProfileInput, { nullable: true })
  create?: UserCreateWithoutProfileInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutProfileInput, { nullable: true })
  upsert?: UserUpsertWithoutProfileInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutProfileInput, { nullable: true })
  update?: UserUpdateWithoutProfileInput | undefined;
}
