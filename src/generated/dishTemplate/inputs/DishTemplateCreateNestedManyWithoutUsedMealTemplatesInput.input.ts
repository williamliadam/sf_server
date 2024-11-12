import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyUsedMealTemplatesInputEnvelope } from "../../dishTemplate/inputs/DishTemplateCreateManyUsedMealTemplatesInputEnvelope.input";
import { DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput.input";
import { DishTemplateCreateWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateWithoutUsedMealTemplatesInput.input";
import { DishTemplateWhereUniqueInput } from "../../dishTemplate/inputs/DishTemplateWhereUniqueInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => [DishTemplateCreateWithoutUsedMealTemplatesInput], { nullable: true })
  create?: DishTemplateCreateWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput], { nullable: true })
  connectOrCreate?: DishTemplateCreateOrConnectWithoutUsedMealTemplatesInput[] | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateManyUsedMealTemplatesInputEnvelope, { nullable: true })
  createMany?: DishTemplateCreateManyUsedMealTemplatesInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereUniqueInput], { nullable: true })
  connect?: DishTemplateWhereUniqueInput[] | undefined;
}
