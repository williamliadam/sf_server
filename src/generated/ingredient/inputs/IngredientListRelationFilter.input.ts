import * as NestJsGraphQL from "@nestjs/graphql";
import { IngredientWhereInput } from "../../ingredient/inputs/IngredientWhereInput.input";

@NestJsGraphQL.InputType('IngredientListRelationFilter', { isAbstract: true })
export class IngredientListRelationFilter {
  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  every?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  some?: IngredientWhereInput | undefined;

  @NestJsGraphQL.Field(() => IngredientWhereInput, { nullable: true })
  none?: IngredientWhereInput | undefined;
}
