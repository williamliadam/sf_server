import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateWhereInput } from "../../mealTemplate/inputs/MealTemplateWhereInput.input";

@NestJsGraphQL.InputType('MealTemplateRelationFilter', { isAbstract: true })
export class MealTemplateRelationFilter {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  is?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  isNot?: MealTemplateWhereInput | undefined;
}
