import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { NullableIntFieldUpdateOperationsInput } from "../../common/inputs/NullableIntFieldUpdateOperationsInput.input";

@NestJsGraphQL.InputType('BodyDetailUpdateWithoutUserInput', { isAbstract: true })
export class BodyDetailUpdateWithoutUserInput {
  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  weight?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  height?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  age?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  bmi?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  bmr?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  tdee?: NullableIntFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
