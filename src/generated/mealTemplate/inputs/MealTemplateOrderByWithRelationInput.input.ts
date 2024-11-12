import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { DishTemplateOrderByRelationAggregateInput } from "../../dishTemplate/inputs/DishTemplateOrderByRelationAggregateInput.input";
import { UserOrderByWithRelationInput } from "../../user/inputs/UserOrderByWithRelationInput.input";

@NestJsGraphQL.InputType('MealTemplateOrderByWithRelationInput', { isAbstract: true })
export class MealTemplateOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UserOrderByWithRelationInput, { nullable: true })
  createBy?: UserOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => DishTemplateOrderByRelationAggregateInput, { nullable: true })
  dishTemplates?: DishTemplateOrderByRelationAggregateInput | undefined;
}
