import * as NestJsGraphQL from "@nestjs/graphql";

export enum MealType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  MEAL = "MEAL"
}
NestJsGraphQL.registerEnumType(MealType, {
  name: "MealType",
  description: undefined,
});
