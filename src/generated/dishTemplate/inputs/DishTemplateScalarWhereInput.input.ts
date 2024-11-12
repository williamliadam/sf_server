import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { IntNullableFilter } from "../../common/inputs/IntNullableFilter.input";

@NestJsGraphQL.InputType('DishTemplateScalarWhereInput', { isAbstract: true })
export class DishTemplateScalarWhereInput {
  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereInput], { nullable: true })
  AND?: DishTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereInput], { nullable: true })
  OR?: DishTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishTemplateScalarWhereInput], { nullable: true })
  NOT?: DishTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  recipeId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  amount?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => IntNullableFilter, { nullable: true })
  mealTemplateId?: IntNullableFilter | undefined;
}
