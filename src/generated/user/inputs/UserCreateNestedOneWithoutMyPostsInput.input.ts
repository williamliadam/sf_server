import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyPostsInput } from "../../user/inputs/UserCreateOrConnectWithoutMyPostsInput.input";
import { UserCreateWithoutMyPostsInput } from "../../user/inputs/UserCreateWithoutMyPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserCreateNestedOneWithoutMyPostsInput', { isAbstract: true })
export class UserCreateNestedOneWithoutMyPostsInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyPostsInput, { nullable: true })
  create?: UserCreateWithoutMyPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyPostsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
