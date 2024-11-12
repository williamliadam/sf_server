import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NutritionRowCreateManyNutirtionInput', { isAbstract: true })
export class NutritionRowCreateManyNutirtionInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  belongToId!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
