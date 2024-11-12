import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateWithoutCreateByInput', { isAbstract: true })
export class MealTemplateCreateWithoutCreateByInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, { nullable: true })
  dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput | undefined;
}
