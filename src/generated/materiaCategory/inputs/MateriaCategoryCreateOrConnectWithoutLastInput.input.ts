import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutLastInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateOrConnectWithoutLastInput', { isAbstract: true })
export class MateriaCategoryCreateOrConnectWithoutLastInput {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutLastInput)
  create!: MateriaCategoryCreateWithoutLastInput;
}
