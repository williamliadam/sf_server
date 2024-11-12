import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateNestedOneWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateNestedOneWithoutNextInput.input";
import { MaterialCreateNestedManyWithoutCategoryInput } from "../../material/inputs/MaterialCreateNestedManyWithoutCategoryInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateWithoutNextInput', { isAbstract: true })
export class MateriaCategoryCreateWithoutNextInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MaterialCreateNestedManyWithoutCategoryInput, { nullable: true })
  materials?: MaterialCreateNestedManyWithoutCategoryInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateNestedOneWithoutNextInput, { nullable: true })
  last?: MateriaCategoryCreateNestedOneWithoutNextInput | undefined;
}
