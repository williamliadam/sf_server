import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateOrConnectWithoutMyPostsInput } from "../../user/inputs/UserCreateOrConnectWithoutMyPostsInput.input";
import { UserCreateWithoutMyPostsInput } from "../../user/inputs/UserCreateWithoutMyPostsInput.input";
import { UserUpdateWithoutMyPostsInput } from "../../user/inputs/UserUpdateWithoutMyPostsInput.input";
import { UserUpsertWithoutMyPostsInput } from "../../user/inputs/UserUpsertWithoutMyPostsInput.input";
import { UserWhereUniqueInput } from "../../user/inputs/UserWhereUniqueInput.input";

@NestJsGraphQL.InputType('UserUpdateOneWithoutMyPostsNestedInput', { isAbstract: true })
export class UserUpdateOneWithoutMyPostsNestedInput {
  @NestJsGraphQL.Field(() => UserCreateWithoutMyPostsInput, { nullable: true })
  create?: UserCreateWithoutMyPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserCreateOrConnectWithoutMyPostsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMyPostsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpsertWithoutMyPostsInput, { nullable: true })
  upsert?: UserUpsertWithoutMyPostsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateWithoutMyPostsInput, { nullable: true })
  update?: UserUpdateWithoutMyPostsInput | undefined;
}
