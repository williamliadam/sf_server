import * as NestJsGraphQL from "@nestjs/graphql";
import { MealTemplateCreateManyCreateByInput } from "../../mealTemplate/inputs/MealTemplateCreateManyCreateByInput.input";

@NestJsGraphQL.InputType('MealTemplateCreateManyCreateByInputEnvelope', { isAbstract: true })
export class MealTemplateCreateManyCreateByInputEnvelope {
  @NestJsGraphQL.Field(() => [MealTemplateCreateManyCreateByInput])
  data!: MealTemplateCreateManyCreateByInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
