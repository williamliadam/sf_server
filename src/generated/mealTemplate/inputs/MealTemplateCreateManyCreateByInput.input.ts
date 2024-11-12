import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('MealTemplateCreateManyCreateByInput', { isAbstract: true })
export class MealTemplateCreateManyCreateByInput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  id?: number | undefined;

  @NestJsGraphQL.Field(() => String)
  name!: string;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;
}
