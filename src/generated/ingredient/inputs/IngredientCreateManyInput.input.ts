import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('IngredientCreateManyInput', { isAbstract: true })
export class IngredientCreateManyInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materialId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  materiaUnitId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  recipeId?: number | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}