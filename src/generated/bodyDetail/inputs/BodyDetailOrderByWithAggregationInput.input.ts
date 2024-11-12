import * as NestJsGraphQL from "@nestjs/graphql";
import { BodyDetailAvgOrderByAggregateInput } from "../../bodyDetail/inputs/BodyDetailAvgOrderByAggregateInput.input";
import { BodyDetailCountOrderByAggregateInput } from "../../bodyDetail/inputs/BodyDetailCountOrderByAggregateInput.input";
import { BodyDetailMaxOrderByAggregateInput } from "../../bodyDetail/inputs/BodyDetailMaxOrderByAggregateInput.input";
import { BodyDetailMinOrderByAggregateInput } from "../../bodyDetail/inputs/BodyDetailMinOrderByAggregateInput.input";
import { BodyDetailSumOrderByAggregateInput } from "../../bodyDetail/inputs/BodyDetailSumOrderByAggregateInput.input";
import { SortOrder } from "../../common/enums";

@NestJsGraphQL.InputType('BodyDetailOrderByWithAggregationInput', { isAbstract: true })
export class BodyDetailOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  weight?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  height?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  age?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  bmi?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  bmr?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  tdee?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => BodyDetailCountOrderByAggregateInput, { nullable: true })
  _count?: BodyDetailCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailAvgOrderByAggregateInput, { nullable: true })
  _avg?: BodyDetailAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailMaxOrderByAggregateInput, { nullable: true })
  _max?: BodyDetailMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailMinOrderByAggregateInput, { nullable: true })
  _min?: BodyDetailMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => BodyDetailSumOrderByAggregateInput, { nullable: true })
  _sum?: BodyDetailSumOrderByAggregateInput | undefined;
}
