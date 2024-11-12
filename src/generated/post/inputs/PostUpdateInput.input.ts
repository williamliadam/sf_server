import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { NullableBoolFieldUpdateOperationsInput } from "../../common/inputs/NullableBoolFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { UserUpdateOneWithoutMyPostsNestedInput } from "../../user/inputs/UserUpdateOneWithoutMyPostsNestedInput.input";

@NestJsGraphQL.InputType('PostUpdateInput', { isAbstract: true })
export class PostUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  published?: NullableBoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UserUpdateOneWithoutMyPostsNestedInput, { nullable: true })
  author?: UserUpdateOneWithoutMyPostsNestedInput | undefined;
}
