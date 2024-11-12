import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryWhereInput } from "../../materiaCategory/inputs/MateriaCategoryWhereInput.input";

@NestJsGraphQL.InputType('MateriaCategoryListRelationFilter', { isAbstract: true })
export class MateriaCategoryListRelationFilter {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  every?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  some?: MateriaCategoryWhereInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereInput, { nullable: true })
  none?: MateriaCategoryWhereInput | undefined;
}
