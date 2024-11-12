import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateOrConnectWithoutIngredientsInput.input";
import { MateriaUnitCreateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateWithoutIngredientsInput.input";
import { MateriaUnitWhereUniqueInput } from "../../materiaUnit/inputs/MateriaUnitWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaUnitCreateNestedOneWithoutIngredientsInput', { isAbstract: true })
export class MateriaUnitCreateNestedOneWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => MateriaUnitCreateWithoutIngredientsInput, { nullable: true })
  create?: MateriaUnitCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
  connect?: MateriaUnitWhereUniqueInput | undefined;
}
