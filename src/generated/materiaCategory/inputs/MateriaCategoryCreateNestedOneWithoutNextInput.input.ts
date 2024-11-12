import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateOrConnectWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutNextInput.input";
import { MateriaCategoryCreateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutNextInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateNestedOneWithoutNextInput', { isAbstract: true })
export class MateriaCategoryCreateNestedOneWithoutNextInput {
  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutNextInput, { nullable: true })
  create?: MateriaCategoryCreateWithoutNextInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateOrConnectWithoutNextInput, { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput | undefined;
}
