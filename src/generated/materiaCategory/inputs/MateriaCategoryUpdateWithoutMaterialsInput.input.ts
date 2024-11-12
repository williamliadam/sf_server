import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { MateriaCategoryUpdateManyWithoutLastNestedInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateManyWithoutLastNestedInput.input";
import { MateriaCategoryUpdateOneWithoutNextNestedInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateOneWithoutNextNestedInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateWithoutMaterialsInput', { isAbstract: true })
export class MateriaCategoryUpdateWithoutMaterialsInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateManyWithoutLastNestedInput, { nullable: true })
  next?: MateriaCategoryUpdateManyWithoutLastNestedInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateOneWithoutNextNestedInput, { nullable: true })
  last?: MateriaCategoryUpdateOneWithoutNextNestedInput | undefined;
}
