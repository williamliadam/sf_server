import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../../common/inputs/DateTimeWithAggregatesFilter.input";
import { IntWithAggregatesFilter } from "../../common/inputs/IntWithAggregatesFilter.input";
import { StringWithAggregatesFilter } from "../../common/inputs/StringWithAggregatesFilter.input";

@NestJsGraphQL.InputType('RecipeScalarWhereWithAggregatesInput', { isAbstract: true })
export class RecipeScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [RecipeScalarWhereWithAggregatesInput], { nullable: true })
  AND?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarWhereWithAggregatesInput], { nullable: true })
  OR?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: RecipeScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  stars?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  authorId?: IntWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
