import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { MaterialRelationFilter } from "../../material/inputs/MaterialRelationFilter.input";
import { NutritionRelationFilter } from "../../nutrition/inputs/NutritionRelationFilter.input";

@NestJsGraphQL.InputType('NutritionRowWhereInput', { isAbstract: true })
export class NutritionRowWhereInput {
  @NestJsGraphQL.Field(() => [NutritionRowWhereInput], { nullable: true })
  AND?: NutritionRowWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereInput], { nullable: true })
  OR?: NutritionRowWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowWhereInput], { nullable: true })
  NOT?: NutritionRowWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  nutirtionId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  percent?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  belongToId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => NutritionRelationFilter, { nullable: true })
  nutirtion?: NutritionRelationFilter | undefined;

  @NestJsGraphQL.Field(() => MaterialRelationFilter, { nullable: true })
  belongMaterial?: MaterialRelationFilter | undefined;
}
