import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";
import { MealTemplateRelationFilter } from "../../mealTemplate/inputs/MealTemplateRelationFilter.input";
import { RecipeRelationFilter } from "../../recipe/inputs/RecipeRelationFilter.input";

@NestJsGraphQL.InputType('DishTemplateWhereInput', { isAbstract: true })
export class DishTemplateWhereInput {
  @NestJsGraphQL.Field(() => [DishTemplateWhereInput], { nullable: true })
  AND?: DishTemplateWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereInput], { nullable: true })
  OR?: DishTemplateWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateWhereInput], { nullable: true })
  NOT?: DishTemplateWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  recipeId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  amount?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  mealTemplateId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => MealTemplateRelationFilter, { nullable: true })
  usedMealTemplates?: MealTemplateRelationFilter | undefined;

  @NestJsGraphQL.Field(() => RecipeRelationFilter, { nullable: true })
  recipe?: RecipeRelationFilter | undefined;
}
