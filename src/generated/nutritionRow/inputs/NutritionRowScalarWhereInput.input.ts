import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";

@NestJsGraphQL.InputType('NutritionRowScalarWhereInput', { isAbstract: true })
export class NutritionRowScalarWhereInput {
  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereInput], { nullable: true })
  AND?: NutritionRowScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereInput], { nullable: true })
  OR?: NutritionRowScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarWhereInput], { nullable: true })
  NOT?: NutritionRowScalarWhereInput[] | undefined;

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
}
