import * as NestJsGraphQL from "@nestjs/graphql";
import { DishPlanScalarFieldEnum } from "../common/enums";
import { DishPlanCreateInput } from "../dishPlan/inputs/DishPlanCreateInput.input";
import { DishPlanCreateManyInput } from "../dishPlan/inputs/DishPlanCreateManyInput.input";
import { DishPlanOrderByWithAggregationInput } from "../dishPlan/inputs/DishPlanOrderByWithAggregationInput.input";
import { DishPlanOrderByWithRelationInput } from "../dishPlan/inputs/DishPlanOrderByWithRelationInput.input";
import { DishPlanScalarWhereWithAggregatesInput } from "../dishPlan/inputs/DishPlanScalarWhereWithAggregatesInput.input";
import { DishPlanUpdateInput } from "../dishPlan/inputs/DishPlanUpdateInput.input";
import { DishPlanUpdateManyMutationInput } from "../dishPlan/inputs/DishPlanUpdateManyMutationInput.input";
import { DishPlanWhereInput } from "../dishPlan/inputs/DishPlanWhereInput.input";
import { DishPlanWhereUniqueInput } from "../dishPlan/inputs/DishPlanWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: DishPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput, { nullable: true })
  cursor?: DishPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyDishPlanArgs {
  @NestJsGraphQL.Field(() => [DishPlanCreateManyInput])
  data!: DishPlanCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanCreateInput)
  data!: DishPlanCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: DishPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput, { nullable: true })
  cursor?: DishPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "recipeId" | "amount" | "planCookerId" | "mealPlanId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishPlanOrderByWithRelationInput], { nullable: true })
  orderBy?: DishPlanOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput, { nullable: true })
  cursor?: DishPlanWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "recipeId" | "amount" | "planCookerId" | "mealPlanId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;

  @NestJsGraphQL.Field(() => [DishPlanOrderByWithAggregationInput], { nullable: true })
  orderBy?: DishPlanOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [DishPlanScalarFieldEnum])
  by!: Array<"id" | "recipeId" | "amount" | "planCookerId" | "mealPlanId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => DishPlanScalarWhereWithAggregatesInput, { nullable: true })
  having?: DishPlanScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanUpdateManyMutationInput)
  data!: DishPlanUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => DishPlanWhereInput, { nullable: true })
  where?: DishPlanWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanUpdateInput)
  data!: DishPlanUpdateInput;

  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneDishPlanArgs {
  @NestJsGraphQL.Field(() => DishPlanWhereUniqueInput)
  where!: DishPlanWhereUniqueInput;

  @NestJsGraphQL.Field(() => DishPlanCreateInput)
  create!: DishPlanCreateInput;

  @NestJsGraphQL.Field(() => DishPlanUpdateInput)
  update!: DishPlanUpdateInput;
}
