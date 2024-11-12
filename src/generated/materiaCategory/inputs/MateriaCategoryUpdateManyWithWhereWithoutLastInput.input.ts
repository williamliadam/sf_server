import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryScalarWhereInput } from "../../materiaCategory/inputs/MateriaCategoryScalarWhereInput.input";
import { MateriaCategoryUpdateManyMutationInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateManyWithWhereWithoutLastInput', { isAbstract: true })
export class MateriaCategoryUpdateManyWithWhereWithoutLastInput {
  @NestJsGraphQL.Field(() => MateriaCategoryScalarWhereInput)
  where!: MateriaCategoryScalarWhereInput;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateManyMutationInput)
  data!: MateriaCategoryUpdateManyMutationInput;
}
