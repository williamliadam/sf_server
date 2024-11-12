import * as NestJsGraphQL from "@nestjs/graphql";
import { RecipeCreateNestedOneWithoutUsedDishTemplatesInput } from "../../recipe/inputs/RecipeCreateNestedOneWithoutUsedDishTemplatesInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateWithoutUsedMealTemplatesInput', { isAbstract: true })
export class DishTemplateCreateWithoutUsedMealTemplatesInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateNestedOneWithoutUsedDishTemplatesInput)
  recipe!: RecipeCreateNestedOneWithoutUsedDishTemplatesInput;
}
