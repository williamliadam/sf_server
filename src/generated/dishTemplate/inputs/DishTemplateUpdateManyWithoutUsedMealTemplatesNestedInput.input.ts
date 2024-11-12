import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from "../../dishTemplate/inputs/DishTemplateCreateManyUsedMealTemplatesInputEnvelope.input";
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput.input";
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutUsedMealTemplatesInput.input";
import { DishTemplateScalarWhereInput } from "../../dishTemplate/inputs/DishTemplateScalarWhereInput.input";
import { DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput.input";
import { DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput.input";
import { DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput', { isAbstract: true })
export class DishTemplateUpdateManyWithoutUsedMealTemplatesNestedInput {
  @NestJsGraphQL.Field(() => [DishTemplateCreateWithoutUsedMealTemplatesInput], { nullable: true })
  create?: DishTemplateCreateWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput], { nullable: true })
  connectOrCreate?: DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput], { nullable: true })
  upsert?: DishTemplateUpsertWithWhereUniqueWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope, { nullable: true })
  createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  set?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  disconnect?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  delete?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  connect?: DishTemplateWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput], { nullable: true })
  update?: DishTemplateUpdateWithWhereUniqueWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput], { nullable: true })
  updateMany?: DishTemplateUpdateManyWithWhereWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereInput], { nullable: true })
  deleteMany?: DishTemplateScalarWhereInput[] | undefined;
}
