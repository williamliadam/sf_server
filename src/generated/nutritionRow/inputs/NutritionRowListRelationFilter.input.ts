import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowWhereInput } from "../../nutritionRow/inputs/NutritionRowWhereInput.input";

@NestJsGraphQL.InputType('NutritionRowListRelationFilter', { isAbstract: true })
export class NutritionRowListRelationFilter {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  every?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  some?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  none?: NutritionRowWhereInput | undefined;
}
