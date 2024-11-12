import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutNextInput.input";
import { MateriaCategoryUpdateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutNextInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpsertWithoutNextInput', { isAbstract: true })
export class MateriaCategoryUpsertWithoutNextInput {
  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutNextInput)
  update!: MateriaCategoryUpdateWithoutNextInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutNextInput)
  create!: MateriaCategoryCreateWithoutNextInput;
}
