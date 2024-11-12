import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { DishTemplateListRelationFilter } from "../../dishTemplate/inputs/DishTemplateListRelationFilter.input";
import { UserRelationFilter } from "../../user/inputs/UserRelationFilter.input";

@NestJsGraphQL.InputType('MealTemplateWhereInput', { isAbstract: true })
export class MealTemplateWhereInput {
  @NestJsGraphQL.Field(() => [MealTemplateWhereInput], { nullable: true })
  AND?: MealTemplateWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereInput], { nullable: true })
  OR?: MealTemplateWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealTemplateWhereInput], { nullable: true })
  NOT?: MealTemplateWhereInput[] | undefined;

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

  @NestJsGraphQL.Field(() => UserRelationFilter, { nullable: true })
  createBy?: UserRelationFilter | undefined;

  @NestJsGraphQL.Field(() => DishTemplateListRelationFilter, { nullable: true })
  dishTemplates?: DishTemplateListRelationFilter | undefined;
}
