import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutBodyDetailInput } from "../../user/inputs/UserCreateOrConnectWithoutBodyDetailInput.input";
import { UserCreateWithoutBodyDetailInput } from "../../user/inputs/UserCreateWithoutBodyDetailInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutBodyDetailInput', { isAbstract: true })
export class UserCreateNestedOneWithoutBodyDetailInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutBodyDetailInput, { nullable: true })
  create?: UserCreateWithoutBodyDetailInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutBodyDetailInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBodyDetailInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
