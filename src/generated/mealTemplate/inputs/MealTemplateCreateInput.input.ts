import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput.input";
import { UserCreateNestedOneWithoutMyMealTemplatesInput } from "../../user/inputs/UserCreateNestedOneWithoutMyMealTemplatesInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateInput', { isAbstract: true })
export class MealTemplateCreateInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyMealTemplatesInput)
  createBy!: UserCreateNestedOneWithoutMyMealTemplatesInput;

  @NestJsGraphQL.Field(() => DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput, { nullable: true })
  dishTemplates?: DishTemplateCreateNestedManyWithoutUsedMealTemplatesInput | undefined;
}
