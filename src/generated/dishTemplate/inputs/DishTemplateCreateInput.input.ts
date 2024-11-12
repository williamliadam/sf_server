import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateNestedOneWithoutDishTemplatesInput.input";
import { RecipeCreateNestedOneWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutUsedDishTemplatesInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateInput', { isAbstract: true })
export class DishTemplateCreateInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateNestedOneWithoutDishTemplatesInput, { nullable: true })
  usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutUsedDishTemplatesInput)
  recipe!: RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
}
