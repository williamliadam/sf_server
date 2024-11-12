import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { IngredientListRelationFilter } from "../../ingredient/inputs/IngredientListRelationFilter.input";
import { MateriaCategoryRelationFilter } from "../../materiaCategory/inputs/MateriaCategoryRelationFilter.input";
import { NutritionRowListRelationFilter } from "../../nutritionRow/inputs/NutritionRowListRelationFilter.input";

@NestJsGraphQL.InputType('MaterialWhereInput', { isAbstract: true })
export class MaterialWhereInput {
  @NestJsGraphQL.Field(() => [MaterialWhereInput], { nullable: true })
  AND?: MaterialWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereInput], { nullable: true })
  OR?: MaterialWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MaterialWhereInput], { nullable: true })
  NOT?: MaterialWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  nickName?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materiaCategoryId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => MateriaCategoryRelationFilter, { nullable: true })
  category?: MateriaCategoryRelationFilter | undefined;

  @NestJsGraphQL.Field(() => NutritionRowListRelationFilter, { nullable: true })
  nutritionMatrix?: NutritionRowListRelationFilter | undefined;

  @NestJsGraphQL.Field(() => IngredientListRelationFilter, { nullable: true })
  ingredients?: IngredientListRelationFilter | undefined;
}
