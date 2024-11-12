import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutBodyDetailInput } from "../../user/inputs/UserCreateOrConnectWithoutBodyDetailInput.input";
import { UserCreateWithoutBodyDetailInput } from "../../user/inputs/UserCreateWithoutBodyDetailInput.input";
import { UserUpdateWithoutBodyDetailInput } from "../../user/inputs/UserUpdateWithoutBodyDetailInput.input";
import { UserUpsertWithoutBodyDetailInput } from "../../user/inputs/UserUpsertWithoutBodyDetailInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneRequiredWithoutBodyDetailNestedInput', { isAbstract: true })
export class UserUpdateOneRequiredWithoutBodyDetailNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutBodyDetailInput, { nullable: true })
  create?: UserCreateWithoutBodyDetailInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutBodyDetailInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutBodyDetailInput, { nullable: true })
  upsert?: UserUpsertWithoutBodyDetailInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutBodyDetailInput, { nullable: true })
  update?: UserUpdateWithoutBodyDetailInput | undefined;
}
