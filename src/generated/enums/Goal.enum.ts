import * as NestJsGraphQL from "@nestjs/graphql";

export enum Goal {
  KEEP = "KEEP",
  BULKING = "BULKING",
  SLIMING = "SLIMING"
}
NestJsGraphQL.registerEnumType(Goal, {
  name: "Goal",
  description: undefined,
});
