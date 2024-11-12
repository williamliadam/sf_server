import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { IntFilter } from "../../common/inputs/IntFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";

@NestJsGraphQL.InputType('RecipeScalarWhereInput', { isAbstract: true })
export class RecipeScalarWhereInput {
  @NestJsGraphQL.Field(() => [RecipeScalarWhereInput], { nullable: true })
  AND?: RecipeScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarWhereInput], { nullable: true })
  OR?: RecipeScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [RecipeScalarWhereInput], { nullable: true })
  NOT?: RecipeScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  id?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  stars?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => IntFilter, { nullable: true })
  authorId?: IntFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;
}
