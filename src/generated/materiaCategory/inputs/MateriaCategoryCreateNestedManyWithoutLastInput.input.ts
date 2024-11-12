import * as NestJsGraphQL from "@nestjs/graphql";
import { MateriaCategoryCreateManyLastInputEnvelope } from "../../materiaCategory/inputs/MateriaCategoryCreateManyLastInputEnvelope.input";
import { MateriaCategoryCreateOrConnectWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateOrConnectWithoutLastInput.input";
import { MateriaCategoryCreateWithoutLastInput } from "../../materiaCategory/inputs/MateriaCategoryCreateWithoutLastInput.input";
import { MateriaCategoryWhereUniqueInput } from "../../materiaCategory/inputs/MateriaCategoryWhereUniqueInput.input";

@NestJsGraphQL.InputType('MateriaCategoryCreateNestedManyWithoutLastInput', { isAbstract: true })
export class MateriaCategoryCreateNestedManyWithoutLastInput {
  @NestJsGraphQL.Field(() => [MateriaCategoryCreateWithoutLastInput], { nullable: true })
  create?: MateriaCategoryCreateWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryCreateOrConnectWithoutLastInput], { nullable: true })
  connectOrCreate?: MateriaCategoryCreateOrConnectWithoutLastInput[] | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryCreateManyLastInputEnvelope, { nullable: true })
  createMany?: MateriaCategoryCreateManyLastInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MateriaCategoryWhereUniqueInput], { nullable: true })
  connect?: MateriaCategoryWhereUniqueInput[] | undefined;
}
