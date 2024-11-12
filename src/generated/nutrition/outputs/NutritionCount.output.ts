import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('NutritionCount', { isAbstract: true })
export class NutritionCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  usedRow!: number;
}
