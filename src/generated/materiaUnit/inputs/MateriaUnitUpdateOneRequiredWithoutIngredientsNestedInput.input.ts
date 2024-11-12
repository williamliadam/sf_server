import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitCreateOrConnectWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateOrConnectWithoutIngredientsInput.input";
import { MateriaUnitCreateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitCreateWithoutIngredientsInput.input";
import { MateriaUnitUpdateWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitUpdateWithoutIngredientsInput.input";
import { MateriaUnitUpsertWithoutIngredientsInput } from "../../materiaUnit/inputs/MateriaUnitUpsertWithoutIngredientsInput.input";
import { MateriaUnitWhereUniqueInput } from "../../materiaUnit/inputs/MateriaUnitWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput', { isAbstract: true })
export class MateriaUnitUpdateOneRequiredWithoutIngredientsNestedInput {
  @NestJsGraphQL.Field(() => MateriaUnitCreateWithoutIngredientsInput, { nullable: true })
  create?: MateriaUnitCreateWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitCreateOrConnectWithoutIngredientsInput, { nullable: true })
  connectOrCreate?: MateriaUnitCreateOrConnectWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitUpsertWithoutIngredientsInput, { nullable: true })
  upsert?: MateriaUnitUpsertWithoutIngredientsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereUniqueInput, { nullable: true })
  connect?: MateriaUnitWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitUpdateWithoutIngredientsInput, { nullable: true })
  update?: MateriaUnitUpdateWithoutIngredientsInput | undefined;
}
