import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileCreateOrConnectWithoutUserInput } from "../../profile/inputs/ProfileCreateOrConnectWithoutUserInput.input";
import { ProfileCreateWithoutUserInput } from "../../profile/inputs/ProfileCreateWithoutUserInput.input";
import { ProfileUpdateWithoutUserInput } from "../../profile/inputs/ProfileUpdateWithoutUserInput.input";
import { ProfileUpsertWithoutUserInput } from "../../profile/inputs/ProfileUpsertWithoutUserInput.input";
import { ProfileWhereUniqueInput } from "../../profile/inputs/ProfileWhereUniqueInput.input";

@NestJsGraphQL.InputType('ProfileUpdateOneWithoutUserNestedInput', { isAbstract: true })
export class ProfileUpdateOneWithoutUserNestedInput {
  @NestJsGraphQL.Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  create?: ProfileCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => ProfileUpsertWithoutUserInput, { nullable: true })
  upsert?: ProfileUpsertWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput, { nullable: true })
  connect?: ProfileWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => ProfileUpdateWithoutUserInput, { nullable: true })
  update?: ProfileUpdateWithoutUserInput | undefined;
}
