import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyUnitInput } from "../../ingredient/inputs/IngredientCreateManyUnitInput.input";

@NestJsGraphQL.InputType('IngredientCreateManyUnitInputEnvelope', { isAbstract: true })
export class IngredientCreateManyUnitInputEnvelope {
  @NestJsGraphQL.Field(() => [IngredientCreateManyUnitInput])
  data!: IngredientCreateManyUnitInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
