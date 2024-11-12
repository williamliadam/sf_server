import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { NutritionRowOrderByRelationAggregateInput } from "../../nutritionRow/inputs/NutritionRowOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('NutritionOrderByWithRelationInput', { isAbstract: true })
export class NutritionOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => NutritionRowOrderByRelationAggregateInput, { nullable: true })
  usedRow?: NutritionRowOrderByRelationAggregateInput | undefined;
}
