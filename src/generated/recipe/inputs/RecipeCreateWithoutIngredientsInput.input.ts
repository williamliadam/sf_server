import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateNestedManyWithoutRecipeInput } from "../../dishPlan/inputs/DishPlanCreateNestedManyWithoutRecipeInput.input";
import { DishTemplateCreateNestedManyWithoutRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateNestedManyWithoutRecipeInput.input";
import { MethodCreateNestedManyWithoutUsedRecipeInput } from "../../method/inputs/MethodCreateNestedManyWithoutUsedRecipeInput.input";
import { UserCreateNestedOneWithoutMyRecipesInput } from "../../user/inputs/UserCreateNestedOneWithoutMyRecipesInput.input";

@NestJsGraphQL.InputType('RecipeCreateWithoutIngredientsInput', { isAbstract: true })
export class RecipeCreateWithoutIngredientsInput {
  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  stars!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => UserCreateNestedOneWithoutMyRecipesInput)
  author!: UserCreateNestedOneWithoutMyRecipesInput;

  @NestJsGraphQL.Field(() => MethodCreateNestedManyWithoutUsedRecipeInput, { nullable: true })
  methods?: MethodCreateNestedManyWithoutUsedRecipeInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateNestedManyWithoutRecipeInput, { nullable: true })
  usedDishPlans?: DishPlanCreateNestedManyWithoutRecipeInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateCreateNestedManyWithoutRecipeInput, { nullable: true })
  usedDishTemplates?: DishTemplateCreateNestedManyWithoutRecipeInput | undefined;
}
