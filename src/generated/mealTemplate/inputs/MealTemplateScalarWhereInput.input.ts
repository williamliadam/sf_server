import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('MealTemplateScalarWhereInput', { isAbstract: true })
export class MealTemplateScalarWhereInput {
  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereInput], { nullable: true })
  AND?: MealTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereInput], { nullable: true })
  OR?: MealTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateScalarWhereInput], { nullable: true })
  NOT?: MealTemplateScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  userId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
