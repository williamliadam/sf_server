import * as NestJsGraphQL from "@nestjs/graphql";
import { NutritionRowScalarFieldEnum } from "../common/enums";
import { NutritionRowCreateInput } from "../nutritionRow/inputs/NutritionRowCreateInput.input";
import { NutritionRowCreateManyInput } from "../nutritionRow/inputs/NutritionRowCreateManyInput.input";
import { NutritionRowOrderByWithAggregationInput } from "../nutritionRow/inputs/NutritionRowOrderByWithAggregationInput.input";
import { NutritionRowOrderByWithRelationInput } from "../nutritionRow/inputs/NutritionRowOrderByWithRelationInput.input";
import { NutritionRowScalarWhereWithAggregatesInput } from "../nutritionRow/inputs/NutritionRowScalarWhereWithAggregatesInput.input";
import { NutritionRowUpdateInput } from "../nutritionRow/inputs/NutritionRowUpdateInput.input";
import { NutritionRowUpdateManyMutationInput } from "../nutritionRow/inputs/NutritionRowUpdateManyMutationInput.input";
import { NutritionRowWhereInput } from "../nutritionRow/inputs/NutritionRowWhereInput.input";
import { NutritionRowWhereUniqueInput } from "../nutritionRow/inputs/NutritionRowWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregateNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => [NutritionRowCreateManyInput])
  data!: NutritionRowCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowCreateInput)
  data!: NutritionRowCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithRelationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput, { nullable: true })
  cursor?: NutritionRowWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowOrderByWithAggregationInput], { nullable: true })
  orderBy?: NutritionRowOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [NutritionRowScalarFieldEnum])
  by!: Array<"id" | "nutirtionId" | "percent" | "belongToId" | "createdAt" | "updatedAt">;

  @NestJsGraphQL.Field(() => NutritionRowScalarWhereWithAggregatesInput, { nullable: true })
  having?: NutritionRowScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowUpdateManyMutationInput)
  data!: NutritionRowUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => NutritionRowWhereInput, { nullable: true })
  where?: NutritionRowWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowUpdateInput)
  data!: NutritionRowUpdateInput;

  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneNutritionRowArgs {
  @NestJsGraphQL.Field(() => NutritionRowWhereUniqueInput)
  where!: NutritionRowWhereUniqueInput;

  @NestJsGraphQL.Field(() => NutritionRowCreateInput)
  create!: NutritionRowCreateInput;

  @NestJsGraphQL.Field(() => NutritionRowUpdateInput)
  update!: NutritionRowUpdateInput;
}
