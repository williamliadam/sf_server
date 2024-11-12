import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutNextInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateOrConnectWithoutNextInput', { isAbstract: true })
export class MateriaCategoryCreateOrConnectWithoutNextInput {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutNextInput)
  create!: MateriaCategoryCreateWithoutNextInput;
}
