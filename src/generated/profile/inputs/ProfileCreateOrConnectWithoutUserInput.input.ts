import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileCreateWithoutUserInput } from "../../profile/inputs/ProfileCreateWithoutUserInput.input";
import { ProfileWhereUniqueInput } from "../../profile/inputs/ProfileWhereUniqueInput.input";

@NestJsGraphQL.InputType('ProfileCreateOrConnectWithoutUserInput', { isAbstract: true })
export class ProfileCreateOrConnectWithoutUserInput {
  @NestJsGraphQL.Field(() => ProfileWhereUniqueInput)
  where!: ProfileWhereUniqueInput;

  @NestJsGraphQL.Field(() => ProfileCreateWithoutUserInput)
  create!: ProfileCreateWithoutUserInput;
}
