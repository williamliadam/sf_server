import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateManyCreateByInputEnvelope } from "../../mealTemplate/inputs/MealTemplateCreateManyCreateByInputEnvelope.input";
import { MealTemplateCreateOrConnectWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateOrConnectWithoutCreateByInput.input";
import { MealTemplateCreateWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutCreateByInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateNestedManyWithoutCreateByInput', { isAbstract: true })
export class MealTemplateCreateNestedManyWithoutCreateByInput {
  @NestJsGraphQL.Field(() => [MealTemplateCreateWithoutCreateByInput], { nullable: true })
  create?: MealTemplateCreateWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateCreateOrConnectWithoutCreateByInput], { nullable: true })
  connectOrCreate?: MealTemplateCreateOrConnectWithoutCreateByInput[] | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateManyCreateByInputEnvelope, { nullable: true })
  createMany?: MealTemplateCreateManyCreateByInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereUniqueInput], { nullable: true })
  connect?: MealTemplateWhereUniqueInput[] | undefined;
}
