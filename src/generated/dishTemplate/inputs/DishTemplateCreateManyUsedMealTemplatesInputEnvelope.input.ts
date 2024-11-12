import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyUsedMealTemplatesInput } from "../../dishTemplate/inputs/DishTemplateCreateManyUsedMealTemplatesInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateManyUsedMealTemplatesInputEnvelope', { isAbstract: true })
export class DishTemplateCreateManyUsedMealTemplatesInputEnvelope {
  @NestJsGraphQL.Field(() => [DishTemplateCreateManyUsedMealTemplatesInput])
  data!: DishTemplateCreateManyUsedMealTemplatesInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
