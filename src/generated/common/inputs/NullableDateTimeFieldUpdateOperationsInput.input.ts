import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NullableDateTimeFieldUpdateOperationsInput', { isAbstract: true })
export class NullableDateTimeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  set?: Date | undefined;
}
