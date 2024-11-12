import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryWhereInput } from "../../materiaCategory/inputs/MateriaCategoryWhereInput.input";

@NestJsGraphQL.InputType('MateriaCategoryRelationFilter', { isAbstract: true })
export class MateriaCategoryRelationFilter {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  is?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  isNot?: MateriaCategoryWhereInput | undefined;
}
