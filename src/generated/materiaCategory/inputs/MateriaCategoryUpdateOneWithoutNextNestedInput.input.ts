import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateOrConnectWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutNextInput.input";
import { MateriaCategoryCreateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutNextInput.input";
import { MateriaCategoryUpdateWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutNextInput.input";
import { MateriaCategoryUpsertWithoutNextInput } from "../../materiaCategory/inputs/MateriaCategoryUpsertWithoutNextInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateOneWithoutNextNestedInput', { isAbstract: true })
export class MateriaCategoryUpdateOneWithoutNextNestedInput {
  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutNextInput, { nullable: true })
  create?: MateriaCategoryCreateWithoutNextInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateOrConnectWithoutNextInput, { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutNextInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpsertWithoutNextInput, { nullable: true })
  upsert?: MateriaCategoryUpsertWithoutNextInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutNextInput, { nullable: true })
  update?: MateriaCategoryUpdateWithoutNextInput | undefined;
}
