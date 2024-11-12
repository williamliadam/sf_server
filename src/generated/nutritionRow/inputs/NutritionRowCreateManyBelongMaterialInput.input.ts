import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NutritionRowCreateManyBelongMaterialInput', { isAbstract: true })
export class NutritionRowCreateManyBelongMaterialInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  nutirtionId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  percent!: number;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
