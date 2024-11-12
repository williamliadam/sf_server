import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { ProfileAvgOrderByAggregateInput } from "../../profile/inputs/ProfileAvgOrderByAggregateInput.input";
import { ProfileCountOrderByAggregateInput } from "../../profile/inputs/ProfileCountOrderByAggregateInput.input";
import { ProfileMaxOrderByAggregateInput } from "../../profile/inputs/ProfileMaxOrderByAggregateInput.input";
import { ProfileMinOrderByAggregateInput } from "../../profile/inputs/ProfileMinOrderByAggregateInput.input";
import { ProfileSumOrderByAggregateInput } from "../../profile/inputs/ProfileSumOrderByAggregateInput.input";

@NestJsGraphQL.InputType('ProfileOrderByWithAggregationInput', { isAbstract: true })
export class ProfileOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  avatar?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  nickName?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  userId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  goal?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => ProfileCountOrderByAggregateInput, { nullable: true })
  _count?: ProfileCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => ProfileAvgOrderByAggregateInput, { nullable: true })
  _avg?: ProfileAvgOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => ProfileMaxOrderByAggregateInput, { nullable: true })
  _max?: ProfileMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => ProfileMinOrderByAggregateInput, { nullable: true })
  _min?: ProfileMinOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => ProfileSumOrderByAggregateInput, { nullable: true })
  _sum?: ProfileSumOrderByAggregateInput | undefined;
}
