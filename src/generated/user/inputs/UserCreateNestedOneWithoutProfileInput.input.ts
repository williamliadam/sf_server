import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutProfileInput } from "../../user/inputs/UserCreateOrConnectWithoutProfileInput.input";
import { UserCreateWithoutProfileInput } from "../../user/inputs/UserCreateWithoutProfileInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutProfileInput', { isAbstract: true })
export class UserCreateNestedOneWithoutProfileInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutProfileInput, { nullable: true })
  create?: UserCreateWithoutProfileInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutProfileInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutProfileInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
