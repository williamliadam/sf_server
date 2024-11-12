import * as NestJsGraphQL from "@nestjs/graphql";
import { MethodCreateManyUsedRecipeInputEnvelope } from "../../method/inputs/MethodCreateManyUsedRecipeInputEnvelope.input";
import { MethodCreateOrConnectWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateOrConnectWithoutUsedRecipeInput.input";
import { MethodCreateWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateWithoutUsedRecipeInput.input";
import { MethodScalarWhereInput } from "../../method/inputs/MethodScalarWhereInput.input";
import { MethodUpdateManyWithWhereWithoutUsedRecipeInput } from "../../method/inputs/MethodUpdateManyWithWhereWithoutUsedRecipeInput.input";
import { MethodUpdateWithWhereUniqueWithoutUsedRecipeInput } from "../../method/inputs/MethodUpdateWithWhereUniqueWithoutUsedRecipeInput.input";
import { MethodUpsertWithWhereUniqueWithoutUsedRecipeInput } from "../../method/inputs/MethodUpsertWithWhereUniqueWithoutUsedRecipeInput.input";
import { MethodWhereUniqueInput } from "../../method/inputs/MethodWhereUniqueInput.input";

@NestJsGraphQL.InputType('MethodUpdateManyWithoutUsedRecipeNestedInput', { isAbstract: true })
export class MethodUpdateManyWithoutUsedRecipeNestedInput {
  @NestJsGraphQL.Field(() => [MethodCreateWithoutUsedRecipeInput], { nullable: true })
  create?: MethodCreateWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodCreateOrConnectWithoutUsedRecipeInput], { nullable: true })
  connectOrCreate?: MethodCreateOrConnectWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodUpsertWithWhereUniqueWithoutUsedRecipeInput], { nullable: true })
  upsert?: MethodUpsertWithWhereUniqueWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => MethodCreateManyUsedRecipeInputEnvelope, { nullable: true })
  createMany?: MethodCreateManyUsedRecipeInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereUniqueInput], { nullable: true })
  set?: MethodWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereUniqueInput], { nullable: true })
  disconnect?: MethodWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereUniqueInput], { nullable: true })
  delete?: MethodWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodWhereUniqueInput], { nullable: true })
  connect?: MethodWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodUpdateWithWhereUniqueWithoutUsedRecipeInput], { nullable: true })
  update?: MethodUpdateWithWhereUniqueWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodUpdateManyWithWhereWithoutUsedRecipeInput], { nullable: true })
  updateMany?: MethodUpdateManyWithWhereWithoutUsedRecipeInput[] | undefined;

  @NestJsGraphQL.Field(() => [MethodScalarWhereInput], { nullable: true })
  deleteMany?: MethodScalarWhereInput[] | undefined;
}
