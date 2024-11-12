import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUsedRecipeInput } from "../../ingredient/inputs/IngredientCreateManyUsedRecipeInput.input";

@NestJsGraphQL.InputType('IngredientCreateManyUsedRecipeInputEnvelope', { isAbstract: true })
export class IngredientCreateManyUsedRecipeInputEnvelope {
  @NestJsGraphQL.Field(() => [IngredientCreateManyUsedRecipeInput])
  data!: IngredientCreateManyUsedRecipeInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
