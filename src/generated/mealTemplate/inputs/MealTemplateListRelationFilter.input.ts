import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateWhereInput } from "../../mealTemplate/inputs/MealTemplateWhereInput.input";

@NestJsGraphQL.InputType('MealTemplateListRelationFilter', { isAbstract: true })
export class MealTemplateListRelationFilter {
  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  every?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  some?: MealTemplateWhereInput | undefined;

  @NestJsGraphQL.Field(() => MealTemplateWhereInput, { nullable: true })
  none?: MealTemplateWhereInput | undefined;
}
