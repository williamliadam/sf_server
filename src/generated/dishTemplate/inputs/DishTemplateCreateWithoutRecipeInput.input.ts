import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateNestedOneWithoutDishTemplatesInput } from "../../mealTemplate/inputs/MealTemplateCreateNestedOneWithoutDishTemplatesInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateWithoutRecipeInput', { isAbstract: true })
export class DishTemplateCreateWithoutRecipeInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateNestedOneWithoutDishTemplatesInput, { nullable: true })
  usedMealTemplates?: MealTemplateCreateNestedOneWithoutDishTemplatesInput | undefined;
}
