import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { MaterialOrderByWithRelationInput } from "../../material/inputs/MaterialOrderByWithRelationInput.input";
import { NutritionOrderByWithRelationInput } from "../../nutrition/inputs/NutritionOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('NutritionRowOrderByWithRelationInput', { isAbstract: true })
export class NutritionRowOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nutirtionId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  percent?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  belongToId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => NutritionOrderByWithRelationInput, { nullable: true })
  nutirtion?: NutritionOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => MaterialOrderByWithRelationInput, { nullable: true })
  belongMaterial?: MaterialOrderByWithRelationInput | undefined;
}
