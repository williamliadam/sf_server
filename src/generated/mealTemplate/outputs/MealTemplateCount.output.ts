import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MealTemplateCount', { isAbstract: true })
export class MealTemplateCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  dishTemplates!: number;
}
