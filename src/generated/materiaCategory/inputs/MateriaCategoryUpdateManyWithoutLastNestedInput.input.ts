import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateManyLastInputEnvelope } from "../../materiaCategory/inputs/MateriaCategoryCreateManyLastInputEnvelope.input";
import { MateriaCategoryCreateOrConnectWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutLastInput.input";
import { MateriaCategoryCreateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutLastInput.input";
import { MateriaCategoryScalarWhereInput } from "../../materiaCategory/inputs/MateriaCategoryScalarWhereInput.input";
import { MateriaCategoryUpdateManyWithWhereWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateManyWithWhereWithoutLastInput.input";
import { MateriaCategoryUpdateWithWhereUniqueWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryUpdateWithWhereUniqueWithoutLastInput.input";
import { MateriaCategoryUpsertWithWhereUniqueWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryUpsertWithWhereUniqueWithoutLastInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryUpdateManyWithoutLastNestedInput', { isAbstract: true })
export class MateriaCategoryUpdateManyWithoutLastNestedInput {
  @NestJsGraphQL.Field(() => [MateriaCategoryCreateWithoutLastInput], { nullable: true })
  create?: MateriaCategoryCreateWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryCreateOrConnectWithoutLastInput], { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryUpsertWithWhereUniqueWithoutLastInput], { nullable: true })
  upsert?: MateriaCategoryUpsertWithWhereUniqueWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateManyLastInputEnvelope, { nullable: true })
  createMany?: MateriaCategoryCreateManyLastInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
  set?: MateriaCategoryWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
  disconnect?: MateriaCategoryWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
  delete?: MateriaCategoryWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryUpdateWithWhereUniqueWithoutLastInput], { nullable: true })
  update?: MateriaCategoryUpdateWithWhereUniqueWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryUpdateManyWithWhereWithoutLastInput], { nullable: true })
  updateMany?: MateriaCategoryUpdateManyWithWhereWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryScalarWhereInput], { nullable: true })
  deleteMany?: MateriaCategoryScalarWhereInput[] | undefined;
}
