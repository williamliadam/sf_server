import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { MateriaCategoryUpdateOneWithoutNextNestedInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateOneWithoutNextNestedInput.input";
import { MaterialUpdateManyWithoutCategoryNestedInput } from "../../material/inputs/MaterialUpdateManyWithoutCategoryNestedInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateWithoutNextInput', { isAbstract: true })
export class MateriaCategoryUpdateWithoutNextInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => MaterialUpdateManyWithoutCategoryNestedInput, { nullable: true })
  materials?: MaterialUpdateManyWithoutCategoryNestedInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateOneWithoutNextNestedInput, { nullable: true })
  last?: MateriaCategoryUpdateOneWithoutNextNestedInput | undefined;
}
