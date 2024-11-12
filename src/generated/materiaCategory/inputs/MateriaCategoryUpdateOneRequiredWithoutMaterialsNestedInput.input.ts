import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateOrConnectWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutMaterialsInput.input";
import { MateriaCategoryCreateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutMaterialsInput.input";
import { MateriaCategoryUpdateWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithoutMaterialsInput.input";
import { MateriaCategoryUpsertWithoutMaterialsInput } from "../../materiaCategory/inputs/MateriaCategoryUpsertWithoutMaterialsInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput', { isAbstract: true })
export class MateriaCategoryUpdateOneRequiredWithoutMaterialsNestedInput {
  @NestJsGraphQL.Field(() => MateriaCategoryCreateWithoutMaterialsInput, { nullable: true })
  create?: MateriaCategoryCreateWithoutMaterialsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateOrConnectWithoutMaterialsInput, { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutMaterialsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpsertWithoutMaterialsInput, { nullable: true })
  upsert?: MateriaCategoryUpsertWithoutMaterialsInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryWhereUniqueInput, { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryUpdateWithoutMaterialsInput, { nullable: true })
  update?: MateriaCategoryUpdateWithoutMaterialsInput | undefined;
}
