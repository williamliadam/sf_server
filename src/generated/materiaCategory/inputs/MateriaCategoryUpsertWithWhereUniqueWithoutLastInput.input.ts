import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutLastInput.input";
import { MateriaCategoryUpdateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutLastInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpsertWithWhereUniqueWithoutLastInput', { isAbstract: true })
export class MateriaCategoryUpsertWithWhereUniqueWithoutLastInput {
  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput)
  where!: MateriaCategoryWhereUniqueInput;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutLastInput)
  update!: MateriaCategoryUpdateWithoutLastInput;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutLastInput)
  create!: MateriaCategoryCreateWithoutLastInput;
}
