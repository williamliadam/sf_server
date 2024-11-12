import * as NestJsGraphQL from "@nestjs/graphql";
import { UserCreateNestedOneWithoutMyPostsInput } from "../../user/inputs/UserCreateNestedOneWithoutMyPostsInput.input";

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published?: boolean | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyPostsInput, { nullable: true })
  author?: UserCreateNestedOneWithoutMyPostsInput | undefined;
}
