import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { DishPlanListRelationFilter } from "../../dishPlan/inputs/DishPlanListRelationFilter.input";
import { DishTemplateListRelationFilter } from "../../dishTemplate/inputs/DishTemplateListRelationFilter.input";
import { IngredientListRelationFilter } from "../../ingredient/inputs/IngredientListRelationFilter.input";
import { MethodListRelationFilter } from "../../method/inputs/MethodListRelationFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('RecipeWhereInput', { isAbstract: true })
export class RecipeWhereInput {
  @NestJsGraphQL.Field(() => [RecipeWhereInput], { nullable: true })
  AND?: RecipeWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereInput], { nullable: true })
  OR?: RecipeWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeWhereInput], { nullable: true })
  NOT?: RecipeWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  stars?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  authorId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  author?: UserRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IngredientListRelationFilter, { nullable: true })
  ingredients?: IngredientListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MethodListRelationFilter, { nullable: true })
  methods?: MethodListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DishPlanListRelationFilter, { nullable: true })
  usedDishPlans?: DishPlanListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DishTemplateListRelationFilter, { nullable: true })
  usedDishTemplates?: DishTemplateListRelationFilter | undefined;
}
