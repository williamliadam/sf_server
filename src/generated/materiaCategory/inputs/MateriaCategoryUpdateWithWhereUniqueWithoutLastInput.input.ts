import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryUpdateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutLastInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateWithWhereUniqueWithoutLastInput', { isAbstract: true })
export class MateriaCategoryUpdateWithWhereUniqueWithoutLastInput {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutLastInput)
  data!: MateriaCategoryUpdateWithoutLastInput;
}
