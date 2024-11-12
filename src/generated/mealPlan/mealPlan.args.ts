import * as NestJsGraphQL from "@nestjs/graphql";
import { MealPlanScalarFieldEnum } from "../common/enums";
import { MealPlanCreateInput } from "../mealPlan/inputs/MealPlanCreateInput.input";
import { MealPlanCreateManyInput } from "../mealPlan/inputs/MealPlanCreateManyInput.input";
import { MealPlanOrderByWithAggregationInput } from "../mealPlan/inputs/MealPlanOrderByWithAggregationInput.input";
import { MealPlanOrderByWithRelationInput } from "../mealPlan/inputs/MealPlanOrderByWithRelationInput.input";
import { MealPlanScalarWhereWithAggregatesInput } from "../mealPlan/inputs/MealPlanScalarWhereWithAggregatesInput.input";
import { MealPlanUpdateInput } from "../mealPlan/inputs/MealPlanUpdateInput.input";
import { MealPlanUpdateManyMutationInput } from "../mealPlan/inputs/MealPlanUpdateManyMutationInput.input";
import { MealPlanWhereInput } from "../mealPlan/inputs/MealPlanWhereInput.input";
import { MealPlanWhereUniqueInput } from "../mealPlan/inputs/MealPlanWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: MealPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput, { nullable: true })
  cursor?: MealPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyMealPlanArgs {
  @NestJsGraphQL.Field(() => [MealPlanCreateManyInput])
  data!: MealPlanCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanCreateInput)
  data!: MealPlanCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: MealPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput, { nullable: true })
  cursor?: MealPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "planTime" | "userId" | "createdAt" | "updatedAt" | "type"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: MealPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput, { nullable: true })
  cursor?: MealPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "planTime" | "userId" | "createdAt" | "updatedAt" | "type"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [MealPlanOrderByWithAggregationInput], { nullable: true })
  orderBy?: MealPlanOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [MealPlanScalarFieldEnum])
  by!: Array<"id" | "planTime" | "userId" | "createdAt" | "updatedAt" | "type">;

  @NestJsGraphQL.Field(() => MealPlanScalarWhereWithAggregatesInput, { nullable: true })
  having?: MealPlanScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanUpdateManyMutationInput)
  data!: MealPlanUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => MealPlanWhereInput, { nullable: true })
  where?: MealPlanWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanUpdateInput)
  data!: MealPlanUpdateInput;

  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneMealPlanArgs {
  @NestJsGraphQL.Field(() => MealPlanWhereUniqueInput)
  where!: MealPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => MealPlanCreateInput)
  create!: MealPlanCreateInput;

  @NestJsGraphQL.Field(() => MealPlanUpdateInput)
  update!: MealPlanUpdateInput;
}
