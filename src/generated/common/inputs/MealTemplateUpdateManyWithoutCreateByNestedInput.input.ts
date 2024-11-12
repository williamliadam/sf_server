import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateManyCreateByInputEnvelope } from "../../mealTemplate/inputs/MealTemplateCreateManyCreateByInputEnvelope.input";
import { MealTemplateCreateOrConnectWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateOrConnectWithoutCreateByInput.input";
import { MealTemplateCreateWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutCreateByInput.input";
import { MealTemplateScalarWhereInput } from "../../mealTemplate/inputs/MealTemplateScalarWhereInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";
import { MealTemplateUpdateManyWithWhereWithoutCreateByInput } from "./MealTemplateUpdateManyWithWhereWithoutCreateByInput.input";
import { MealTemplateUpdateWithWhereUniqueWithoutCreateByInput } from "./MealTemplateUpdateWithWhereUniqueWithoutCreateByInput.input";
import { MealTemplateUpsertWithWhereUniqueWithoutCreateByInput } from "./MealTemplateUpsertWithWhereUniqueWithoutCreateByInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateManyWithoutCreateByNestedInput', { isAbstract: true })
export class MealTemplateUpdateManyWithoutCreateByNestedInput {
  @NestJsGraphQL.Field(() => [MealTemplateCreateWithoutCreateByInput], { nullable: true })
  create?: MealTemplateCreateWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateCreateOrConnectWithoutCreateByInput], { nullable: true })
  connectOrCreate?: MealTemplateCreateOrConnectWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateUpsertWithWhereUniqueWithoutCreateByInput], { nullable: true })
  upsert?: MealTemplateUpsertWithWhereUniqueWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateManyCreateByInputEnvelope, { nullable: true })
  createMany?: MealTemplateCreateManyCreateByInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereUniqueInput], { nullable: true })
  set?: MealTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereUniqueInput], { nullable: true })
  disconnect?: MealTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereUniqueInput], { nullable: true })
  delete?: MealTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereUniqueInput], { nullable: true })
  connect?: MealTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateUpdateWithWhereUniqueWithoutCreateByInput], { nullable: true })
  update?: MealTemplateUpdateWithWhereUniqueWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateUpdateManyWithWhereWithoutCreateByInput], { nullable: true })
  updateMany?: MealTemplateUpdateManyWithWhereWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereInput], { nullable: true })
  deleteMany?: MealTemplateScalarWhereInput[] | undefined;
}
