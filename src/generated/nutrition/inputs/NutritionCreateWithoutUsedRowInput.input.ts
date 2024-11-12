import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NutritionCreateWithoutUsedRowInput', { isAbstract: true })
export class NutritionCreateWithoutUsedRowInput {
  @NestJsGraphQL.Field(() => String)
  code!: string;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
