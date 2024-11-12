import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutMaterialsInput.input";
import { MateriaCategoryUpdateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutMaterialsInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpsertWithoutMaterialsInput', { isAbstract: true })
export class MateriaCategoryUpsertWithoutMaterialsInput {
  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutMaterialsInput)
  update!: MateriaCategoryUpdateWithoutMaterialsInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutMaterialsInput)
  create!: MateriaCategoryCreateWithoutMaterialsInput;
}
