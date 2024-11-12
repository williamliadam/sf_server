import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitCreateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateWithoutIngredientsInput.input";
import { MateriaUnitUpdateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitUpdateWithoutIngredientsInput.input";

@NestJsGraphQL.InputType('MateriaUnitUpsertWithoutIngredientsInput', { isAbstract: true })
export class MateriaUnitUpsertWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MateriaUnitUpdateWithoutIngredientsInput)
  update!: MateriaUnitUpdateWithoutIngredientsInput;

  @NestJsGraphQL.Field(() => MateriaUnitCreateWithoutIngredientsInput)
  create!: MateriaUnitCreateWithoutIngredientsInput;
}
