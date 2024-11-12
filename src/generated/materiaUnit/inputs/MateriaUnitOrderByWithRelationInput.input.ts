import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { IngredientOrderByRelationAggregateInput } from "../../ingredient/inputs/IngredientOrderByRelationAggregateInput.input";

@NestJsGraphQL.InputType('MateriaUnitOrderByWithRelationInput', { isAbstract: true })
export class MateriaUnitOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  code?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  toKilo?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => IngredientOrderByRelationAggregateInput, { nullable: true })
  ingredients?: IngredientOrderByRelationAggregateInput | undefined;
}
