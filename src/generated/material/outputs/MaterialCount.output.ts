import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('MaterialCount', { isAbstract: true })
export class MaterialCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nutritionMatrix!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  ingredients!: number;
}
