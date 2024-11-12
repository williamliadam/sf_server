import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateNestedManyWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateNestedManyWithoutLastInput.input";
import { MateriaCategoryCreateNestedOneWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateNestedOneWithoutNextInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateWithoutMaterialsInput', { isAbstract: true })
export class MateriaCategoryCreateWithoutMaterialsInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateNestedManyWithoutLastInput, { nullable: true })
  next?: MateriaCategoryCreateNestedManyWithoutLastInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateNestedOneWithoutNextInput, { nullable: true })
  last?: MateriaCategoryCreateNestedOneWithoutNextInput | undefined;
}
