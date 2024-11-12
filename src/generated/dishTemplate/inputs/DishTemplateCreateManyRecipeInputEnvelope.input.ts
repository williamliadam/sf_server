import * as NestJsGraphQL from "@nestjs/graphql";
import { DishTemplateCreateManyRecipeInput } from "../../dishTemplate/inputs/DishTemplateCreateManyRecipeInput.input";

@NestJsGraphQL.InputType('DishTemplateCreateManyRecipeInputEnvelope', { isAbstract: true })
export class DishTemplateCreateManyRecipeInputEnvelope {
  @NestJsGraphQL.Field(() => [DishTemplateCreateManyRecipeInput])
  data!: DishTemplateCreateManyRecipeInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
