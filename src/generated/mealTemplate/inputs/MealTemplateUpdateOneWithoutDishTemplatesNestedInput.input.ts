import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateOrConnectWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateOrConnectWithoutDishTemplatesInput.input";
import { MealTemplateCreateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateWithoutDishTemplatesInput.input";
import { MealTemplateUpdateWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateUpdateWithoutDishTemplatesInput.input";
import { MealTemplateUpsertWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateUpsertWithoutDishTemplatesInput.input";
import { MealTemplateWhereUniqueInput } from "../../mealTemplate/inputs/MealTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('MealTemplateUpdateOneWithoutDishTemplatesNestedInput', { isAbstract: true })
export class MealTemplateUpdateOneWithoutDishTemplatesNestedInput {
  @NestJsGraphQL.Field(() => MealTemplateCreateWithoutDishTemplatesInput, { nullable: true })
  create?: MealTemplateCreateWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateOrConnectWithoutDishTemplatesInput, { nullable: true })
  connectOrCreate?: MealTemplateCreateOrConnectWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateUpsertWithoutDishTemplatesInput, { nullable: true })
  upsert?: MealTemplateUpsertWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereUniqueInput, { nullable: true })
  connect?: MealTemplateWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateUpdateWithoutDishTemplatesInput, { nullable: true })
  update?: MealTemplateUpdateWithoutDishTemplatesInput | undefined;
}
