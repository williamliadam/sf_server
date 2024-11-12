import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientCreateManyMaterialInput } from "../../ingredient/inputs/IngredientCreateManyMaterialInput.input";

@NestJsGraphQL.InputType('IngredientCreateManyMaterialInputEnvelope', { isAbstract: true })
export class IngredientCreateManyMaterialInputEnvelope {
  @NestJsGraphQL.Field(() => [IngredientCreateManyMaterialInput])
  data!: IngredientCreateManyMaterialInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
