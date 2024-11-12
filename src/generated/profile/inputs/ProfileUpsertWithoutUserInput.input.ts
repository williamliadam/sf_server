import * as NestJsGraphQL from "@nestjs/graphql";
import { ProfileCreateWithoutUserInput } from "../../profile/inputs/ProfileCreateWithoutUserInput.input";
import { ProfileUpdateWithoutUserInput } from "../../profile/inputs/ProfileUpdateWithoutUserInput.input";

@NestJsGraphQL.InputType('ProfileUpsertWithoutUserInput', { isAbstract: true })
export class ProfileUpsertWithoutUserInput {
  @NestJsGraphQL.Field(() => ProfileUpdateWithoutUserInput)
  update!: ProfileUpdateWithoutUserInput;

  @NestJsGraphQL.Field(() => ProfileCreateWithoutUserInput)
  create!: ProfileCreateWithoutUserInput;
}
