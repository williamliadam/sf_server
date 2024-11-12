import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionWhereInput } from "../../nutrition/inputs/NutritionWhereInput.input";

@NestJsGraphQL.InputType('NutritionRelationFilter', { isAbstract: true })
export class NutritionRelationFilter {
  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  is?: NutritionWhereInput | undefined;

  @NestJsGraphQL.Field(() => NutritionWhereInput, { nullable: true })
  isNot?: NutritionWhereInput | undefined;
}
