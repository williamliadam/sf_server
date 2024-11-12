import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('DishTemplateCreateManyRecipeInput', { isAbstract: true })
export class DishTemplateCreateManyRecipeInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  amount!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  mealTemplateId?: number | undefined;
}
