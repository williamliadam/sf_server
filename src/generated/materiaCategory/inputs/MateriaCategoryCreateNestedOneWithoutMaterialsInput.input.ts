import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutMaterialsInput.input";
import { MateriaCategoryCreateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutMaterialsInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateNestedOneWithoutMaterialsInput', { isAbstract: true })
export class MateriaCategoryCreateNestedOneWithoutMaterialsInput {
  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutMaterialsInput, { nullable: true })
  create?: MateriaCategoryCreateWithoutMaterialsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput, { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput | undefined;
}
