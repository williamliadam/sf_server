import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileCreateOrConnectWithoutUserInput } from "../../profile/inputs/ProfileCreateOrConnectWithoutUserInput.input";
import { ProfileCreateWithoutUserInput } from "../../profile/inputs/ProfileCreateWithoutUserInput.input";
import { ProfileWhereUniqueInput } from "../../profile/inputs/ProfileWhereUniqueInput.input";

@NestJsGraphQL.InputType('ProfileCreateNestedOneWithoutUserInput', { isAbstract: true })
export class ProfileCreateNestedOneWithoutUserInput {
  @NestJsGraphQL.Field(() => ProfileCreateWithoutUserInput, { nullable: true })
  create?: ProfileCreateWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => ProfileCreateOrConnectWithoutUserInput, { nullable: true })
  connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput, { nullable: true })
  connect?: ProfileWhereUniqueInput | undefined;
}
