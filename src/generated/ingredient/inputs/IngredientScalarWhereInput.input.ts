import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";

@NestJsGraphQL.InputType('IngredientScalarWhereInput', { isAbstract: true })
export class IngredientScalarWhereInput {
  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  AND?: IngredientScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  OR?: IngredientScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [IngredientScalarWhereInput], { nullable: true })
  NOT?: IngredientScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materialId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  amount?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  materiaUnitId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  recipeId?: IntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
