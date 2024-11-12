import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { NutritionRowListRelationFilter } from "../../nutritionRow/inputs/NutritionRowListRelationFilter.input";

@NestJsGraphQL.InputType('NutritionWhereInput', { isAbstract: true })
export class NutritionWhereInput {
  @NestJsGraphQL.Field(() => [NutritionWhereInput], { nullable: true })
  AND?: NutritionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionWhereInput], { nullable: true })
  OR?: NutritionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionWhereInput], { nullable: true })
  NOT?: NutritionWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => NutritionRowListRelationFilter, { nullable: true })
  usedRow?: NutritionRowListRelationFilter | undefined;
}
