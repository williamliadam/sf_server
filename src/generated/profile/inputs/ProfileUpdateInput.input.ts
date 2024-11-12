import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumGoalFieldUpdateOperationsInput } from "../../common/inputs/EnumGoalFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { UserUpdateOneRequiredWithoutProfileNestedInput } from "../../user/inputs/UserUpdateOneRequiredWithoutProfileNestedInput.input";

@NestJsGraphQL.InputType('ProfileUpdateInput', { isAbstract: true })
export class ProfileUpdateInput {
  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  nickName?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => EnumGoalFieldUpdateOperationsInput, { nullable: true })
  goal?: EnumGoalFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined;
}
