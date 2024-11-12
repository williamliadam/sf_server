import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutMaterialsInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateOrConnectWithoutMaterialsInput', { isAbstract: true })
export class MateriaCategoryCreateOrConnectWithoutMaterialsInput {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutMaterialsInput)
  create!: MateriaCategoryCreateWithoutMaterialsInput;
}
