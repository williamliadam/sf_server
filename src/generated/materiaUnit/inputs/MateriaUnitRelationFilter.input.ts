import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaUnitWhereInput } from "../../materiaUnit/inputs/MateriaUnitWhereInput.input";

@NestJsGraphQL.InputType('MateriaUnitRelationFilter', { isAbstract: true })
export class MateriaUnitRelationFilter {
  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  is?: MateriaUnitWhereInput | undefined;

  @NestJsGraphQL.Field(() => MateriaUnitWhereInput, { nullable: true })
  isNot?: MateriaUnitWhereInput | undefined;
}
