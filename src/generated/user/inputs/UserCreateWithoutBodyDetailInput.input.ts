import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanCreateNestedManyWithoutPlanCookerInput } from "../../dishPlan/inputs/DishPlanCreateNestedManyWithoutPlanCookerInput.input";
import { Role } from "../../enums/Role.enum";
import { MealPlanCreateNestedManyWithoutCreateByInput } from "../../mealPlan/inputs/MealPlanCreateNestedManyWithoutCreateByInput.input";
import { MealTemplateCreateNestedManyWithoutCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateNestedManyWithoutCreateByInput.input";
import { PostCreateNestedManyWithoutAuthorInput } from "../../post/inputs/PostCreateNestedManyWithoutAuthorInput.input";
import { ProfileCreateNestedOneWithoutUserInput } from "../../profile/inputs/ProfileCreateNestedOneWithoutUserInput.input";
import { RecipeCreateNestedManyWithoutAuthorInput } from "../../recipe/inputs/RecipeCreateNestedManyWithoutAuthorInput.input";

@NestJsGraphQL.InputType('UserCreateWithoutBodyDetailInput', { isAbstract: true })
export class UserCreateWithoutBodyDetailInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  name?: string | undefined;

  @NestJsGraphQL.Field(() => String)
  password!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  phone?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  wxId?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Role, { nullable: true })
  role?: "USER" | "ADMIN" | undefined;

  @NestJsGraphQL.Field(() => ProfileCreateNestedOneWithoutUserInput, { nullable: true })
  profile?: ProfileCreateNestedOneWithoutUserInput | undefined;

  @NestJsGraphQL.Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  myPosts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @NestJsGraphQL.Field(() => RecipeCreateNestedManyWithoutAuthorInput, { nullable: true })
  myRecipes?: RecipeCreateNestedManyWithoutAuthorInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateCreateNestedManyWithoutCreateByInput, { nullable: true })
  myMealTemplates?: MealTemplateCreateNestedManyWithoutCreateByInput | undefined;

  @NestJsGraphQL.Field(() => MealPlanCreateNestedManyWithoutCreateByInput, { nullable: true })
  myMealPlans?: MealPlanCreateNestedManyWithoutCreateByInput | undefined;

  @NestJsGraphQL.Field(() => DishPlanCreateNestedManyWithoutPlanCookerInput, { nullable: true })
  chargeDishPlans?: DishPlanCreateNestedManyWithoutPlanCookerInput | undefined;
}