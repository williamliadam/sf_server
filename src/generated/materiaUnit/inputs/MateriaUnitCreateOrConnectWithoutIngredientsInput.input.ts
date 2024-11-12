import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitCreateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateWithoutIngredientsInput.input";
import { MateriaUnitWhereUniqueInput } from "../../materiaUnit/inputs/MateriaUnitWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaUnitCreateOrConnectWithoutIngredientsInput', { isAbstract: true })
export class MateriaUnitCreateOrConnectWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput)
  where!: MateriaUnitWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaUnitCreateWithoutIngredientsInput)
  create!: MateriaUnitCreateWithoutIngredientsInput;
}
