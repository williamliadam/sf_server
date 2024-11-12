import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { IngredientListRelationFilter } from "../../ingredient/inputs/IngredientListRelationFilter.input";

@NestJsGraphQL.InputType('MateriaUnitWhereInput', { isAbstract: true })
export class MateriaUnitWhereInput {
  @NestJsGraphQL.Field(() => [MateriaUnitWhereInput], { nullable: true })
  AND?: MateriaUnitWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitWhereInput], { nullable: true })
  OR?: MateriaUnitWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MateriaUnitWhereInput], { nullable: true })
  NOT?: MateriaUnitWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  code?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  toKilo?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => IngredientListRelationFilter, { nullable: true })
  ingredients?: IngredientListRelationFilter | undefined;
}
