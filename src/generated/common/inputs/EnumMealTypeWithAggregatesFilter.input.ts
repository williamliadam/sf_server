import * as NestJsGraphQL from "@nestjs/graphql";
import { MealType } from "../../enums/MealType.enum";
import { NestedEnumMealTypeFilter } from "./NestedEnumMealTypeFilter.input";
import { NestedEnumMealTypeWithAggregatesFilter } from "./NestedEnumMealTypeWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('EnumMealTypeWithAggregatesFilter', { isAbstract: true })
export class EnumMealTypeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => MealType, { nullable: true })
  equals?: "BREAKFAST" | "LUNCH" | "DINNER" | "MEAL" | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  in?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => [MealType], { nullable: true })
  notIn?: Array<"BREAKFAST" | "LUNCH" | "DINNER" | "MEAL"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeWithAggregatesFilter, { nullable: true })
  not?: NestedEnumMealTypeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _min?: NestedEnumMealTypeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumMealTypeFilter, { nullable: true })
  _max?: NestedEnumMealTypeFilter | undefined;
}
